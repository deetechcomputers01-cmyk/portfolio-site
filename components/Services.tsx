"use client";

import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVICES, ACHIEVEMENTS } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="How I work with teams."
          intro="Engagements usually run four to twelve weeks, scoped around a single measurable outcome."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="h-full rounded-2xl border border-border p-8 transition-colors hover:border-foreground/30"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section aria-label="Achievements" className="border-t border-border bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <p className="font-serif text-5xl sm:text-6xl">{item.value}</p>
            <p className="mt-3 text-sm text-primary-foreground/70">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
