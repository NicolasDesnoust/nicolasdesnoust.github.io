variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns the zone, Pages projects and Turnstile widgets."
  type        = string
}

variable "domain_name" {
  description = "Root domain managed by this stack."
  type        = string
  default     = "nicolasdesnoust.com"
}

variable "pages_project_prod" {
  description = "Cloudflare Pages project name serving the production site."
  type        = string
  default     = "portfolio"
}

variable "pages_project_dev" {
  description = "Cloudflare Pages project name serving the staging site."
  type        = string
  default     = "portfolio-dev"
}

variable "security_email" {
  description = "Contact address published in the CAA iodef record."
  type        = string
  default     = "desnoust.nicolas451@gmail.com"
}
