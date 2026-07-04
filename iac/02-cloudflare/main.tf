resource "cloudflare_zone" "root" {
  account = { id = var.cloudflare_account_id }
  name    = var.domain_name
  type    = "full"

  lifecycle {
    prevent_destroy = true
  }
}

locals {
  zone_id = cloudflare_zone.root.id

  # The real *.pages.dev host for each project (known after apply). Kept out of
  # the for_each keys below — those must stay statically known.
  pages_prod_host = cloudflare_pages_project.prod.subdomain
  pages_dev_host  = cloudflare_pages_project.dev.subdomain

  # Web records are proxied (orange-cloud) so the WAF / rate-limiting / edge cert
  # apply. Apex CNAME is flattened to A/AAAA by Cloudflare. Everything else
  # (email) is DNS-only. Each record carries a static `key` so for_each does not
  # depend on apply-time values (the pages hosts).
  simple_records = [
    { key = "web-apex", name = var.domain_name, type = "CNAME", content = local.pages_prod_host, priority = null, proxied = true },
    { key = "web-www", name = "www.${var.domain_name}", type = "CNAME", content = local.pages_prod_host, priority = null, proxied = true },
    { key = "web-dev", name = "dev.${var.domain_name}", type = "CNAME", content = local.pages_dev_host, priority = null, proxied = true },

    { key = "mx-1", name = var.domain_name, type = "MX", content = "mx.zoho.eu", priority = 10, proxied = false },
    { key = "mx-2", name = var.domain_name, type = "MX", content = "mx2.zoho.eu", priority = 20, proxied = false },
    { key = "mx-3", name = var.domain_name, type = "MX", content = "mx3.zoho.eu", priority = 50, proxied = false },
    { key = "txt-zoho-verification", name = var.domain_name, type = "TXT", content = "zoho-verification=zb55873147.zmverify.zoho.eu", priority = null, proxied = false },
    { key = "txt-spf", name = var.domain_name, type = "TXT", content = "v=spf1 include:zohomail.eu ~all", priority = null, proxied = false },
    { key = "txt-zoho-dkim", name = "zoho._domainkey.${var.domain_name}", type = "TXT", content = "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSRoOzzQJx0EXlDO4pUuLcIu89N/A6EU8WJhh2Q3pNS02bAhRLJ78WY2vrntkNj9RiCKRU+bJCKLMDpVaVZq6CaFFvXiH2PTw6/SzH+gNFm0eo9fFuzcbYo1+bRLQR8r4oLjgCI7PVHYZ7O2dK0nPoVw/l3xIA0t++A1hoShrgcQIDAQAB", priority = null, proxied = false },
  ]

  # Restrict certificate issuance to the CAs that actually issue for this domain:
  # Cloudflare's edge (Let's Encrypt / Google Trust Services).
  caa_records = concat(
    [for ca in ["letsencrypt.org", "pki.goog"] : { name = var.domain_name, tag = "issue", value = ca }],
    [{ name = var.domain_name, tag = "iodef", value = "mailto:${var.security_email}" }],
  )
}

resource "cloudflare_dns_record" "simple" {
  for_each = { for r in local.simple_records : r.key => r }

  zone_id  = local.zone_id
  name     = each.value.name
  type     = each.value.type
  content  = each.value.content
  priority = each.value.priority
  proxied  = each.value.proxied
  ttl      = each.value.proxied ? 1 : 300
  comment  = "managed by iac/02-cloudflare"
}

resource "cloudflare_dns_record" "caa" {
  for_each = { for r in local.caa_records : "${r.name}|CAA|${r.tag}|${r.value}" => r }

  zone_id = local.zone_id
  name    = each.value.name
  type    = "CAA"
  ttl     = 300
  data = {
    flags = 0
    tag   = each.value.tag
    value = each.value.value
  }
  comment = "managed by iac/02-cloudflare"
}
