"use client";

import { useEffect, useRef, useState } from "react";
import { athletics } from "@/lib/data";

export default function AthleticsPlayground() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MuscleUp max={athletics.muscleUpMax} />
      <Runner pb={athletics.sprintPb} />
    </div>
  );
}

/* ---------- Tap-to-rep muscle-up (idle loop → tap plays one rep) ---------- */
const VIDEO_CLASS =
  "h-32 w-auto dark:[filter:invert(1)_hue-rotate(180deg)]";

function MuscleUp({ max }: { max: number }) {
  const actionRef = useRef<HTMLVideoElement>(null);
  const playingRef = useRef(false);
  const queueRef = useRef(0);
  const [reps, setReps] = useState(0);
  const [active, setActive] = useState(false);

  // A rep in progress can bank exactly one follow-up rep. While one is already
  // banked, further taps are ignored (they don't count) — one rep per window.
  const doRep = () => {
    const a = actionRef.current;
    if (!a) return;
    if (!playingRef.current) {
      // idle → start a rep now
      setReps((r) => r + 1);
      playingRef.current = true;
      setActive(true);
      a.currentTime = 0;
      void a.play();
    } else if (queueRef.current === 0) {
      // mid-rep → bank the next one (it counts when its clip starts)
      queueRef.current = 1;
    }
    // else: already banked → ignore
  };

  const onActionEnded = () => {
    const a = actionRef.current;
    if (!a) return;
    if (queueRef.current > 0) {
      queueRef.current -= 1;
      setReps((r) => r + 1); // count at the start of this rep's frame
      a.currentTime = 0;
      void a.play(); // start the banked rep immediately
    } else {
      a.currentTime = 0;
      playingRef.current = false;
      setActive(false);
    }
  };

  const over = reps - max; // reps past my PR
  const label =
    reps === 0
      ? "tap to beat me"
      : over >= 5
      ? `${reps} · 💀🙏`
      : over === 4
      ? `${reps} · please, stop 😰`
      : over === 3
      ? `${reps} · that's not human 😳`
      : over === 2
      ? `${reps} · okay, showoff 😅`
      : over === 1
      ? `${reps} · you beat me! 🎉`
      : over === 0
      ? `PR! ${max} muscle-ups 💪`
      : reps <= 5
      ? `${reps} · not even close…`
      : reps <= 10
      ? `${reps} · getting there…`
      : `${reps} · so close…`;

  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-bg/40 p-3">
      <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-soft">
        Calisthenics
      </span>
      <span className="mb-1 mt-0.5 font-mono text-[10px] text-muted">
        my muscle-up best: {reps >= max ? max : "?"}
      </span>
      <button
        type="button"
        onClick={doRep}
        aria-label="Do a muscle-up rep"
        className="relative overflow-hidden rounded-lg border border-border transition-transform active:scale-95"
      >
        {/* idle: hanging loop */}
        <video
          src="/muscle_up_stationary.mp4"
          muted
          loop
          autoPlay
          playsInline
          className={`${VIDEO_CLASS} ${active ? "invisible" : ""}`}
        />
        {/* action: one quick muscle-up on tap */}
        <video
          ref={actionRef}
          src="/muscle_up_faster_faster.mp4"
          muted
          playsInline
          preload="auto"
          onEnded={onActionEnded}
          className={`absolute inset-0 ${VIDEO_CLASS} ${active ? "" : "invisible"}`}
        />
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

/* ---------- 100m dash: mash to sprint, race my PB ---------- */
const BOLT = 9.58; // fastest possible time — Usain Bolt WR easter egg
// 100m dash physics (per second). Tune these to change the feel:
const BASE_SPEED = 3; // m/s — the slow default pace once you start
const MAX_BOOST = 10; // extra m/s at full effort
const TAP_GAIN = 0.14; // effort (red bar) added per tap
const EFFORT_DECAY = 0.45; // effort lost per second (lower = accumulates more)

function Runner({ pb }: { pb: number }) {
  const startRef = useRef<number | null>(null);
  const lastRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const distRef = useRef(0);
  const effortRef = useRef(0);
  const [dist, setDist] = useState(0);
  const [effort, setEffort] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [phase, setPhase] = useState<"idle" | "racing" | "done">("idle");
  const [revealed, setRevealed] = useState(false); // PB stays hidden until you finish once

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, []);

  const reset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (cooldownRef.current) clearTimeout(cooldownRef.current);
    startRef.current = null;
    distRef.current = 0;
    effortRef.current = 0;
    setDist(0);
    setEffort(0);
    setElapsed(0);
    setPhase("idle");
  };

  const finish = (now: number) => {
    let t = (now - (startRef.current ?? now)) / 1000;
    t = Math.max(t, BOLT); // can't out-run Bolt
    setElapsed(t);
    setPhase("done");
    setRevealed(true);
    cooldownRef.current = setTimeout(reset, 4000); // 4s time-off, then reset
  };

  const tick = (now: number) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.1);
    lastRef.current = now;
    // effort decays gradually, so it builds up as you keep mashing
    effortRef.current = Math.max(0, effortRef.current - EFFORT_DECAY * dt);
    // move by the base pace + the effort-driven boost
    const v = BASE_SPEED + MAX_BOOST * effortRef.current;
    distRef.current = Math.min(distRef.current + v * dt, 100);
    setEffort(effortRef.current);
    setDist(distRef.current);
    if (startRef.current != null) setElapsed((now - startRef.current) / 1000);
    if (distRef.current >= 100) {
      finish(now);
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  };

  const tap = () => {
    if (phase === "done") return; // resting — locked for the time-off
    if (phase === "idle") {
      const now = performance.now();
      startRef.current = now;
      lastRef.current = now;
      setPhase("racing");
      rafRef.current = requestAnimationFrame(tick);
    }
    effortRef.current = Math.min(1, effortRef.current + TAP_GAIN);
    setEffort(effortRef.current);
  };

  const racing = phase === "racing";
  const bolt = phase === "done" && elapsed <= BOLT;
  const won = phase === "done" && elapsed < pb;
  const caption =
    phase === "idle"
      ? "mash to sprint 100m →"
      : phase === "racing"
      ? `${elapsed.toFixed(2)}s`
      : bolt
      ? `${elapsed.toFixed(2)}s · Usain Bolt?! 🐆`
      : won
      ? `${elapsed.toFixed(2)}s · you beat me! 🎉`
      : elapsed < pb + 1.5
      ? `${elapsed.toFixed(2)}s · so close!`
      : `${elapsed.toFixed(2)}s · I'm still faster 😄`;

  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-bg/40 p-3">
      <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-soft">
        Running
      </span>
      <span className="mb-1 mt-0.5 font-mono text-[10px] text-muted">
        my 100m: {revealed ? `${pb.toFixed(2)}s` : "? sec"}
      </span>

      <div className="flex items-stretch gap-2">
        {/* effort meter (red, fills as you mash) */}
        <div className="flex w-1.5 flex-col-reverse overflow-hidden rounded-full bg-surface">
          <div
            className="w-full rounded-full bg-red-500"
            style={{ height: `${effort * 100}%` }}
          />
        </div>
        <button
          type="button"
          onClick={tap}
          aria-label="Mash to sprint 100m"
          className="relative overflow-hidden rounded-lg border border-border transition-transform active:scale-95"
        >
          {/* idle / cool-down jog */}
          <video
            src="/running.mp4"
            muted
            loop
            autoPlay
            playsInline
            className={`${VIDEO_CLASS} ${racing ? "invisible" : ""}`}
          />
          {/* sprint */}
          <video
            src="/running_faster_longer.mp4"
            muted
            loop
            autoPlay
            playsInline
            className={`absolute inset-0 ${VIDEO_CLASS} ${racing ? "" : "invisible"}`}
          />
        </button>
      </div>

      {/* distance meter */}
      <div className="mt-1.5 h-1 w-20 overflow-hidden rounded-full bg-surface">
        <div className="h-full rounded-full bg-accent" style={{ width: `${dist}%` }} />
      </div>
      <span
        className={`mt-1 text-center text-xs ${
          won || bolt ? "font-semibold text-accent" : "text-muted"
        }`}
      >
        {caption}
      </span>
    </div>
  );
}
