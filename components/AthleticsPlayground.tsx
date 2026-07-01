"use client";

import { useState } from "react";
import { athletics } from "@/lib/data";

export default function AthleticsPlayground() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MuscleUp max={athletics.muscleUpMax} />
      <Runner events={athletics.trackEvents} />
    </div>
  );
}

/* ---------- Tap-to-rep muscle-up figure ---------- */
function MuscleUp({ max }: { max: number }) {
  const [reps, setReps] = useState(0);
  const [active, setActive] = useState(false);

  const doRep = () => {
    if (active) return;
    setActive(true);
    setReps((r) => Math.min(r + 1, max));
  };

  const label =
    reps === 0
      ? "tap the bar →"
      : reps >= max
      ? `PR! ${max} muscle-ups 💪`
      : `${reps} rep${reps > 1 ? "s" : ""}`;

  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-bg/40 p-3">
      <span className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted/70">
        Calisthenics
      </span>
      <button
        type="button"
        onClick={doRep}
        aria-label="Do a muscle-up"
        className="text-accent transition-transform active:scale-95"
      >
        <svg
          viewBox="0 0 100 130"
          className="h-28 w-24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* bar (static) */}
          <line x1="12" y1="32" x2="88" y2="32" strokeWidth={4} />
          <g
            className={active ? "muscleup-go" : ""}
            onAnimationEnd={() => setActive(false)}
          >
            {/* arms to the bar */}
            <line x1="44" y1="32" x2="46" y2="56" />
            <line x1="56" y1="32" x2="54" y2="56" />
            {/* head */}
            <circle cx="50" cy="48" r="7" />
            {/* torso */}
            <line x1="50" y1="55" x2="50" y2="86" />
            {/* legs */}
            <line x1="50" y1="86" x2="42" y2="110" />
            <line x1="50" y1="86" x2="58" y2="110" />
          </g>
        </svg>
      </button>
      <span
        className={`mt-1 text-center text-xs ${
          reps >= max ? "font-semibold text-accent" : "text-muted"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ---------- Running figure (flip-book run cycle) ---------- */
function Runner({ events }: { events: string[] }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-bg/40 p-3">
      <div className="mb-1 flex flex-wrap justify-center gap-1">
        {events.map((e) => (
          <span
            key={e}
            className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-accent-soft"
          >
            {e}
          </span>
        ))}
      </div>
      <svg
        viewBox="0 0 100 120"
        className="h-28 w-24 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g className="run-bob">
          {/* head + torso (stable) */}
          <circle cx="50" cy="28" r="8" />
          <line x1="50" y1="36" x2="50" y2="72" />
          {/* pose A limbs */}
          <g className="run-pose-a">
            <line x1="50" y1="42" x2="63" y2="54" />
            <line x1="50" y1="42" x2="38" y2="50" />
            <line x1="50" y1="72" x2="62" y2="96" />
            <line x1="50" y1="72" x2="42" y2="106" />
          </g>
          {/* pose B limbs */}
          <g className="run-pose-b">
            <line x1="50" y1="42" x2="37" y2="54" />
            <line x1="50" y1="42" x2="62" y2="50" />
            <line x1="50" y1="72" x2="38" y2="96" />
            <line x1="50" y1="72" x2="58" y2="106" />
          </g>
        </g>
        {/* ground */}
        <line x1="16" y1="114" x2="84" y2="114" strokeWidth={2} className="text-border" />
      </svg>
      <span className="mt-1 font-mono text-[10px] text-muted">on the track</span>
    </div>
  );
}
