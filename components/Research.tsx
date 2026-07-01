"use client";

import { ExternalLink, FileText, BookOpen, Building2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { publications } from "@/lib/data";
import { useLang, useUi, pick } from "@/lib/i18n";

const badgeStyles: Record<string, string> = {
  venue: "bg-accent/10 text-accent-soft",
  org: "border border-border text-text",
  role: "border border-accent/30 text-accent",
  status: "border border-border text-muted",
};

export default function Research() {
  const { lang } = useLang();
  const t = useUi();
  return (
    <Section id="research" index="02" title={t.sections.research}>
      <div className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 100}>
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/40 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-3 flex flex-wrap items-center gap-2">
                {pub.badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium ${badgeStyles[badge.variant]}`}
                  >
                    {badge.variant === "venue" && <BookOpen size={12} />}
                    {badge.variant === "org" && <Building2 size={12} />}
                    {pick(lang, badge.label, badge.labelTr)}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold leading-snug text-heading sm:text-xl">
                {pub.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pick(lang, pub.description, pub.descriptionTr)}
              </p>

              {pub.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg/50 px-3 py-1.5 text-xs font-medium text-text transition-colors hover:border-accent/50 hover:text-accent-soft"
                    >
                      <FileText size={13} />
                      {link.label}
                      <ExternalLink size={11} className="opacity-60" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
