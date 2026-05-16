import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Rocket, Workflow, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { NeuralBackground } from "./NeuralBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-hero-glow pt-28">
      <NeuralBackground />

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="animate-float pointer-events-none absolute left-[5%] top-[30%] hidden md:block"
      >
        <div className="glass shadow-glow w-60 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="font-semibold">MVP shipped</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">4 weeks · React + Node + OpenAI</div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-4/5 bg-gradient-primary" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="animate-float pointer-events-none absolute right-[6%] top-[24%] hidden md:block"
        style={{ animationDelay: "1s" }}
      >
        <div className="glass shadow-glow-violet w-64 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Workflow className="h-4 w-4" style={{ color: "var(--violet)" }} />
            <span className="font-semibold">Workflow automated</span>
          </div>
          <div className="mt-1 text-2xl font-bold text-gradient">12h / week</div>
          <div className="text-xs text-muted-foreground">saved on email + triage</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="animate-float pointer-events-none absolute bottom-[18%] right-[18%] hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="glass w-56 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-semibold">AI integrated</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">RAG over 8,200 docs</div>
          <div className="mt-3 grid grid-cols-6 gap-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-sm"
                style={{
                  background: i < 15 ? "var(--gradient-primary)" : "oklch(0.30 0.04 265)",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          AI-Powered SaaS Development Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Turning ideas into <span className="text-gradient">intelligent SaaS</span> products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          Codehence is an AI-focused software studio building scalable SaaS apps, automation tools,
          and custom AI integrations — for startups, founders, and businesses ready to move faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3.5 text-base font-semibold transition-colors hover:border-primary/40"
          >
            <MessageCircle className="h-4 w-4" />
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 text-center sm:grid-cols-3"
        >
          {[
            ["AI-first", "Every product ships with AI baked in"],
            ["Modern stack", "React · Node · AWS · OpenAI"],
            ["Founder-led", "Direct access to engineers"],
          ].map(([v, l]) => (
            <div key={v} className="glass rounded-2xl p-4">
              <div className="text-xl font-bold text-gradient md:text-2xl">{v}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
