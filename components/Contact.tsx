"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Mail, Phone, Linkedin, Download, Check, AlertCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PERSON, NAV_LINKS } from "@/lib/data";
import { contactSchema } from "@/lib/contact-schema";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const CHANNELS = [
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}`, icon: Mail },
  { label: "Phone", value: PERSON.phone, href: `tel:${PERSON.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/daniel-adjei-3ab740237", href: PERSON.linkedin, icon: Linkedin },
];

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      setSent(false);
      setSubmitError(null);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const json = await response.json();

      if (!response.ok || !json.ok) {
        setSubmitError(json.error || "Couldn't send your message. Please try again shortly.");
        setSent(false);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setSubmitError("Couldn't reach the server. Check your connection and try again.");
      setSent(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="Contact"
            title="Have something worth building?"
            intro="Tell me about the problem and the constraints. I reply to every message within two business days."
          />

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("mailto") || channel.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-4 py-4 transition-colors hover:text-foreground"
                >
                  <channel.icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="w-24 shrink-0 text-sm font-medium">{channel.label}</span>
                  <span className="min-w-0 truncate text-sm text-muted-foreground">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/resume.pdf"
            download="Daniel Adjei Mensah - Resume.pdf"
            className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Download className="size-4" /> Download résumé
          </a>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border p-7 sm:p-9"
            aria-label="Contact form"
          >
            <div className="space-y-6">
              <Field label="Name" name="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground"
                />
              </Field>

              <Field label="Email" name="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground"
                />
              </Field>

              <Field label="Message" name="message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What are you building, and what's in the way?"
                  className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-88 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>

            <p aria-live="polite" className="mt-4 min-h-5 text-sm">
              {sent ? (
                <span className="inline-flex items-center gap-2 text-foreground">
                  <Check className="size-4" aria-hidden="true" /> Thanks — your message is on its way.
                </span>
              ) : submitError ? (
                <span className="inline-flex items-center gap-2 text-destructive">
                  <AlertCircle className="size-4" aria-hidden="true" /> {submitError}
                </span>
              ) : null}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
