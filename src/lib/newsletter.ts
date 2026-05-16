import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SubscribeInput = z.object({
  email: z.string().email("Valid email required").max(200),
  // Honeypot
  website: z.string().max(0).optional().default(""),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => SubscribeInput.parse(data))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      return { ok: true } as const;
    }

    const apiKey = process.env.RESEND_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error(
        "Newsletter form misconfigured: missing RESEND_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL",
      );
      throw new Error("Newsletter signup is misconfigured. Please email us directly.");
    }

    const safeEmail = data.email.replace(/[<>]/g, "");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Codehence] Newsletter signup — ${safeEmail}`,
        text: `New newsletter signup: ${safeEmail}\n\nAdd to your Resend audience or mailing list.`,
        html: `<p>New newsletter signup: <strong>${safeEmail}</strong></p><p>Add to your Resend audience or mailing list.</p>`,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Resend newsletter notify failed", res.status, body);
      throw new Error("Could not save your email. Try again or message us directly.");
    }

    return { ok: true } as const;
  });
