import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Contact";
import { ProjectGallery } from "@/components/ProjectGallery";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case study`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="section-shell">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to work
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{project.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="border border-border px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-88"
            >
              Visit live site <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="relative mt-14 aspect-3/2 w-full overflow-hidden rounded-2xl border border-border bg-muted sm:aspect-16/7">
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-14 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.gallery ? (
            <div className="mt-20">
              <p className="eyebrow">Screenshots</p>
              <h2 className="mt-5 text-3xl leading-[1.05] sm:text-4xl">A closer look, screen by screen.</h2>
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Browse by device, then by screen.
              </p>
              <div className="mt-10">
                <ProjectGallery devices={project.gallery} />
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
