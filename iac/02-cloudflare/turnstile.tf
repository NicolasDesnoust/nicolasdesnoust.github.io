resource "cloudflare_turnstile_widget" "contact_form_prod" {
  account_id = var.cloudflare_account_id
  name       = "portfolio contact form (prod)"
  domains    = [var.domain_name]
  mode       = "managed"
}

resource "cloudflare_turnstile_widget" "contact_form_dev" {
  account_id = var.cloudflare_account_id
  name       = "portfolio contact form (dev)"
  domains    = ["dev.${var.domain_name}"]
  mode       = "managed"
}
