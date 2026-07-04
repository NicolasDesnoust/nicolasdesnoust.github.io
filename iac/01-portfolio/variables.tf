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

variable "domain_name" {
  description = "Project domain name"
  type        = string
}

variable "turnstile_secret" {
  description = "Cloudflare Turnstile secret key for this environment (from iac/02-cloudflare turnstile_secrets output). Verified server-side by the send-contact-mail Lambda. Provide via TF_VAR_turnstile_secret; never commit it. For local/non-prod use the Cloudflare Turnstile test secret."
  type        = string
  sensitive   = true

  validation {
    condition     = length(trimspace(var.turnstile_secret)) > 0
    error_message = "turnstile_secret must be a non-empty Turnstile secret (use the Cloudflare test secret for local/non-prod)."
  }
}
