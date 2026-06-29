import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import GlowPercent from "./GlowPercent";
import { about, educationTimeline, profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
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
              Education
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
                            {node.school}
                          </a>
                        ) : (
                          node.school
                        )}
                      </p>
                      <p className="text-sm text-muted">{node.degree}</p>
                      {node.note && (
                        <p className="text-sm text-accent-soft">{node.note}</p>
                      )}
                      <p className="mt-1 font-mono text-xs text-muted/70">
                        {node.period}
                      </p>
                    </div>
                  ) : (
                    <div key={idx} className="relative flex gap-2 pl-14">
                      {/* exam dot on the rail */}
                      <span className="absolute left-[15px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
                      <span className="shrink-0 pt-px font-mono text-xs text-accent-soft">
                        {node.year}
                      </span>
                      <div>
                        <p className="text-sm text-muted">{node.name}</p>
                        <p className="text-sm text-muted">
                          top <GlowPercent>{node.percent}</GlowPercent>
                          {node.suffix ? ` ${node.suffix}` : ""}
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
