"use client";

import { Medal, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import AthleticsPlayground from "./AthleticsPlayground";
import { athletics } from "@/lib/data";
import { useLang, useUi, pick } from "@/lib/i18n";

export default function BeyondScreen() {
  const { lang } = useLang();
  const t = useUi();
  const disciplines =
    lang === "tr" ? athletics.disciplinesTr : athletics.disciplines;
  return (
    <Section id="beyond" index="05" title={t.sections.beyond}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal className="space-y-6">
          <p className="text-base leading-relaxed text-muted">
            {pick(lang, athletics.intro, athletics.introTr)}
          </p>

          <div className="space-y-4">
            {athletics.achievements.map((a) => (
              <a
                key={a.title}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/40"
              >
                <Medal
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-heading">
                    {pick(lang, a.place, a.placeTr)}
                    <span className="font-normal text-accent-soft"> · {a.title}</span>
                    <ArrowUpRight
                      size={13}
                      className="ml-0.5 inline opacity-50 transition-opacity group-hover:opacity-100"
                    />
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {pick(lang, a.detail, a.detailTr)}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <span
                key={d}
                className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-text"
              >
                {d}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <AthleticsPlayground />
        </Reveal>
      </div>
    </Section>
  );
}
