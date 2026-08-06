"use client";

import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import { STACK } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring, grouped by where it applies."
        />

        <div className="mt-16 space-y-10">
          {STACK.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-[200px_minmax(0,1fr)]">
                <h3 className="text-sm font-semibold">{group.group}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: j * 0.04 }}
                      whileHover={{ y: -3 }}
                      className="border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
