"use client";

import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { profile } from "@/lib/data";
import { useLang, useUi, pick } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = useUi();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pb-20 pt-28">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.openTo}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg font-medium text-accent-soft sm:text-xl">
          {pick(lang, profile.title, profile.titleTr)}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {pick(lang, profile.tagline, profile.taglineTr)}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-accent" />{" "}
            {pick(lang, profile.location, profile.locationTr)}
          </span>
          <span className="inline-flex items-center gap-2">
            <GraduationCap size={15} className="text-accent" /> {t.hero.metu}
          </span>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> {t.hero.getInTouch}
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50 hover:text-heading"
          >
            <Download size={16} /> {t.hero.downloadCv}
          </a>

          <div className="ml-1 flex items-center gap-1">
            <SocialIcon href={profile.socials.github} label="GitHub">
              <Github size={18} />
            </SocialIcon>
            <SocialIcon href={profile.socials.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent md:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-accent"
    >
      {children}
    </a>
  );
}
