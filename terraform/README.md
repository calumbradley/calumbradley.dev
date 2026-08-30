# Turnstile (Terraform)

Manages the Cloudflare Turnstile widget that protects the contact form.

## Setup

**1. Create the API token**

Cloudflare dashboard → My Profile → API Tokens → Create Token → Custom token:

| Field       | Value                                         |
| :---------- | :-------------------------------------------- |
| Name        | `calumbradley.dev terraform`                  |
| Permissions | `Account` · `Turnstile` · `Edit`              |
| Resources   | `Include` · `Specific account` · your account |

No zone permissions needed — Turnstile is account-level only.
Copy the token when it's shown; you can't see it again.

**2. Fill in the vars**

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
```

Open `terraform.tfvars` and paste in the token and your account ID (the 32-char
hex string in your dashboard URL). The file is gitignored and Terraform loads it
automatically, so the token is bound to this directory — no global `export`, and
no way to pick up the token for another site by mistake.

**3. Apply**

```bash
terraform init
terraform apply
```

**4. Put the keys in Vercel**

```bash
terraform output turnstile_site_key
terraform output -raw turnstile_secret_key
```

Set both on the Vercel project, for Production and Preview:

| Vercel env var              | Terraform output       | Notes                    |
| :-------------------------- | :--------------------- | :----------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY` | `turnstile_site_key`   | Public, rendered in HTML |
| `TURNSTILE_SECRET_KEY`      | `turnstile_secret_key` | Server-only              |

Redeploy afterwards — `PUBLIC_*` vars are inlined at build time.

## Notes

`terraform plan` succeeds without valid credentials, because planning a pure
create makes no API calls. The token is only exercised at `apply`.

If you'd rather use the environment, leave `cloudflare_api_token` out of
`terraform.tfvars` and export `CLOUDFLARE_API_TOKEN` instead.

## Secrets on disk

- `terraform.tfvars` — the API token
- `terraform.tfstate` — the Turnstile secret, in plaintext
- `*.tfplan` — embeds variable values, token included

All gitignored. Use an encrypted remote backend (stub in `versions.tf`) if state
ever leaves this machine.

## Local development

Don't apply this for local dev. Use Cloudflare's always-pass test keys from
`.env.example` in the repo root.
