variable "aws_region" {
  description = "Region used to deploy resources."
  type        = string
}

variable "environment" {
  description = "Environment label."
  type        = string
}

variable "environment_category" {
  description = "AWS environment segregation (nonprod, prod)."
  type        = string

  validation {
    condition     = contains(["nonprod", "prod"], var.environment_category)
    error_message = "Valid values for variable \"environment_category\" are (nonprod, prod)."
  }
}

variable "project" {
  description = "Project label."
  type        = string
}

variable "custom_global_tags" {
  description = "A map of custom tags applied globally to all resources."
  type        = map(string)
}

variable "contact_email" {
  description = "The email address designated to receive contact messages from visitors."
  type        = string
}

variable "root_domain_name" {
  description = "Root domain name. Example : my-domain.com"
  type        = string
}

variable "domain_name" {
  description = "Project domain name"
  type        = string
}
