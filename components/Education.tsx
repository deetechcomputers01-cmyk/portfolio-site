import { Reveal, SectionHeading } from "./Reveal";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Where I've studied." />

        <ol className="mt-16 space-y-0 border-l border-border pl-8 sm:pl-12">
          {EDUCATION.map((school, i) => (
            <li key={school.school} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.28rem] top-2 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[3.28rem]"
              />
              <Reveal delay={i * 0.06}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl">{school.school}</h3>
                  <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
                    {school.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{school.credential}</p>
                {school.description ? (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {school.description}
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
