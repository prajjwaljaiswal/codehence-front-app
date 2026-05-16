import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { site } from "@/data/site";
import {
  Target,
  Eye,
  Sparkles,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type FounderSocialEntry = { icon: LucideIcon; href: string; label: string };

const founderSocials: FounderSocialEntry[] = [
  { icon: Linkedin, href: site.founderSocial.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.founderSocial.twitter, label: "X / Twitter" },
  { icon: Github, href: site.founderSocial.github, label: "GitHub" },
].filter((s): s is FounderSocialEntry => Boolean(s.href));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codehence" },
      { name: "description", content: "Codehence is an AI-focused SaaS development studio founded by Prajjwal Jaiswal — building intelligent products and shipping AI for real businesses." },
      { property: "og:title", content: "About Codehence" },
      { property: "og:description", content: "We're building the future of AI-powered SaaS." },
    ],
  }),
  component: AboutPage,
});

const beliefs: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Sparkles,
    title: "AI is a feature, not a product",
    desc: "Great products solve a problem; AI just makes them sharper. We start with the problem, not the model.",
  },
  {
    icon: Target,
    title: "Founders deserve direct access",
    desc: "No account managers, no slide decks. You talk to the engineers actually building your product.",
  },
  {
    icon: Eye,
    title: "Ship weekly",
    desc: "Long timelines are where startups die. We demo every Friday — and we mean every Friday.",
  },
  {
    icon: Sparkles,
    title: "Modern stack only",
    desc: "We use what we'd choose for our own products: React, Node, TypeScript, AWS, OpenAI. No legacy detours.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="About"
          title="We're building the future of AI-powered SaaS"
          subtitle="Codehence was founded by Prajjwal Jaiswal to make AI useful for real businesses — not in keynotes, but in the products people use every day."
        />

        {/* Story / Mission / Vision */}
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass neon-border hover-lift rounded-2xl p-7 lg:col-span-3"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </div>
            <p className="mt-3 text-pretty text-base text-muted-foreground md:text-lg">
              Codehence started with a simple observation: AI is everywhere in headlines and almost
              nowhere in the tools people actually use at work. We're a small, focused team of
              builders, designers, and AI engineers turning that gap into real products — for our
              clients, and as our own SaaS suite.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass hover-lift rounded-2xl p-7"
          >
            <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Target className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To make intelligent software accessible — through SaaS products that solve real
              problems, and through engineering work that helps other founders ship faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass hover-lift rounded-2xl p-7 lg:col-span-2"
          >
            <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Eye className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A world where every business — from solo founders to enterprises — has AI-powered
              tools tailored to how they actually work. No more clunky workflows. No more wasted
              hours. No more "AI someday".
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="beliefs">
        <SectionHeader
          eyebrow="What we believe"
          title="Four principles we don't budge on"
          subtitle="If we ever quote you a 9-month timeline or a Java backend, fire us."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {beliefs.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass hover-lift rounded-2xl p-6"
            >
              <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <b.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="founder">
        <SectionHeader
          eyebrow="Founder"
          title="Built by people who actually ship"
          subtitle="No layers between you and the people writing the code."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="absolute inset-0 bg-hero-glow opacity-40" />
            <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              {site.founder.photoUrl ? (
                <img
                  src={site.founder.photoUrl}
                  alt={site.founder.name}
                  className="h-28 w-28 shrink-0 rounded-3xl object-cover shadow-glow"
                />
              ) : (
                <div className="grid h-28 w-28 shrink-0 place-items-center rounded-3xl bg-gradient-primary text-4xl font-bold text-primary-foreground shadow-glow">
                  {site.founder.initials}
                </div>
              )}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {site.founder.role}
                </div>
                <h3 className="mt-1 text-2xl font-bold">{site.founder.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{site.founder.bio}</p>
                {founderSocials.length > 0 && (
                  <div className="mt-4 flex justify-center gap-2 md:justify-start">
                    {founderSocials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-14"
        >
          <div className="absolute inset-0 bg-hero-glow opacity-50" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold md:text-5xl">
              Want to build with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether you're shipping your first MVP or your tenth product, we'd love to hear what
              you're working on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="rounded-xl border border-border glass px-6 py-3 text-sm font-semibold hover:border-primary/40"
              >
                See our products
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
