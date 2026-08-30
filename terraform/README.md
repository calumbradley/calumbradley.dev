# Turnstile (Terraform)

Manages the Cloudflare Turnstile widget that protects the contact form.

## Prerequisites

Create a Cloudflare API token with **Account → Turnstile → Edit**, then export it:

```bash
export CLOUDFLARE_API_TOKEN="..."
```

The token is read from the environment on purpose — it never enters `.tfvars` or state.

## Apply

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars   # fill in cloudflare_account_id
terraform init
terraform apply
```

## Wire the keys into Vercel

```bash
terraform output turnstile_site_key
terraform output -raw turnstile_secret_key
```

Set both in the Vercel project (Production + Preview):

| Vercel env var              | Terraform output       | Notes                    |
| :-------------------------- | :--------------------- | :----------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY` | `turnstile_site_key`   | Public, rendered in HTML |
| `TURNSTILE_SECRET_KEY`      | `turnstile_secret_key` | Server-only              |

Redeploy after setting them — `PUBLIC_*` vars are inlined at build time.

## State contains the secret

`terraform.tfstate` stores the Turnstile secret in plaintext. It is gitignored.
Use an encrypted remote backend (see `versions.tf`) if state ever leaves this machine.

## Local development

Don't apply this for local dev. Use Cloudflare's always-pass test keys from
`.env.example` in the repo root instead.
