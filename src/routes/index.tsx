import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Section, SectionHeader } from "@/components/Section";
import { tools } from "@/data/tools";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = tools.slice(0, 6);
  return (
    <Layout>
      <Hero />

      <Section id="tools-preview">
        <SectionHeader
          eyebrow="AI Tools"
          title="A marketplace of intelligent tools"
          subtitle="Drop-in AI capabilities across text, vision, data, training, and deployment."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass neon-border hover-lift rounded-2xl p-5"
            >
              <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <t.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.features.map((f) => (
                  <span key={f} className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-2.5 text-sm font-semibold hover:border-primary/40"
          >
            Browse all tools <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Solutions />

      {/* CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold md:text-5xl">
              Ready to ship <span className="text-gradient">production AI</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join thousands of teams running AI on Codehence. Start free, scale when ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
                Get Started Free
              </Link>
              <Link to="/tools" className="rounded-xl border border-border glass px-6 py-3 text-sm font-semibold hover:border-primary/40">
                Explore Tools
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
