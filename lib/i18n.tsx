"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "tr";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default matches the server-rendered output (English); switch after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "tr" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

/** Pick the Turkish string when in TR mode and it exists, else the English one. */
export const pick = (lang: Lang, en: string, tr?: string) =>
  lang === "tr" && tr ? tr : en;

/** UI-chrome strings (labels, headings, buttons, game copy). */
export const ui = {
  en: {
    nav: {
      about: "About",
      research: "Research",
      experience: "Experience",
      projects: "Projects",
      beyond: "Beyond",
      contact: "Contact",
      resume: "Résumé",
    },
    hero: {
      openTo: "Open to ML / AI Engineering roles",
      metu: "M.E.T.U. — Computer Engineering",
      getInTouch: "Get in touch",
      downloadCv: "Download CV",
    },
    sections: {
      about: "About",
      research: "Research & Publications",
      experience: "Experience",
      projects: "Projects",
      beyond: "Beyond the Screen",
    },
    about: { education: "Education" },
    experience: { advisor: "Advisor", advisors: "Advisors" },
    contact: {
      whatsNext: "What's next?",
      heading: "Let's build something together",
      body: "I'm currently open to machine learning and AI engineering opportunities. Whether you have a role, a project or business idea, or just want to talk shop — my inbox is always open.",
      sayHello: "Say hello",
      downloadCv: "Download CV",
    },
    play: {
      calisthenics: "Calisthenics",
      running: "Running",
      muscleBest: "my muscle-up best:",
      sprintBest: "my 100m:",
      sec: "sec",
      tapToBeat: "tap to beat me",
      notClose: "not even close…",
      gettingThere: "getting there…",
      soClose: "so close…",
      pr: (n: number) => `PR! ${n} muscle-ups 💪`,
      over1: "you beat me! 🎉",
      over2: "okay, showoff 😅",
      over3: "that's not human 😳",
      over4: "please, stop 😰",
      mash: "mash to sprint 100m →",
      bolt: "Usain Bolt?! 🐆",
      raceWon: "you beat me! 🎉",
      raceClose: "so close!",
      raceLost: "I'm still faster 😄",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      research: "Araştırma",
      experience: "Deneyim",
      projects: "Projeler",
      beyond: "Ötesi",
      contact: "İletişim",
      resume: "Özgeçmiş",
    },
    hero: {
      openTo: "ML / YZ Mühendisliği rollerine açığım",
      metu: "O.D.T.Ü. — Bilgisayar Mühendisliği",
      getInTouch: "İletişime geç",
      downloadCv: "CV'yi indir",
    },
    sections: {
      about: "Hakkımda",
      research: "Araştırma & Yayınlar",
      experience: "Deneyim",
      projects: "Projeler",
      beyond: "Ekranın Ötesinde",
    },
    about: { education: "Eğitim" },
    experience: { advisor: "Danışman", advisors: "Danışmanlar" },
    contact: {
      whatsNext: "Sırada ne var?",
      heading: "Birlikte bir şeyler inşa edelim",
      body: "Şu anda makine öğrenmesi ve yapay zekâ mühendisliği fırsatlarına açığım. İster bir pozisyon, ister bir proje ya da iş fikri olsun, ya da sadece sohbet etmek isteseniz — gelen kutum her zaman açık.",
      sayHello: "Merhaba de",
      downloadCv: "CV'yi indir",
    },
    play: {
      calisthenics: "Kalistenik",
      running: "Koşu",
      muscleBest: "muscle-up rekorum:",
      sprintBest: "100m derecem:",
      sec: "sn",
      tapToBeat: "beni geç, dokun",
      notClose: "daha çok var…",
      gettingThere: "geliyorsun…",
      soClose: "çok az kaldı…",
      pr: (n: number) => `Rekor! ${n} muscle-up 💪`,
      over1: "beni geçtin! 🎉",
      over2: "tamam, gösteriş 😅",
      over3: "bu insan işi değil 😳",
      over4: "lütfen, dur 😰",
      mash: "100m için hızlı dokun →",
      bolt: "Usain Bolt?! 🐆",
      raceWon: "beni geçtin! 🎉",
      raceClose: "çok az kaldı!",
      raceLost: "yine de ben daha hızlıyım 😄",
    },
  },
};

export const useUi = () => ui[useLang().lang];
