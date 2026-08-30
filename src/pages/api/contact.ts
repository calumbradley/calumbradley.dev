import type { APIRoute } from "astro";
import { MailerooClient, EmailAddress } from "maileroo-sdk";

export const prerender = false;

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
};

async function verifyTurnstile(token: string, secret: string) {
  const body = new URLSearchParams({ secret, response: token });

  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    signal: AbortSignal.timeout(10_000),
  });

  return (await res.json()) as TurnstileVerifyResponse;
}

function parseEmailObject(raw = "") {
  // Accept formats like: "Display Name <address@example.com>" or "address@example.com"
  const m = String(raw).match(/^\s*(.+?)\s*<\s*([^>]+)\s*>\s*$/);
  if (m) return { address: m[2].trim(), display: m[1].trim() };
  return { address: raw.trim(), display: undefined };
}

export const POST: APIRoute = async ({ request }) => {
  const ct = (request.headers.get("content-type") || "").toLowerCase();

  let name = "",
    email = "",
    message = "",
    honeypot = "",
    formTs = "",
    turnstileToken = "";

  if (ct.includes("application/json")) {
    const body = await request.json().catch(() => ({}));
    name = String(body.name ?? "").trim();
    email = String(body.email ?? "").trim();
    message = String(body.message ?? "").trim();
    honeypot = String(body.website ?? "").trim();
    formTs = String(body._t ?? "").trim();
    turnstileToken = String(
      body["cf-turnstile-response"] ?? body.turnstileToken ?? "",
    ).trim();
  } else {
    const fd = await request.formData().catch(() => new FormData());
    name = String(fd.get("name") ?? "").trim();
    email = String(fd.get("email") ?? "").trim();
    message = String(fd.get("message") ?? "").trim();
    honeypot = String(fd.get("website") ?? "").trim();
    formTs = String(fd.get("_t") ?? "").trim();
    turnstileToken = String(
      fd.get("cf-turnstile-response") ?? fd.get("turnstileToken") ?? "",
    ).trim();
  }

  // Reject if honeypot field was filled (bot signal)
  if (honeypot) {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid submission" }),
      { status: 400 },
    );
  }

  // Reject if submission timing is outside the acceptable window
  const MIN_SUBMIT_MS = 3_000;      // < 3 s = bot too fast
  const MAX_SUBMIT_MS = 3_600_000;  // > 60 min = stale / automated replay
  if (formTs) {
    const loadTime = parseInt(formTs, 10);
    if (!isNaN(loadTime)) {
      const elapsed = Date.now() - loadTime;
      if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_SUBMIT_MS) {
        return new Response(
          JSON.stringify({ ok: false, error: "Invalid submission" }),
          { status: 400 },
        );
      }
    }
  }

  // Minimal validation
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ ok: false, error: "Missing fields" }),
      { status: 400 },
    );
  }

  // Reject oversized inputs
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return new Response(
      JSON.stringify({ ok: false, error: "Input too long" }),
      { status: 400 },
    );
  }

  // Cloudflare Turnstile: verify the challenge token before doing any work.
  // Runs after the cheap checks so obvious bots never cost us a siteverify call.
  const TURNSTILE_SECRET_KEY =
    import.meta.env.TURNSTILE_SECRET_KEY ?? process.env.TURNSTILE_SECRET_KEY;

  if (!TURNSTILE_SECRET_KEY) {
    // Fail closed: a missing secret must not silently disable bot protection.
    console.error("[contact] turnstile missing TURNSTILE_SECRET_KEY");
    return new Response(
      JSON.stringify({ ok: false, error: "Verification unavailable" }),
      { status: 500 },
    );
  }

  if (!turnstileToken) {
    return new Response(
      JSON.stringify({ ok: false, error: "Please complete the verification." }),
      { status: 400 },
    );
  }

  try {
    const verification = await verifyTurnstile(
      turnstileToken,
      TURNSTILE_SECRET_KEY,
    );

    if (!verification.success) {
      console.warn("[contact] turnstile rejected", verification["error-codes"]);
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Verification failed. Please try again.",
        }),
        { status: 400 },
      );
    }
  } catch (err) {
    console.error("[contact] turnstile verify error", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Verification unavailable" }),
      { status: 502 },
    );
  }

  // Read config from env (Vite/Astro exposes import.meta.env on server builds)
  const API_KEY =
    import.meta.env.MAILEROO_API_KEY ?? process.env.MAILEROO_API_KEY;
  const MAILEROO_FROM =
    import.meta.env.MAILEROO_FROM ?? process.env.MAILEROO_FROM;
  const CONTACT_EMAIL =
    import.meta.env.CONTACT_EMAIL ?? process.env.CONTACT_EMAIL;

  if (!API_KEY || !MAILEROO_FROM || !CONTACT_EMAIL) {
    console.error("[contact] maileroo missing config");
    return new Response(
      JSON.stringify({ ok: false, error: "Mail configuration error" }),
      { status: 500 },
    );
  }

  const client = new MailerooClient(API_KEY);

  const parsedFrom = parseEmailObject(MAILEROO_FROM);
  const from = new EmailAddress(parsedFrom.address, parsedFrom.display);

  const to = [new EmailAddress(CONTACT_EMAIL)];

  const subject = `New contact from ${name}`.slice(0, 255);
  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;
  const plain = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  try {
    const referenceId = await client.sendBasicEmail({
      from,
      to,
      subject,
      html,
      plain,
    });

    console.log("[contact] maileroo sent", { referenceId });
    return new Response(JSON.stringify({ ok: true, referenceId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[contact] maileroo error", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Failed to send email" }),
      { status: 500 },
    );
  }
};

function escapeHtml(str: string) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
