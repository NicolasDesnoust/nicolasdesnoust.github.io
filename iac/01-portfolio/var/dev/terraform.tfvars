############################
# Global Parameters
############################
aws_region = "eu-west-3"

################################################
# Project variables
################################################
project              = "nde-portfolio"
environment          = "dev"
environment_category = "nonprod"
custom_global_tags = {
  cost-center        = "personal"
  provisionned-by    = "Terraform"
  git-repository-url = "https://github.com/NicolasDesnoust/nicolasdesnoust.github.io"
}
contact_email = "desnoust.nicolas451@gmail.com"

root_domain_name = "nicolasdesnoust.com"
domain_name      = "dev.nicolasdesnoust.com"
