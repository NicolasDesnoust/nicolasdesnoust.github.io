resource "cloudflare_zone_setting" "ssl" {
  zone_id    = cloudflare_zone.root.id
  setting_id = "ssl"
  value      = "strict"
}

resource "cloudflare_zone_setting" "always_use_https" {
  zone_id    = cloudflare_zone.root.id
  setting_id = "always_use_https"
  value      = "on"
}
