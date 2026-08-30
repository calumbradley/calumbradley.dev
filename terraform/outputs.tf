output "turnstile_site_key" {
  description = "Set as PUBLIC_TURNSTILE_SITE_KEY in Vercel."
  value       = cloudflare_turnstile_widget.contact_form.sitekey
}

output "turnstile_secret_key" {
  description = "Set as TURNSTILE_SECRET_KEY in Vercel. Read with: terraform output -raw turnstile_secret_key"
  value       = cloudflare_turnstile_widget.contact_form.secret
  sensitive   = true
}
