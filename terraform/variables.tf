variable "cloudflare_api_token" {
  description = <<-EOT
    Cloudflare API token for this site only. Needs Account > Turnstile > Edit,
    scoped to the one account. Set it in terraform.tfvars (gitignored), which
    Terraform loads automatically. Leave null to fall back to CLOUDFLARE_API_TOKEN.
  EOT
  type        = string
  default     = null
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns the Turnstile widget."
  type        = string

  validation {
    condition     = can(regex("^[0-9a-f]{32}$", var.cloudflare_account_id))
    error_message = "cloudflare_account_id must be a 32-character hex Cloudflare account ID."
  }
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
