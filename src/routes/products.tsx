import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { products, type ProductStatus } from "@/data/products";
import { ArrowRight, Bell } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Codehence" },
      {
        name: "description",
        content:
          "DocSense and ChatStack — the AI SaaS suite Codehence is building in-house. RAG over documents, branded AI chat for your product.",
      },
      { property: "og:title", content: "Codehence Products" },
      { property: "og:description", content: "AI SaaS apps we're building in-house." },
    ],
  }),
  component: ProductsPage,
});

const statusStyles: Record<ProductStatus, string> = {
  Live: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  Beta: "border-primary/40 bg-primary/10 text-primary",
  "In development": "border-amber-400/40 bg-amber-400/10 text-amber-300",
  "Coming soon": "border-violet-400/40 bg-violet-400/10 text-violet-300",
  "Idea stage": "border-border bg-muted/40 text-muted-foreground",
};

const futureIdeas = [
  "InboxBrief — AI email summary + priority inbox",
  "FlowMate — visual AI workflow automation",
  "PulseDash — analytics dashboards with AI narratives",
  "WriteWise — brand-voice content generation",
  "MeetMind — meeting transcripts and action items",
];

function ProductsPage() {
  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Our Products"
          title="Two AI SaaS apps in active build"
          subtitle="We picked two — not eight — so we ship them properly. Both share the same RAG infrastructure, so progress on one accelerates the other."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neon-border hover-lift group flex h-full flex-col rounded-2xl p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
              <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {p.category}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{p.longDescription}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <Link
                to="/blog"
                className="mt-6 inline-flex items-center justify-between rounded-xl border border-border bg-card/40 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <span className="inline-flex items-center gap-2">
                  <Bell className="h-4 w-4" /> Get notified when it ships
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass mt-12 rounded-2xl p-6 md:p-7"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                What else we're cooking
              </div>
              <h3 className="mt-1 text-lg font-semibold">Ideas on the back burner</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We won't build any of these until DocSense and ChatStack are live. But they're on
                the list.
              </p>
            </div>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
            {futureIdeas.map((idea) => (
              <li key={idea} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1 w-1 rounded-full bg-muted-foreground" />
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>
    </Layout>
  );
}
