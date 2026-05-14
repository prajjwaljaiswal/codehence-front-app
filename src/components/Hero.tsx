import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Cpu, Brain, Zap } from "lucide-react";
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
        <div className="glass shadow-glow w-56 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Brain className="h-4 w-4 text-primary" />
            <span className="font-semibold">Model trained</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">LLaMA-3 fine-tune · 2.4M params</div>
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
        <div className="glass shadow-glow-violet w-60 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4" style={{ color: "var(--violet)" }} />
            <span className="font-semibold">Inference</span>
          </div>
          <div className="mt-1 text-2xl font-bold text-gradient">42ms</div>
          <div className="text-xs text-muted-foreground">p95 latency · 1.2k rps</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="animate-float pointer-events-none absolute bottom-[18%] right-[18%] hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <div className="glass w-52 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="font-semibold">GPU pool</span>
          </div>
          <div className="mt-2 grid grid-cols-6 gap-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-sm"
                style={{
                  background: i < 13 ? "var(--gradient-primary)" : "oklch(0.30 0.04 265)",
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
          The AI tools & solutions platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Build <span className="text-gradient">Smarter</span> with AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          Codehence is the unified platform to run, train, fine-tune, and deploy AI models —
          with production-ready tools and zero infrastructure headaches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/tools"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Explore Tools
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3.5 text-base font-semibold transition-colors hover:border-primary/40"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-center"
        >
          {[
            ["50+", "AI Tools"],
            ["10M+", "Inferences/day"],
            ["99.9%", "Uptime SLA"],
          ].map(([v, l]) => (
            <div key={l} className="glass rounded-2xl p-4">
              <div className="text-2xl font-bold text-gradient md:text-3xl">{v}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
