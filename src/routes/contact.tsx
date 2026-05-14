import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Mail, Linkedin, MapPin, Clock, Check, Send, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codehence" },
      { name: "description", content: "Talk to the Codehence team about AI tools, model training, fine-tuning, and partnerships." },
      { property: "og:title", content: "Contact Codehence" },
      { property: "og:description", content: "We're here to help you ship AI." },
    ],
  }),
  component: ContactPage,
});

const SUBJECTS = ["General Inquiry", "Partnership", "Technical Support", "Demo Request"];

function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("success"), 1200);
  };

  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something intelligent"
          subtitle="Whether you're exploring tools, planning a deployment, or chasing a custom integration — we're here."
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
                Our team typically responds within one business day.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@codehence.ai" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/company/codehence" },
                  { icon: MapPin, label: "Location", value: "Serving clients globally · HQ in India" },
                  { icon: Clock, label: "Support", value: "Mon–Fri · 9 AM – 8 PM IST" },
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
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Map</div>
                <div className="mt-2 text-sm">🌍 Bengaluru · Mumbai · Remote</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Working with teams across 30+ countries.
                </div>
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
            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-12 text-center"
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Message received!</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thanks for reaching out. A Codehence specialist will reply within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
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
                    <input required className={inputCls} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Email" required>
                    <input required type="email" className={inputCls} placeholder="jane@company.com" />
                  </Field>
                </div>
                <Field label="Company (optional)" className="mt-4">
                  <input className={inputCls} placeholder="Acme Corp" />
                </Field>
                <Field label="Subject" required className="mt-4">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select a topic…</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Message" required className="mt-4">
                  <textarea required rows={5} className={`${inputCls} resize-none`} placeholder="Tell us a bit about your project…" />
                </Field>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {state === "loading" ? (
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
