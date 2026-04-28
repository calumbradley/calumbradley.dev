import type { APIRoute } from "astro";
import { MailerooClient, EmailAddress } from "maileroo-sdk";

export const prerender = false;

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
    formTs = "";

  if (ct.includes("application/json")) {
    const body = await request.json().catch(() => ({}));
    name = String(body.name ?? "").trim();
    email = String(body.email ?? "").trim();
    message = String(body.message ?? "").trim();
    honeypot = String(body.website ?? "").trim();
    formTs = String(body._t ?? "").trim();
  } else {
    const fd = await request.formData().catch(() => new FormData());
    name = String(fd.get("name") ?? "").trim();
    email = String(fd.get("email") ?? "").trim();
    message = String(fd.get("message") ?? "").trim();
    honeypot = String(fd.get("website") ?? "").trim();
    formTs = String(fd.get("_t") ?? "").trim();
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
