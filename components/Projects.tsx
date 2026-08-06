"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PROJECTS } from "@/lib/projects";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built for scale, not screenshots."
          intro="Systems that shipped to production and stayed there."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-3/2 overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`View more about ${project.title}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      View more <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live site`}
                      className="inline-flex flex-1 items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-88"
                    >
                      Live <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
