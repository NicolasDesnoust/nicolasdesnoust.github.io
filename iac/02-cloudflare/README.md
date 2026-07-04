# `02-cloudflare` — Cloudflare hosting stack

Terraform for the Cloudflare side of the site: the DNS zone, Cloudflare Pages
projects (prod + dev), edge security (WAF, rate limiting, redirect, SSL) and the
Turnstile widgets protecting the contact form.

The site itself is deployed separately with wrangler (see `frontend/deploy.mjs`);
this stack only owns the zone, the Pages projects and their custom-domain
bindings. State lives on the shared Terraform backend (configured via
`backend.json`), so an AWS profile is required alongside the Cloudflare token.

## Running it

Provide credentials through the environment, then use the Taskfile targets:

```sh
export CLOUDFLARE_API_TOKEN=...     # PowerShell: $env:CLOUDFLARE_API_TOKEN = "..."
export CLOUDFLARE_ACCOUNT_ID=...
export AWS_PROFILE=...              # for the state backend

task iac:cloudflare:plan
task iac:cloudflare:apply
task iac:cloudflare:output          # name servers, pages hosts, turnstile sitekeys
```

Non-secret configuration lives in `terraform.tfvars`.

## API token

A Cloudflare API token scoped to the account + zone with **Edit** on: Cloudflare
Pages, Turnstile, Zone, DNS, Zone Settings, SSL and Certificates, Zone WAF, and
Single Redirect.

Dashboard-issued tokens cannot create zones, so the zone is created once in the
dashboard and adopted with `terraform import cloudflare_zone.root <zone_id>`;
Terraform then manages (but does not create) it.

## Notes

- Turnstile **secrets** (not the public sitekeys) are consumed by the backend via
  `iac/01-portfolio`'s `turnstile_secret` — never commit them.
