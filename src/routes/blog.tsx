import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Mail, Check, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/newsletter";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Codehence" },
      {
        name: "description",
        content:
          "Field notes from building AI SaaS products — shipping playbooks, stack decisions, and honest postmortems. Coming soon.",
      },
      { property: "og:title", content: "Codehence Blog — Coming Soon" },
      {
        property: "og:description",
        content: "Real lessons from shipping AI SaaS. Subscribe to get the first essays.",
      },
    ],
  }),
  component: BlogPage,
});

const previewTopics = [
  {
    eyebrow: "Playbook",
    title: "Shipping an AI MVP in 19 days",
    desc: "The exact stack, the cuts we made, and the surprises that nearly broke the timeline.",
  },
  {
    eyebrow: "Hot take",
    title: "Why most 'AI features' fail (and the 4 that don't)",
    desc: "After reviewing 40+ AI product launches, the pattern is brutal — and avoidable.",
  },
  {
    eyebrow: "Field notes",
    title: "OpenAI vs Anthropic in production: 6 months in",
    desc: "Latency, cost, eval drift, and the one tradeoff nobody tells you about upfront.",
  },
];

type FormState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function BlogPage() {
  const [state, setState] = useState<FormState>({ kind: "idle" });
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setState({ kind: "loading" });
    try {
      await subscribeToNewsletter({
        data: {
          email: String(formData.get("email") ?? "").trim(),
          website: String(formData.get("website") ?? ""),
        },
      });
      setState({ kind: "success" });
      setEmail("");
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Try again or message us directly.";
      setState({ kind: "error", message });
    }
  };

  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Blog"
          title="Field notes from building AI SaaS"
          subtitle="Shipping playbooks, stack decisions, and honest postmortems — written by the people doing the work, not the marketing team."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 text-center md:p-12"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Mail className="h-3.5 w-3.5" />
              First essays drop soon
            </div>
            <h3 className="mt-5 text-balance text-2xl font-bold md:text-3xl">
              No posts yet — but the good ones are coming.
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-muted-foreground">
              Drop your email and you'll get every new essay the day it ships. No spam, no
              drip-marketing nonsense — just the writing.
            </p>

            {state.kind === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-300"
              >
                <Check className="h-4 w-4" />
                You're on the list — talk soon.
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
                {/* Honeypot */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Website
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={state.kind === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {state.kind === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Subscribing…
                    </>
                  ) : (
                    <>
                      Subscribe <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {state.kind === "error" && (
              <div className="mx-auto mt-4 flex max-w-md items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive-foreground">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <span>{state.message}</span>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            On the docket
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {previewTopics.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass hover-lift rounded-2xl p-5"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {p.eyebrow}
                </div>
                <h4 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 text-xs font-medium text-muted-foreground">Coming soon</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
