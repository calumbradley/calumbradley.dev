import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const ct = (request.headers.get("content-type") || "").toLowerCase();
  let name = "",
    email = "",
    message = "";

  if (ct.includes("application/json")) {
    const b = await request.json().catch(() => ({}));
    name = String(b.name ?? "");
    email = String(b.email ?? "");
    message = String(b.message ?? "");
  } else {
    const fd = await request.formData().catch(() => new FormData());
    name = String(fd.get("name") ?? "");
    email = String(fd.get("email") ?? "");
    message = String(fd.get("message") ?? "");
  }

  const transporter = nodemailer.createTransport({
    host: import.meta.env.MAILEROO_SMTP_HOST ?? "smtp.maileroo.com",
    port: Number(import.meta.env.MAILEROO_SMTP_PORT ?? 465),
    secure: (import.meta.env.MAILEROO_SMTP_SECURE ?? "true") === "true",
    auth: {
      user: import.meta.env.MAILEROO_SMTP_USER,
      pass: import.meta.env.MAILEROO_SMTP_PASS,
    },
  });

  const subject = `New contact from ${name}`.slice(0, 255);
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  try {
    const info = await transporter.sendMail({
      from: import.meta.env.MAILEROO_FROM,
      to: import.meta.env.CONTACT_EMAIL,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return new Response(
      JSON.stringify({ ok: true, messageId: info?.messageId ?? null }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("[contact] smtp error", err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
