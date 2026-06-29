import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-1">
          <FooterIcon href={profile.socials.github} label="GitHub">
            <Github size={16} />
          </FooterIcon>
          <FooterIcon href={profile.socials.linkedin} label="LinkedIn">
            <Linkedin size={16} />
          </FooterIcon>
          <FooterIcon href={profile.socials.scholar} label="Google Scholar">
            <GraduationCap size={16} />
          </FooterIcon>
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <Mail size={16} />
          </FooterIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
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
      className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-accent"
    >
      {children}
    </a>
  );
}
