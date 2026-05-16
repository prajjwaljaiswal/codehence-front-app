import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactInput = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Valid email required").max(200),
  company: z.string().max(160).optional().default(""),
  subject: z.string().min(1, "Subject is required").max(120),
  message: z.string().min(10, "Message must be at least 10 characters").max(4000),
  // Honeypot — bots fill this, humans don't see it.
  website: z.string().max(0).optional().default(""),
});

export type ContactInputType = z.infer<typeof ContactInput>;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactInput.parse(data))
  .handler(async ({ data }) => {
    // Drop honeypot hits silently — pretend success so bots don't probe further.
    if (data.website && data.website.length > 0) {
      return { ok: true } as const;
    }

    const apiKey = process.env.RESEND_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error(
        "Contact form misconfigured: missing RESEND_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL",
      );
      throw new Error("Contact form is misconfigured. Please email us directly.");
    }

    const html = `
      <h2>New inquiry — ${escapeHtml(data.subject)}</h2>
      <p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
      ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
      <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
      <hr />
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    `.trim();

    const text = [
      `New inquiry — ${data.subject}`,
      `From: ${data.name} <${data.email}>`,
      data.company ? `Company: ${data.company}` : null,
      "",
      data.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[Codehence] ${data.subject} — ${data.name}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Resend send failed", res.status, body);
      throw new Error("Could not send your message. Please email us directly.");
    }

    return { ok: true } as const;
  });
