variable "env" {
  description = "Environment ID"
  type        = string
}

variable "archive_path" {
  description = "Archive path"
  type        = string
}

variable "handler_path" {
  description = "Handler path"
  type        = string
}

variable "module_name" {
  description = "Module name"
  type        = string
}

variable "naming_pattern" {
  description = "Naming pattern for all resources"
  type        = string
}

variable "infrastructure_prefix" {
  description = "Infrastructure prefix of all resource names"
  type        = string
}

variable "environment_variables" {
  description = "Additional environment variables that will be available in the lambda function"
  type        = map(string)
  default     = {}
}

variable "timeout" {
  description = "The amount of time your Lambda Function has to run in seconds."
  type        = number
  default     = 3
}

variable "memory_size" {
  type        = number
  description = "Memory size"
  default     = 256
}

variable "lambda_role" {
  type        = string
  description = "IAM role ARN attached to the Lambda Function. This governs both who / what can invoke your Lambda Function, as well as what resources our Lambda Function has access to. See Lambda Permission Model for more details."
}

variable "layers" {
  type        = list(string)
  description = "List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function."
  default     = []
}
