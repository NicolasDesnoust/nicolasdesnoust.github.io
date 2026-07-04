output "name_servers" {
  description = "Cloudflare-assigned name servers. Set these at the domain registrar to activate the zone."
  value       = cloudflare_zone.root.name_servers
}

output "zone_id" {
  description = "Cloudflare zone ID."
  value       = cloudflare_zone.root.id
}

output "pages_hosts" {
  description = "The *.pages.dev hosts backing each environment."
  value = {
    prod = local.pages_prod_host
    dev  = local.pages_dev_host
  }
}

output "turnstile_sitekeys" {
  description = "Public Turnstile sitekeys per environment (bake into frontend/deploy.mjs)."
  value = {
    prod = cloudflare_turnstile_widget.contact_form_prod.sitekey
    dev  = cloudflare_turnstile_widget.contact_form_dev.sitekey
  }
}

output "turnstile_secrets" {
  description = "Turnstile secret keys per environment. Copy into iac/01-portfolio's turnstile_secret variable (send-contact-mail Lambda)."
  value = {
    prod = cloudflare_turnstile_widget.contact_form_prod.secret
    dev  = cloudflare_turnstile_widget.contact_form_dev.secret
  }
  sensitive = true
}
