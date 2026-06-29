"use client";

import { useEffect, useState } from "react";

// Accent-colored percentage that lights up with a glow at random intervals.
export default function GlowPercent({ children }: { children: React.ReactNode }) {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let off: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const delay = 9000 + Math.random() * 13000; // next glow in 9–22s
      timer = setTimeout(() => {
        setGlow(true);
        off = setTimeout(() => setGlow(false), 900); // glow lasts ~0.9s
        schedule();
      }, delay);
    };

    schedule();
    return () => {
      clearTimeout(timer);
      clearTimeout(off);
    };
  }, []);

  return (
    <span
      className={`font-semibold text-accent transition-[text-shadow] duration-500 ${
        glow ? "pct-glow" : ""
      }`}
    >
      {children}
    </span>
  );
}
