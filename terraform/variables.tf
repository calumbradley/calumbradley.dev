variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns the Turnstile widget."
  type        = string
}

variable "widget_name" {
  description = "Human-readable name shown in the Cloudflare Turnstile dashboard."
  type        = string
  default     = "calumbradley.dev contact form"
}

variable "domains" {
  description = <<-EOT
    Hostnames allowed to render this widget. Subdomains of a listed domain are
    accepted. Add a Vercel preview domain here if you want previews to validate;
    otherwise use Cloudflare's test keys locally (see .env.example).
  EOT
  type        = list(string)
  default     = ["calumbradley.dev"]
}

variable "mode" {
  description = "Widget mode: managed, non-interactive, or invisible."
  type        = string
  default     = "managed"

  validation {
    condition     = contains(["managed", "non-interactive", "invisible"], var.mode)
    error_message = "mode must be one of: managed, non-interactive, invisible."
  }
}

variable "region" {
  description = "Widget region. Immutable after creation."
  type        = string
  default     = "world"

  validation {
    condition     = contains(["world", "china"], var.region)
    error_message = "region must be one of: world, china."
  }
}
