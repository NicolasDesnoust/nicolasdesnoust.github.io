variable "env" {
  description = "Environment ID"
  type        = string
}

variable "naming_pattern" {
  description = "Naming pattern for all resources"
  type        = string
}

variable "functions" {
  type = map(object({
    arn  = string
    name = string
  }))
}
