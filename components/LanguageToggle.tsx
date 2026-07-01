"use client";

import { useLang, type Lang } from "@/lib/i18n";

const LANGS: Lang[] = ["en", "tr"];

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-[11px]">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2 py-0.5 uppercase transition-colors ${
            lang === l
              ? "bg-accent/15 text-accent-soft"
              : "text-muted hover:text-heading"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
