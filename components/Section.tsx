import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-4xl px-6 py-20 sm:py-24 ${className}`}>
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">
            <span className="font-mono text-base font-medium text-accent">{index}.</span>{" "}
            {title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
