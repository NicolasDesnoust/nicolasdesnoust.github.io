terraform {
  required_version = ">= 1.0.11"

  required_providers {
    aws = {
      source                = "hashicorp/aws"
      version               = ">= 3.74.2"
      configuration_aliases = [aws.hosted_zone_provider]
    }
  }
}

data "aws_route53_zone" "zone" {
  name     = var.root_domain_name
  provider = aws.hosted_zone_provider
}

data "aws_cloudfront_distribution" "cloudfront" {
  id = var.cloudfront_id
}

resource "aws_route53_record" "root" {
  zone_id = data.aws_route53_zone.zone.id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = data.aws_cloudfront_distribution.cloudfront.domain_name
    zone_id                = data.aws_cloudfront_distribution.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }

  provider = aws.hosted_zone_provider
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.zone.id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = data.aws_cloudfront_distribution.cloudfront.domain_name
    zone_id                = data.aws_cloudfront_distribution.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }

  provider = aws.hosted_zone_provider
}
