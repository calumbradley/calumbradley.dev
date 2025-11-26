export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = body.name ?? "";
      email = body.email ?? "";
      message = body.message ?? "";
    } else {
      const formData = await request.formData();
      name = String(formData.get("name") ?? "");
      email = String(formData.get("email") ?? "");
      message = String(formData.get("message") ?? "");
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    console.log("[contact] new message", { name, email, message });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
