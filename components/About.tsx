"use client";

import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import GlowPercent from "./GlowPercent";
import { about, educationTimeline, profile } from "@/lib/data";
import { useLang, useUi, pick } from "@/lib/i18n";

export default function About() {
  const { lang } = useLang();
  const t = useUi();
  const paragraphs = lang === "tr" ? about.paragraphsTr : about.paragraphs;
  return (
    <Section id="about" index="01" title={t.sections.about}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="space-y-8">
          {/* Profile picture */}
          <div className="flex justify-center">
            <Image
              src="/me.jpeg"
              alt={profile.name}
              width={208}
              height={208}
              priority
              className="h-52 w-52 rounded-full object-cover ring-2 ring-accent/40 ring-offset-4 ring-offset-bg"
            />
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-heading">
              {t.about.education}
            </h3>
            <div className="relative">
              {/* vertical rail */}
              <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-accent/40 via-border to-accent/40" />

              <div className="space-y-6">
                {educationTimeline.map((node, idx) =>
                  node.type === "school" ? (
                    <div key={idx} className="relative pl-14">
                      {/* logo marker on the rail */}
                      <a
                        href={node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={node.school}
                        className="absolute left-0 top-0 transition-transform hover:scale-105"
                      >
                        <Image
                          src={node.logo}
                          alt={node.school}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-md border border-border bg-white object-contain p-0.5 ring-4 ring-bg"
                        />
                      </a>
                      <p className="text-sm font-semibold leading-snug text-heading">
                        {node.url ? (
                          <a
                            href={node.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-transparent underline-offset-2 transition-colors hover:decoration-accent-soft"
                          >
                            {pick(lang, node.school, node.schoolTr)}
                          </a>
                        ) : (
                          pick(lang, node.school, node.schoolTr)
                        )}
                      </p>
                      <p className="text-sm text-muted">
                        {pick(lang, node.degree, node.degreeTr)}
                      </p>
                      {node.note && (
                        <p className="text-sm text-accent-soft">
                          {pick(lang, node.note, node.noteTr)}
                        </p>
                      )}
                      <p className="mt-1 font-mono text-xs text-muted/70">
                        {node.period}
                      </p>
                    </div>
                  ) : (
                    <div key={idx} className="relative pl-14">
                      {/* year sits on the rail as the marker (no dot) */}
                      <span className="absolute left-0 top-0.5 w-10 text-center">
                        <span className="bg-bg px-1 font-mono text-xs font-semibold text-accent-soft">
                          {node.year}
                        </span>
                      </span>
                      <div>
                        <p className="text-sm text-muted">
                          {pick(lang, node.name, node.nameTr)}
                        </p>
                        <p className="text-sm text-muted">
                          {pick(lang, "top", "ilk")}{" "}
                          <GlowPercent>{node.percent}</GlowPercent>
                          {node.suffix
                            ? ` ${pick(lang, node.suffix, node.suffixTr)}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
