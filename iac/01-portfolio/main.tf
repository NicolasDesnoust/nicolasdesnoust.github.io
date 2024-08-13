data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
}

############################################
# Define module for naming convention & tags
############################################

module "naming" {
  source = "../modules/naming"

  project              = var.project
  environment          = var.environment
  environment_category = var.environment_category
  custom_global_tags   = var.custom_global_tags
}

############################################
# Portfolio Backend
############################################

resource "aws_ses_email_identity" "contact_email" {
  email = var.contact_email
}
data "aws_iam_policy_document" "lambda_common" {
  version = "2012-10-17"

  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda_common" {
  name               = format(module.naming.pattern2, "lambda", "common-role")
  assume_role_policy = data.aws_iam_policy_document.lambda_common.json
}

resource "aws_iam_policy" "lambda_common" {
  name = format(module.naming.pattern2, "lambda", "common-policy")
  policy = jsonencode({
    "Statement" : [
      {
        "Action" : [
          "logs:PutLogEvents",
          "logs:CreateLogStream",
          "logs:CreateLogGroup"
        ],
        "Effect" : "Allow",
        "Resource" : "arn:aws:logs:${var.aws_region}:${local.account_id}:log-group:/aws/lambda/${module.naming.pattern_prefix}*:*",
        "Sid" : "AllowLogs"
      },
      {
        "Action" : "ses:SendEmail",
        "Effect" : "Allow",
        "Resource" : [
          "arn:aws:ses:${var.aws_region}:${local.account_id}:identity/${var.contact_email}"
        ],
        "Sid" : "AllowSesSendEmail"
      },
    ],
    "Version" : "2012-10-17"
  })
}

resource "aws_iam_policy_attachment" "lambda_common" {
  name       = format(module.naming.pattern2, "lambda", "common")
  roles      = [aws_iam_role.lambda_common.name]
  policy_arn = aws_iam_policy.lambda_common.arn
}

module "send_contact_mail" {
  source                = "../modules/lambda"
  env                   = var.environment
  module_name           = "send-contact-mail"
  archive_path          = "functions/send-contact-mail/build"
  handler_path          = "backend/functions/send-contact-mail/src"
  naming_pattern        = module.naming.pattern2
  infrastructure_prefix = module.naming.pattern_prefix
  lambda_role           = aws_iam_role.lambda_common.arn
}

module "api" {
  source         = "../modules/api"
  env            = var.environment
  naming_pattern = module.naming.pattern2

  functions = {
    send_contact_mail = {
      arn  = module.send_contact_mail.function_arn,
      name = module.send_contact_mail.function_name
    }
  }
}

############################################
# Portfolio Frontend
############################################

data "aws_route53_zone" "zone" {
  name     = var.root_domain_name
  provider = aws.hosted_zone_provider
}

resource "aws_acm_certificate" "certificate" {
  provider          = aws.acm_provider # because ACM needs to be used in the "us-east-1" region
  domain_name       = "*.${var.domain_name}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  // We also want the cert to be valid for the root domain even though we'll be
  // redirecting to the www. domain immediately.
  subject_alternative_names = ["${var.domain_name}"]
}

resource "aws_route53_record" "certificate_records" {
  for_each = {
    for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.zone.id

  provider = aws.hosted_zone_provider
}

resource "aws_acm_certificate_validation" "default" {
  provider                = aws.acm_provider # because ACM needs to be used in the "us-east-1" region
  certificate_arn         = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_records : record.fqdn]
}

module "frontend" {
  source              = "../modules/frontend"
  naming_pattern      = module.naming.pattern2
  domain_name         = var.domain_name
  acm_certificate_arn = aws_acm_certificate_validation.default.certificate_arn
}

module "domain_name_records" {
  source           = "../modules/domain-name-records"
  root_domain_name = var.root_domain_name
  domain_name      = var.domain_name
  cloudfront_id    = module.frontend.cloudfront_id

  providers = {
    aws                      = aws
    aws.hosted_zone_provider = aws.hosted_zone_provider
  }
}
