import { Reveal } from "./Reveal";
import { STATS } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            A multi-disciplinary IT professional building secure, reliable, well-designed systems.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I&apos;m a highly motivated, results-oriented IT professional with a background spanning
              cybersecurity analysis, IT support within academic affairs, and frontend development. I
              have a strong understanding of network security principles, user support methodologies,
              and modern web development frameworks.
            </p>
            <p>
              I&apos;ve implemented effective security measures, troubleshot complex technical issues,
              and created engaging user interfaces — proof that a comprehensive skill set can drive
              innovation while keeping day-to-day IT operations robust.
            </p>
            <p>
              I hold a BSc in Information Technology from the University of Cape Coast (2026), and
              I&apos;m eager to keep learning while contributing to a dynamic organization&apos;s
              academic and research initiatives.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-background">
              <div className="p-8 sm:p-10">
                <p className="font-serif text-5xl sm:text-6xl">{stat.value}</p>
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
