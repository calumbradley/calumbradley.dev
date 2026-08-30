# Turnstile widget protecting the contact form at /api/contact.
# The sitekey is public (rendered into the page); the secret is server-only.
resource "cloudflare_turnstile_widget" "contact_form" {
  account_id = var.cloudflare_account_id
  name       = var.widget_name
  domains    = var.domains
  mode       = var.mode
  region     = var.region
}
