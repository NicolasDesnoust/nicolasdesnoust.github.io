variable "project" {
  description = "Project label"
  type        = string
}

variable "environment" {
  description = "Environment label"
  type        = string
}

variable "environment_category" {
  description = "AWS environment segregation (nonprod, prod)"
  type        = string
  validation {
    condition     = contains(["nonprod", "prod"], var.environment_category)
    error_message = "Valid values for variable \"environment_category\" are (nonprod, prod)."
  }
}

variable "custom_global_tags" {
  description = "A map of custom tags applied globally to all resources"
  type        = map(string)
}
