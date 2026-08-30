terraform {
  required_version = ">= 1.9"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.24"
    }
  }

  # State holds the Turnstile secret key in plaintext — treat it as a secret.
  # Local state is gitignored. To share state, swap in a remote backend, e.g.:
  #
  # backend "s3" {
  #   bucket  = "calumbradley-tfstate"
  #   key     = "calumbradley.dev/turnstile.tfstate"
  #   region  = "eu-west-2"
  #   encrypt = true
  # }
}

# Token is scoped to this project directory via terraform.tfvars (gitignored),
# so a token for another site can never be picked up by mistake. Leave the
# variable unset to fall back to the CLOUDFLARE_API_TOKEN env var instead.
provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
