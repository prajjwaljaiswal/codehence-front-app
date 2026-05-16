import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Section, SectionHeader } from "@/components/Section";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight, Search, ClipboardList, Hammer, Rocket, RefreshCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const techStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "React Native",
  "TypeScript",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "OpenAI",
  "TanStack",
  "Cloudflare",
];

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    desc: "One free 30-min call. You tell us the problem.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    desc: "A scoped proposal: fixed timeline, fixed price.",
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Weekly demos. You see real progress every Friday.",
  },
  {
    icon: Rocket,
    title: "Ship",
    desc: "Production deploy on AWS or Cloudflare. You own the code.",
  },
  {
    icon: RefreshCcw,
    title: "Iterate",
    desc: "Optional retainer for ongoing improvements.",
  },
];

function Index() {
  const featured = products;
  return (
    <Layout>
      <Hero />

      <Services />

      <Section id="products-preview">
        <SectionHeader
          eyebrow="Our Products"
          title="Two AI SaaS apps, in active build"
          subtitle="We picked two — not eight — so we ship them properly. Both share the same RAG infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass neon-border hover-lift rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="rounded-full border border-border bg-card/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-2.5 text-sm font-semibold hover:border-primary/40"
          >
            See product details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section id="process">
        <SectionHeader
          eyebrow="Our Process"
          title="How we build with you"
          subtitle="Tight feedback loops, no surprises, no theatre. Same process for a 4-week MVP or a 6-month enterprise build."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass hover-lift relative rounded-2xl p-5"
            >
              <div className="absolute right-4 top-4 text-xs font-bold text-muted-foreground/50">
                0{i + 1}
              </div>
              <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="stack">
        <SectionHeader
          eyebrow="Tech we work with"
          title="Modern stack, no shortcuts"
          subtitle="We use what we'd choose for our own products — fast, scalable, and proven in production."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((t) => (
            <span
              key={t}
              className="glass rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </Section>

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
              Have an idea? <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Book a free 30-minute consultation. No pitch, just a real conversation about your
              product.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Book Consultation
              </Link>
              <Link
                to="/products"
                className="rounded-xl border border-border glass px-6 py-3 text-sm font-semibold hover:border-primary/40"
              >
                See our work
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
