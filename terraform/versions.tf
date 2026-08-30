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

# Auth comes from the CLOUDFLARE_API_TOKEN env var so the token never lands in
# a .tfvars file or in state. Token needs: Account > Turnstile > Edit.
provider "cloudflare" {}
