############################
# Global Parameters
############################
aws_region = "eu-west-3"

################################################
# Project variables
################################################
project              = "nde-portfolio"
environment          = "dev"
environment_category = "non-prod"
custom_global_tags = {
  cost-center        = "personal"
  provisionned-by    = "Terraform"
  git-repository-url = "https://github.com/NicolasDesnoust/nicolasdesnoust.github.io"
}
