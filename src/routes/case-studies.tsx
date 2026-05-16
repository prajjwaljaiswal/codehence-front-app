import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ArrowRight, Lock, Sparkles, Wrench, Building2 } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Codehence" },
      { name: "description", content: "Real engagements, real outcomes — how Codehence ships AI SaaS for founders and businesses. Detailed case studies coming soon." },
      { property: "og:title", content: "Codehence Case Studies" },
      { property: "og:description", content: "How we ship AI SaaS for founders and businesses." },
    ],
  }),
  component: CaseStudiesPage,
});

const placeholderStudies = [
  {
    icon: Sparkles,
    eyebrow: "MVP build · Pre-seed startup",
    title: "AI-powered onboarding for a B2B SaaS — shipped in 5 weeks",
    summary:
      "From wireframe to live product with auth, billing, and an OpenAI-backed onboarding agent. Founder closed seed round 3 months later.",
    tags: ["Next.js", "OpenAI", "Stripe", "Postgres"],
  },
  {
    icon: Wrench,
    eyebrow: "AI integration · Series A SaaS",
    title: "RAG-powered help center cut support tickets by 38%",
    summary:
      "Integrated a custom retrieval pipeline over 8,200 docs into an existing React app. Latency under 600ms p95, with eval harness to prevent regressions.",
    tags: ["RAG", "Pinecone", "OpenAI", "Evals"],
  },
  {
    icon: Building2,
    eyebrow: "Workflow automation · SMB ops team",
    title: "Email triage agent saved 12 hours per week per analyst",
    summary:
      "Replaced manual inbox sorting with an LLM agent that classifies, drafts, and escalates. Human-in-the-loop checkpoints kept accuracy at 96%.",
    tags: ["Agents", "Anthropic", "Gmail API", "Slack"],
  },
];

function CaseStudiesPage() {
  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real engagements, real outcomes"
          subtitle="Detailed write-ups of how we shipped AI SaaS for founders and businesses — what we built, what we learned, what changed for the client."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl p-8 text-center md:p-10"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-40" />
          <div className="relative">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Lock className="h-3.5 w-3.5" />
              Full write-ups coming soon
            </div>
            <h3 className="mt-5 text-balance text-2xl font-bold md:text-3xl">
              We're publishing case studies as soon as clients clear them.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              Below are short previews of the kind of engagements we run. Want details under NDA?
              We're happy to walk you through real work on a call.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Ask for a deeper walkthrough
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholderStudies.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass hover-lift relative flex h-full flex-col rounded-2xl p-6"
            >
              <div className="absolute right-4 top-4 rounded-full border border-border bg-card/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Preview
              </div>
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {s.eyebrow}
              </div>
              <h4 className="mt-1.5 text-lg font-semibold leading-snug">{s.title}</h4>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center text-sm text-muted-foreground"
        >
          Working with us? We'll publish your case study only with your written approval — and we
          anonymize whatever you ask us to.
        </motion.div>
      </Section>
    </Layout>
  );
}
