"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PERSON } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="section-shell grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-24">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-20" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Available for select engagements
            </span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h1
              className="text-7xl leading-[0.9] tracking-tight text-foreground md:text-8xl lg:text-9xl"
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {PERSON.name}
              <span className="text-muted-foreground/50">.</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {PERSON.title} based in {PERSON.location.split(",")[0]}. Crafting{" "}
              <span className="font-serif italic text-foreground">precise digital architectures</span>{" "}
              and human-centric interfaces.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-6 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
          >
            <a
              href="#work"
              className="bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-colors duration-300 hover:bg-foreground/85"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border-b border-transparent py-1 text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
            >
              Get in touch
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-4/5 overflow-hidden bg-surface">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${PERSON.name}, ${PERSON.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-background px-5 py-3">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Currently located
              </span>
              <span className="font-serif text-xl italic text-foreground">{PERSON.location}</span>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-12 top-1/2 hidden h-48 w-px -translate-y-1/2 bg-border lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
