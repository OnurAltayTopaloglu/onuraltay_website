import { ArrowUpRight, FolderGit2, Lock } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg/60 text-accent">
                  <FolderGit2 size={18} />
                </span>
                {project.status ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[11px] text-accent-soft">
                    <Lock size={11} /> {project.status}
                  </span>
                ) : (
                  project.links[0] && (
                    <a
                      href={project.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-muted transition-colors group-hover:text-accent"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )
                )}
              </div>

              <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
              <p className="mt-1 text-xs font-medium text-accent-soft">
                {project.subtitle}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-bg/60 px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 border-t border-border/60 pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-text transition-colors hover:text-accent-soft"
                    >
                      {link.label} <ArrowUpRight size={12} />
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
