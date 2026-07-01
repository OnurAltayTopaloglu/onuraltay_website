"use client";

import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/lib/data";
import { useLang, useUi, pick } from "@/lib/i18n";

export default function Experience() {
  const { lang } = useLang();
  const t = useUi();
  return (
    <Section id="experience" index="03" title={t.sections.experience}>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <Reveal key={exp.org + exp.period} delay={i * 80}>
            <div className="grid gap-x-6 gap-y-2 sm:grid-cols-[140px_1fr]">
              {/* Left column: date + location */}
              <div className="sm:pt-1 sm:text-right">
                <p className="font-mono text-xs text-accent-soft">{exp.period}</p>
                <p className="mt-1 text-xs text-muted/70">
                  {pick(lang, exp.location, exp.locationTr)}
                </p>
              </div>

              {/* Right column: details with timeline rail */}
              <div className="relative border-l border-border pl-6">
                <span className="absolute -left-[5px] top-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-accent ring-4 ring-bg" />

                {/* Logo pinned to the entry's top-right for consistent
                    alignment across every row, regardless of content height. */}
                {exp.logos && exp.logos.length > 0 ? (
                  <div className="absolute right-0 top-0.5 flex items-center gap-3">
                    {exp.logos.map((l) => (
                      <TransparentLogo
                        key={l.src}
                        {...l}
                        large={exp.logos!.length === 1}
                      />
                    ))}
                  </div>
                ) : (
                  exp.logo && (
                    <div className="absolute right-0 top-0.5">
                      <LogoBadge src={exp.logo} alt={exp.org} href={exp.orgUrl} />
                    </div>
                  )
                )}

                {/* Header: right padding reserves space for the logo */}
                <div className="pr-44">
                  <h3 className="text-lg font-semibold text-heading sm:text-xl">
                    {pick(lang, exp.role, exp.roleTr)}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent-soft">
                    {exp.orgUrl ? (
                      <a
                        href={exp.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-transparent underline-offset-2 transition-colors hover:decoration-accent-soft"
                      >
                        {exp.org}
                      </a>
                    ) : (
                      exp.org
                    )}
                  </p>
                </div>

                {exp.advisors && exp.advisors.length > 0 && (
                  <p className="mt-1 text-xs italic text-muted/80">
                    {(exp.advisors.length > 1
                      ? t.experience.advisors
                      : t.experience.advisor) + ": "}
                    {exp.advisors.map((advisor, k) => (
                      <span key={advisor.name}>
                        {advisor.url ? (
                          <a
                            href={advisor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-dotted decoration-muted/40 underline-offset-2 transition-colors hover:text-accent-soft hover:decoration-accent-soft"
                          >
                            {advisor.name}
                          </a>
                        ) : (
                          advisor.name
                        )}
                        {k < exp.advisors!.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                )}

                <ul className="mt-3 space-y-2">
                  {(lang === "tr" && exp.pointsTr ? exp.pointsTr : exp.points).map(
                    (point, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/50"
                      >
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TransparentLogo({
  src,
  srcDark,
  alt,
  url,
  large,
}: {
  src: string;
  srcDark?: string;
  alt: string;
  url?: string;
  large?: boolean;
}) {
  // Brand SVGs on a transparent background (no tile), sized by height.
  // Single-logo entries render larger; multi-logo rows stay compact.
  // When a dark-mode variant exists, swap the two by theme via the `dark:` class.
  const imgClass = `${
    large ? "h-14 max-w-[150px]" : "h-9 max-w-[80px]"
  } w-auto object-contain`;
  const img = srcDark ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={`${imgClass} dark:hidden`} loading="lazy" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={srcDark}
        alt={alt}
        className={`hidden ${imgClass} dark:block`}
        loading="lazy"
      />
    </>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={imgClass} loading="lazy" />
  );

  if (!url) return <span className="shrink-0">{img}</span>;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="shrink-0 opacity-90 transition hover:scale-105 hover:opacity-100"
    >
      {img}
    </a>
  );
}

function LogoBadge({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href?: string;
}) {
  const logo = (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="h-16 w-16 rounded-xl border border-border bg-white object-contain p-1.5"
    />
  );

  const wrapperClass = "block shrink-0 rounded-xl shadow-sm transition-transform";

  if (!href) {
    return <span className={wrapperClass}>{logo}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className={`${wrapperClass} hover:scale-105`}
    >
      {logo}
    </a>
  );
}
