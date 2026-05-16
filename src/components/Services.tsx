import { motion } from "framer-motion";
import {
  Boxes,
  Rocket,
  Plug,
  Workflow,
  LayoutDashboard,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Boxes,
    title: "AI SaaS Development",
    desc: "End-to-end web and mobile SaaS, designed and built around AI workflows. Auth, billing, dashboards, AI — all in one go.",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    desc: "From wireframe to launched product in weeks, not quarters. Investor-ready, founder-friendly, and built to scale later.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    desc: "Slot OpenAI, LLM agents, embeddings, and RAG into your existing product — without the trial-and-error.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Replace repetitive ops with AI agents and automation pipelines. Email triage, content workflows, internal tools — handled.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboards & Analytics",
    desc: "Analytics that summarize themselves and surface what matters. Built-in narratives, alerts, and embeddable views.",
  },
  {
    icon: Building2,
    title: "Enterprise AI Automation",
    desc: "Scoped pilots, secure deployments, and change-management support — no over-promised transformations.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="Everything you need to ship an AI SaaS"
        subtitle="From idea to launch — design, engineering, AI integration, and ongoing iteration."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative"
          >
            <div className="glass neon-border hover-lift relative h-full rounded-2xl p-6">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
