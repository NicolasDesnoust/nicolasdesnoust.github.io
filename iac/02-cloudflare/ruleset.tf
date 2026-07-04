resource "cloudflare_ruleset" "www_redirect" {
  zone_id = cloudflare_zone.root.id
  name    = "Redirect www to apex"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [{
    ref         = "www_to_apex_301"
    description = "301 www.${var.domain_name} -> ${var.domain_name}, preserving path"
    expression  = "(http.host eq \"www.${var.domain_name}\")"
    action      = "redirect"
    enabled     = true
    action_parameters = {
      from_value = {
        status_code           = 301
        preserve_query_string = true
        target_url = {
          expression = "concat(\"https://${var.domain_name}\", http.request.uri.path)"
        }
      }
    }
  }]
}

resource "cloudflare_ruleset" "waf_custom" {
  zone_id = cloudflare_zone.root.id
  name    = "portfolio custom WAF rules"
  kind    = "zone"
  phase   = "http_request_firewall_custom"

  rules = [
    {
      ref         = "block_scanner_paths"
      description = "Block exploit-scanner paths a static SPA never serves (wp-*, dotfiles, php/asp, vendor)"
      expression  = "(starts_with(http.request.uri.path, \"/wp-\")) or (http.request.uri.path contains \"/.env\") or (http.request.uri.path contains \"/.git\") or (http.request.uri.path contains \"/xmlrpc.php\") or (http.request.uri.path contains \"/vendor/\") or (ends_with(http.request.uri.path, \".php\")) or (ends_with(http.request.uri.path, \".asp\")) or (ends_with(http.request.uri.path, \".aspx\")) or (ends_with(http.request.uri.path, \".sql\")) or (ends_with(http.request.uri.path, \".bak\"))"
      action      = "block"
      enabled     = true
    },
    {
      ref         = "block_nonread_methods"
      description = "Block non-read HTTP methods; the proxied static site only serves GET/HEAD/OPTIONS"
      expression  = "(not http.request.method in {\"GET\" \"HEAD\" \"OPTIONS\"})"
      action      = "block"
      enabled     = true
    },
    {
      ref         = "challenge_empty_user_agent"
      description = "Managed-challenge requests with an empty User-Agent (cheap bot signal)"
      expression  = "(http.user_agent eq \"\")"
      action      = "managed_challenge"
      enabled     = true
    },
    {
      ref         = "challenge_high_threat_score"
      description = "Managed-challenge high-threat-score IPs"
      expression  = "(cf.threat_score > 14)"
      action      = "managed_challenge"
      enabled     = true
    },
  ]
}

resource "cloudflare_ruleset" "waf_managed" {
  zone_id = cloudflare_zone.root.id
  name    = "portfolio managed WAF"
  kind    = "zone"
  phase   = "http_request_firewall_managed"

  rules = [{
    ref         = "deploy_managed_ruleset"
    description = "Deploy the Cloudflare managed ruleset"
    expression  = "true"
    action      = "execute"
    enabled     = true
    action_parameters = {
      id = "77454fe2d30c4220b5701f6fdfb893ba"
    }
  }]
}

resource "cloudflare_ruleset" "ratelimit" {
  zone_id = cloudflare_zone.root.id
  name    = "portfolio rate limiting"
  kind    = "zone"
  phase   = "http_ratelimit"

  rules = [{
    ref         = "rl_global"
    description = "Throttle abusive IPs across the proxied site"
    expression  = "true"
    action      = "block"
    enabled     = true
    ratelimit = {
      characteristics     = ["ip.src", "cf.colo.id"]
      period              = 10
      requests_per_period = 200
      mitigation_timeout  = 10
    }
  }]
}
