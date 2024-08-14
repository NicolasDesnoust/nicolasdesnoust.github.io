locals {
  s3_origin_id    = "s3-origin"
  www_domain_name = "www.${var.domain_name}"
}

resource "aws_cloudfront_function" "path_rewriter" {
  name    = "path-rewriter-function"
  runtime = "cloudfront-js-2.0"

  code = <<EOF
async function handler(event) {
    const request = event.request;
    let uri = request.uri;

    // Check whether the URI is missing a file name and ends with a slash.
    if (uri.endsWith('/')) {
        uri += 'index.html';
    }
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        uri += '/index.html';
    }

    request.uri = uri;
    return request;
}
EOF
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.frontend.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.origin_access_control.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  logging_config {
    include_cookies = false
    bucket          = aws_s3_bucket.logs.bucket_domain_name
  }

  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 404
    response_code         = 404
    response_page_path    = "/errors/not-found/index.html"
  }
  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 403
    response_code         = 404
    response_page_path    = "/errors/not-found/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      headers = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.path_rewriter.arn
    }
  }

  price_class = "PriceClass_200"

  aliases = ["${local.www_domain_name}", "${var.domain_name}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_control" "origin_access_control" {
  name                              = format(var.naming_pattern, "origin-access-control", "main")
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
