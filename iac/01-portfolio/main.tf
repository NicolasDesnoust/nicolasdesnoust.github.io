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
# Portfolio
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
