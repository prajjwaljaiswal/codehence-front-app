import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Mail, Linkedin, MapPin, Clock, Check, Send, Loader2, AlertCircle } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.server";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codehence" },
      { name: "description", content: "Book a free 30-minute consultation with the Codehence team — SaaS development, MVP builds, AI integrations, and workflow automation." },
      { property: "og:title", content: "Contact Codehence" },
      { property: "og:description", content: "Book a free consultation. We'll listen first, propose later." },
    ],
  }),
  component: ContactPage,
});

const SUBJECTS = [
  "Build a SaaS product",
  "MVP development",
  "AI integration",
  "Workflow automation",
  "Enterprise inquiry",
  "General",
];

type FormState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function ContactPage() {
  const [state, setState] = useState<FormState>({ kind: "idle" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    setState({ kind: "loading" });
    try {
      await sendContactMessage({ data: payload });
      setState({ kind: "success" });
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please email us directly.";
      setState({ kind: "error", message });
    }
  };

  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something intelligent"
          subtitle="Book a free 30-minute consultation. We'll listen first, propose later."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute inset-0 bg-hero-glow opacity-40" />
            <div className="relative">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-2 text-muted-foreground">
                We typically reply within one business day.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "prajjwal@codehence.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/prajjwal-jaiswal" },
                  { icon: MapPin, label: "Location", value: "Remote · HQ in India" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri · 9 AM – 8 PM IST" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="mt-0.5 text-sm font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-card/50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">What to expect</div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li>1. We reply within 1 business day.</li>
                  <li>2. If it's a fit, we schedule a 30-min call.</li>
                  <li>3. You get a scoped proposal within 3 days.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong relative rounded-3xl p-8"
          >
            {state.kind === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-12 text-center"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Message received</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thanks for reaching out. We'll reply within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setState({ kind: "idle" })}
                  className="mt-6 rounded-xl border border-border px-5 py-2 text-sm font-semibold hover:border-primary/40"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold">Send us a message</h3>
                <p className="mt-1 text-sm text-muted-foreground">We'll route it to the right human.</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Field label="Name" required>
                    <input name="name" required className={inputCls} placeholder="Jane Doe" maxLength={120} />
                  </Field>
                  <Field label="Email" required>
                    <input name="email" required type="email" className={inputCls} placeholder="jane@company.com" maxLength={200} />
                  </Field>
                </div>
                <Field label="Company (optional)" className="mt-4">
                  <input name="company" className={inputCls} placeholder="Acme Corp" maxLength={160} />
                </Field>
                <Field label="Subject" required className="mt-4">
                  <select name="subject" required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a topic…</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Message" required className="mt-4">
                  <textarea name="message" required rows={5} minLength={10} maxLength={4000} className={`${inputCls} resize-none`} placeholder="Tell us a bit about your project…" />
                </Field>

                {/* Honeypot — visually hidden, kept out of the tab order. Bots fill it; humans don't. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Website
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                {state.kind === "error" && (
                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive-foreground">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span>{state.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.kind === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {state.kind === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send message <Send className="h-4 w-4" /></>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </Section>
    </Layout>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

function Field({
  label, required, className = "", children,
}: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
