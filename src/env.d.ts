/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly MAILEROO_API_KEY: string;
  readonly MAILEROO_FROM: string;
  readonly CONTACT_EMAIL: string;
  /** Cloudflare Turnstile site key — public, rendered into the page */
  readonly PUBLIC_TURNSTILE_SITE_KEY: string;
  /** Cloudflare Turnstile secret key — server-only, never expose */
  readonly TURNSTILE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
