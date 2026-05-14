import { motion } from "framer-motion";
import {
  Boxes,
  Database,
  GitBranch,
  Rocket,
  Activity,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const solutions: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Boxes,
    title: "Run Raw AI & ML Models",
    desc: "Upload and run your own PyTorch, TensorFlow, or ONNX models via a simple API. No infrastructure setup needed.",
  },
  {
    icon: Database,
    title: "Train on Your Data",
    desc: "Feed in custom datasets, define parameters, and train models from scratch on Codehence's managed compute.",
  },
  {
    icon: GitBranch,
    title: "Fine-Tune Pretrained Models",
    desc: "Fine-tune LLaMA, GPT, Mistral, BERT, or Stable Diffusion on your proprietary data for domain-specific performance.",
  },
  {
    icon: Rocket,
    title: "Versioning & Deployment",
    desc: "Version control your models and deploy them as REST APIs with one click — rollbacks included.",
  },
  {
    icon: Activity,
    title: "Real-Time Inference",
    desc: "Low-latency inference endpoints engineered for production workloads at any scale.",
  },
  {
    icon: LayoutDashboard,
    title: "MLOps Dashboard",
    desc: "Monitor model performance, data drift, and usage metrics in real time from a single pane of glass.",
  },
];

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeader
        eyebrow="Solutions"
        title="Everything you need to ship AI"
        subtitle="From raw model execution to production-grade MLOps — Codehence covers the entire AI lifecycle."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
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
