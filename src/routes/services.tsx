import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import {
  Boxes,
  Rocket,
  Plug,
  Workflow,
  LayoutDashboard,
  Building2,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codehence" },
      { name: "description", content: "AI SaaS development, MVP builds, AI integrations, workflow automation, smart dashboards, and enterprise AI for businesses ready to ship." },
      { property: "og:title", content: "Codehence Services" },
      { property: "og:description", content: "Everything you need to ship an AI SaaS." },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  pitch: string;
  scope: string[];
  bestFor: string;
  timeline?: string;
  price?: string;
};

const services: Service[] = [
  {
    icon: Boxes,
    title: "AI SaaS Development",
    tagline: "Full-stack SaaS with AI built in from day one.",
    pitch:
      "We design, build, and ship the whole thing — auth, billing, dashboards, AI features. Not bolted on as an afterthought; designed around the AI workflow from the start.",
    scope: [
      "Product design + UX",
      "Frontend (React / Next.js / TanStack Start)",
      "Backend (Node.js / NestJS)",
      "Database (PostgreSQL / MongoDB)",
      "AI integration + evals",
      "Deploy on AWS or Cloudflare",
    ],
    bestFor: "Founders with a validated idea ready to build",
    timeline: "6–12 weeks",
    price: "From $12,000",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    tagline: "Ship a credible MVP fast.",
    pitch:
      "We help founders go from idea to a working product that investors and real users can try. Branded UI, core workflows, AI hook, deployed — not a Figma file pretending to be a product.",
    scope: [
      "Wireframes + branded UI",
      "Core workflows + auth",
      "One headline AI feature",
      "Production deploy",
      "Handoff with full source code",
    ],
    bestFor: "Pre-seed and seed startups",
    timeline: "3–6 weeks",
    price: "$6,000 – $14,000",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    tagline: "Plug AI into your existing product.",
    pitch:
      "OpenAI, Anthropic, LLM agents, embeddings, RAG, vision — into your stack without the trial-and-error. We pick the right model, design the right prompts, and ship the right guardrails.",
    scope: [
      "Model selection (OpenAI / Anthropic / OSS)",
      "Prompt design + chain orchestration",
      "RAG + vector DB setup",
      "Eval harness + regression tests",
      "Cost + latency monitoring",
    ],
    bestFor: "SaaS teams adding AI features to a live product",
    timeline: "2–4 weeks",
    price: "$4,000 – $12,000",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Replace manual ops with AI agents.",
    pitch:
      "Email triage, content workflows, internal tools, support routing — fully automated with agents that actually know your context, not just generic prompts.",
    scope: [
      "Trigger + event design",
      "Agent orchestration",
      "Integrations (Slack, Notion, Gmail, …)",
      "Human-in-the-loop checkpoints",
      "Observability + alerting",
    ],
    bestFor: "Operations-heavy teams losing hours to repetitive work",
    timeline: "1–3 weeks",
    price: "$2,500 – $8,000",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboards & Analytics",
    tagline: "Stop staring at charts.",
    pitch:
      "Get a system that summarizes them and tells you what to do. Analytics with an AI narrative layer, embedded alerting, and natural-language Q&A.",
    scope: [
      "Data pipelines + ETL",
      "Custom dashboards",
      "AI narrative layer",
      "Alerting + anomaly detection",
      "Embed-ready widgets",
    ],
    bestFor: "Data-heavy SaaS, internal BI teams",
    timeline: "3–5 weeks",
    price: "$5,000 – $12,000",
  },
  {
    icon: Building2,
    title: "Enterprise AI Automation",
    tagline: "For larger orgs ready to do AI properly.",
    pitch:
      "Scoped pilots, secure deployments, change-management support — no over-promised transformations. We work with your security, infra, and procurement teams, not around them.",
    scope: [
      "Discovery workshop",
      "Scoped pilot project",
      "Secure deployment (VPC / on-prem)",
      "Compliance + audit support",
      "Scaled rollout + training",
    ],
    bestFor: "Mid-market and enterprise teams",
    timeline: "Custom",
    price: "Custom (from $25k)",
  },
];

function ServicesPage() {
  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to ship an AI SaaS"
          subtitle="Six focused services covering the lifecycle of an AI product — from a founder's first sketch to enterprise-scale automation."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="glass neon-border hover-lift relative flex h-full flex-col rounded-2xl p-7"
            >
              <div className="flex items-start gap-4">
                <div className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{s.tagline}</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{s.pitch}</p>

              {s.price && (
                <div className="mt-5 inline-flex items-baseline gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Starting at
                  </span>
                  <span className="text-base font-bold text-foreground">{s.price}</span>
                </div>
              )}

              <div className="mt-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Scope
                </div>
                <ul className="space-y-1.5">
                  {s.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/60 pt-4 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Best for
                  </div>
                  <div className="mt-1">{s.bestFor}</div>
                </div>
                {s.timeline && (
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Timeline
                    </div>
                    <div className="mt-1">{s.timeline}</div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-12 rounded-2xl p-6 md:p-7"
        >
          <h3 className="text-lg font-semibold">How pricing works</h3>
          <div className="mt-3 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Fixed scope, fixed price</div>
              <p className="mt-1">After a short discovery call, you get a written proposal with a flat price and a clear deliverable. No surprise invoices.</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">50 / 50 split</div>
              <p className="mt-1">Half up front to start, half on delivery. We don't ask for the full amount before any work happens.</p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">Discovery is free</div>
              <p className="mt-1">The first 30-minute call costs nothing. If we're not the right fit, we'll tell you who is.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative mt-12 overflow-hidden rounded-3xl p-10 text-center md:p-12"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="relative">
            <h2 className="text-balance text-2xl font-bold md:text-4xl">
              Not sure which one fits?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Book a free 30-minute consultation and we'll point you in the right direction — even if it's not us.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
