variable "naming_pattern" {
  description = "Resources naming pattern"
}

variable "domain_name" {
  description = "Root domain name. Example : my-domain.com"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ACM certificate ARN"
  type        = string
}
