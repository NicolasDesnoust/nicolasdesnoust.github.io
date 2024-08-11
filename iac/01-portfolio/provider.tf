###############################################
# AWS Provider Configuration
###############################################
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = module.naming.global_tags
  }
}

###############################################
# Terraform Version and Provider Constraints
###############################################
terraform {
  required_version = ">= 1.0.11"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.74.2"
    }
    tls = {
      source  = "hashicorp/tls"
      version = "= 3.4.0"
    }
  }

  backend "s3" {}
}
