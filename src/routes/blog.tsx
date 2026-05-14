import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Codehence" },
      { name: "description", content: "AI tutorials, case studies, and product updates from the Codehence team." },
      { property: "og:title", content: "Codehence Blog" },
      { property: "og:description", content: "Insights on AI, ML, and model deployment." },
    ],
  }),
  component: BlogPage,
});

const TABS = ["All", "AI News", "Tutorials", "Case Studies", "Product Updates"] as const;

type Post = {
  title: string;
  excerpt: string;
  category: Exclude<(typeof TABS)[number], "All">;
  read: string;
  author: string;
  date: string;
  gradient: string;
};

const featured: Post = {
  title: "How to Fine-Tune LLaMA 3 on Custom Data in Under an Hour",
  excerpt: "A practical walkthrough of dataset prep, LoRA configuration, and one-click deployment using Codehence's fine-tuning pipeline — go from raw CSV to production endpoint in 60 minutes.",
  category: "Tutorials",
  read: "8 min read",
  author: "Aarav Mehta",
  date: "May 8, 2026",
  gradient: "linear-gradient(135deg, oklch(0.45 0.22 270), oklch(0.55 0.20 230))",
};

const posts: Post[] = [
  { title: "Top 10 Open-Source AI Tools for 2025", excerpt: "From Ollama to vLLM — the toolkit every AI engineer needs this year.", category: "AI News", read: "5 min read", author: "Priya Shah", date: "May 5, 2026", gradient: "linear-gradient(135deg, oklch(0.50 0.18 200), oklch(0.55 0.22 280))" },
  { title: "Deploying ML Models at Scale: A Codehence Guide", excerpt: "Lessons from running 10M+ inferences a day across heterogeneous clusters.", category: "Tutorials", read: "12 min read", author: "Rahul Verma", date: "Apr 28, 2026", gradient: "linear-gradient(135deg, oklch(0.45 0.20 295), oklch(0.50 0.18 240))" },
  { title: "What is RAG and Why Every Business Needs It", excerpt: "Retrieval-Augmented Generation explained — and how to ship it in days, not months.", category: "AI News", read: "6 min read", author: "Maya Iyer", date: "Apr 20, 2026", gradient: "linear-gradient(135deg, oklch(0.55 0.20 220), oklch(0.50 0.22 270))" },
  { title: "Codehence Now Supports ONNX Model Uploads", excerpt: "Bring your own ONNX runtime — deploy in two clicks with full GPU acceleration.", category: "Product Updates", read: "3 min read", author: "Codehence Team", date: "Apr 15, 2026", gradient: "linear-gradient(135deg, oklch(0.60 0.18 180), oklch(0.55 0.22 250))" },
  { title: "Inside Acme Corp's $2M AI Cost Reduction", excerpt: "How a Fortune 500 cut inference costs 73% by migrating to Codehence.", category: "Case Studies", read: "10 min read", author: "Priya Shah", date: "Apr 10, 2026", gradient: "linear-gradient(135deg, oklch(0.45 0.22 280), oklch(0.55 0.18 210))" },
  { title: "Choosing Between LoRA, QLoRA, and Full Fine-Tuning", excerpt: "A decision framework for picking the right fine-tuning approach.", category: "Tutorials", read: "7 min read", author: "Aarav Mehta", date: "Apr 4, 2026", gradient: "linear-gradient(135deg, oklch(0.50 0.20 260), oklch(0.55 0.22 300))" },
];

function BlogPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const list = tab === "All" ? posts : posts.filter((p) => p.category === tab);

  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Blog"
          title="Insights from the AI frontier"
          subtitle="Tutorials, case studies, and product updates straight from the Codehence team."
        />

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass neon-border mb-10 grid gap-6 overflow-hidden rounded-3xl p-6 md:grid-cols-2 md:p-8"
        >
          <div
            className="relative h-56 overflow-hidden rounded-2xl md:h-full md:min-h-[280px]"
            style={{ background: featured.gradient }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
            <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{featured.category}</span>
            <h3 className="mt-3 text-2xl font-bold md:text-3xl">{featured.title}</h3>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {featured.read}
              </span>
            </div>
            <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Read article <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.article>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                tab === t
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border border-border glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass hover-lift group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-44 overflow-hidden" style={{ background: p.gradient }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
