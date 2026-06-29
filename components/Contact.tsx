import { Mail, Github, Linkedin, GraduationCap, Download, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 px-6 py-14 text-center sm:px-12">
        <div className="hero-glow absolute inset-0 -z-10 opacity-70" />

        <p className="font-mono text-sm text-accent">05. What's next?</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          I'm currently open to machine learning and AI engineering opportunities.
          Whether you have a role, a project or business idea, or just want to
          talk shop — my inbox is always open.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Say hello
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/50 px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/50 hover:text-heading"
          >
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <ContactLink href={`mailto:${profile.email}`} icon={<Mail size={16} />}>
            {profile.email}
          </ContactLink>
          <ContactLink href={profile.socials.github} icon={<Github size={16} />} external>
            GitHub
          </ContactLink>
          <ContactLink href={profile.socials.linkedin} icon={<Linkedin size={16} />} external>
            LinkedIn
          </ContactLink>
          <ContactLink
            href={profile.socials.scholar}
            icon={<GraduationCap size={16} />}
            external
          >
            Google Scholar
          </ContactLink>
        </div>
      </Reveal>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  external,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent-soft"
    >
      <span className="text-accent">{icon}</span>
      {children}
      {external && <ArrowUpRight size={12} className="opacity-60" />}
    </a>
  );
}
