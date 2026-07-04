resource "cloudflare_pages_project" "prod" {
  account_id        = var.cloudflare_account_id
  name              = var.pages_project_prod
  production_branch = "main"
}

resource "cloudflare_pages_project" "dev" {
  account_id        = var.cloudflare_account_id
  name              = var.pages_project_dev
  production_branch = "main"
}

resource "cloudflare_pages_domain" "prod_apex" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.prod.name
  name         = var.domain_name

  depends_on = [cloudflare_zone.root]
}

resource "cloudflare_pages_domain" "prod_www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.prod.name
  name         = "www.${var.domain_name}"

  depends_on = [cloudflare_zone.root]
}

resource "cloudflare_pages_domain" "dev" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.dev.name
  name         = "dev.${var.domain_name}"

  depends_on = [cloudflare_zone.root]
}
