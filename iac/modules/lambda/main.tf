terraform {
  required_version = "~> 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.32.0"
    }

    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.3.0"
    }
  }
}

data "archive_file" "function_archive" {

  type        = "zip"
  source_dir  = "${path.module}/../../../backend/${var.archive_path}"
  output_path = "${path.module}/../../build/${var.module_name}.zip"
}

module "lambda_function" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "7.2.1"

  function_name = format(var.naming_pattern, "lambda", var.module_name)
  create_role   = false
  lambda_role   = var.lambda_role

  handler                           = "${var.handler_path}/index.handler"
  runtime                           = "nodejs18.x"
  architectures                     = ["arm64"]
  memory_size                       = var.memory_size
  timeout                           = var.timeout
  cloudwatch_logs_retention_in_days = 180

  create_package         = false
  local_existing_package = data.archive_file.function_archive.output_path

  layers = var.layers

  environment_variables = merge({
    ENV                   = var.env,
    INFRASTRUCTURE_PREFIX = var.infrastructure_prefix
  }, var.environment_variables)
}
