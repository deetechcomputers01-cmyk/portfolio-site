import { Reveal, SectionHeading } from "./Reveal";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Where I've put my skills to work." />

        <ol className="mt-16 space-y-0 border-l border-border pl-8 sm:pl-12">
          {EXPERIENCE.map((job, i) => (
            <li key={job.company} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.28rem] top-2 size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[3.28rem]"
              />
              <Reveal delay={i * 0.06}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl">{job.company}</h3>
                  <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{job.role}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {job.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
