import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { tools, categories } from "@/data/tools";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "AI Tools — Codehence" },
      { name: "description", content: "Browse 15+ production-ready AI tools for text, vision, data, training, and deployment." },
      { property: "og:title", content: "AI Tools Marketplace — Codehence" },
      { property: "og:description", content: "Drop-in AI capabilities for every workflow." },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Marketplace"
          title="AI Tools for every workflow"
          subtitle="From content generation to MLOps — pick a tool, plug it in, ship faster."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border border-border glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <motion.div
                layout
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass neon-border hover-lift group flex h-full flex-col rounded-2xl p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <t.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="rounded-full border border-border bg-card/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {t.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{t.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.features.map((f) => (
                    <span key={f} className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
                <button className="mt-5 inline-flex items-center justify-between rounded-xl border border-border bg-card/40 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary">
                  Try Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </Layout>
  );
}
