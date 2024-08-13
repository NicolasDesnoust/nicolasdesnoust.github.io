###############################################
# AWS Provider Configurations
###############################################
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = module.naming.global_tags
  }
}

provider "aws" {
  alias   = "hosted_zone_provider"
  region  = var.aws_region
  profile = "nde_portfolio_dev"

  default_tags {
    tags = module.naming.global_tags
  }
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"

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
