terraform {
  required_version = "~> 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.32.0"
    }

    template = {
      source  = "hashicorp/template"
      version = "~> 2.2.0"
    }
  }
}

data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

locals {
  function_arns = {
    for key, value in var.functions :
    key => value.arn
  }

  template_variables = merge(
    local.function_arns,
    {
      base_url   = "https://<API_ID>.execute-api.${data.aws_region.current.name}.amazonaws.com/${var.env}"
      aws_region = data.aws_region.current.name
    }
  )

  api_path_prefix = "arn:aws:execute-api:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:${aws_api_gateway_rest_api.api.id}/${var.env}"
}

resource "local_sensitive_file" "api" {
  filename = "${path.module}/../../../build/api.yaml"
  content  = templatefile("${path.module}/../../../docs/api/build/api.yaml", local.template_variables)
}

resource "aws_api_gateway_rest_api" "api" {
  name           = format(var.naming_pattern, "api", "main")
  api_key_source = "HEADER"

  body = local_sensitive_file.api.content
}


resource "aws_api_gateway_deployment" "api" {
  rest_api_id = aws_api_gateway_rest_api.api.id

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.api.body))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_lambda_permission" "lambda_permissions" {
  for_each = var.functions

  action        = "lambda:InvokeFunction"
  function_name = each.value.name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.api.execution_arn}/*"
}
