import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
        {title.split(" ").map((w, i) =>
          i % 3 === 1 ? (
            <span key={i} className="text-gradient">
              {" "}
              {w}{" "}
            </span>
          ) : (
            <span key={i}> {w} </span>
          ),
        )}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
