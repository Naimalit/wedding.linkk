"use client";

import { useCallback, useRef, useState } from "react";

interface VibrantVowsGateProps {
  gateOpen: boolean;
  envelopeOpening: boolean;
  openHint: string;
  onOpen: () => void;
  onSequenceComplete: () => void;
}

type Phase = "idle" | "warm" | "melt" | "unfold" | "bloom" | "done";

const PETALS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 6.5) % 84}%`,
  delay: `${(i * 0.35) % 5}s`,
  duration: `${5 + (i % 4)}s`,
  size: 6 + (i % 5) * 2,
  rotate: (i * 37) % 360,
}));

export function VibrantVowsGate({
  gateOpen,
  envelopeOpening,
  openHint,
  onOpen,
  onSequenceComplete,
}: VibrantVowsGateProps) {
  const doneRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("idle");

  const startOpening = useCallback(() => {
    if (doneRef.current || envelopeOpening || gateOpen) return;
    doneRef.current = true;
    onOpen();

    setPhase("warm");
    setTimeout(() => setPhase("melt"), 700);
    setTimeout(() => setPhase("unfold"), 1400);
    setTimeout(() => setPhase("bloom"), 2400);
    setTimeout(() => {
      setPhase("done");
      onSequenceComplete();
    }, 3400);
  }, [envelopeOpening, gateOpen, onOpen, onSequenceComplete]);

  if (gateOpen) return null;

  const isOpening = phase !== "idle";
  const waxBreaking = phase === "melt" || phase === "unfold" || phase === "bloom" || phase === "done";

  return (
    <div
      className={`vv-gate ${phase === "done" ? "vv-gate--out" : ""} ${isOpening ? "vv-gate--opening" : ""}`}
      onClick={startOpening}
      onTouchStart={startOpening}
      onKeyDown={(e) => e.key === "Enter" && startOpening()}
      role="button"
      tabIndex={0}
      aria-label={openHint}
    >
      <div className="vv-gate__bg" aria-hidden />
      <div className={`vv-gate__warmth ${phase === "warm" || waxBreaking ? "vv-gate__warmth--on" : ""}`} aria-hidden />

      <div className="vv-gate__petals" aria-hidden>
        {PETALS.map((p) => (
          <span
            key={p.id}
            className="vv-gate__petal"
            style={{
              left: p.left,
              width: p.size,
              height: p.size * 1.3,
              animationDelay: p.delay,
              animationDuration: p.duration,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div className={`vv-letter ${isOpening ? "vv-letter--opening" : ""} vv-letter--${phase}`}>
        <div className="vv-letter__shadow" aria-hidden />

        <div className="vv-letter__base">
          <div className="vv-letter__border" aria-hidden />
          <div className="vv-letter__lines" aria-hidden />
          <div className="vv-letter__inner">
            <p className="vv-letter__eyebrow">Ftesë Dasme</p>
            <p className="vv-letter__names">Erion &amp; Sara</p>
            <p className="vv-letter__date">22 · 08 · 2026</p>
            <p className="vv-letter__quote">
              &ldquo;Dashuria është letra që zemra shkruan me qiri.&rdquo;
            </p>
          </div>
        </div>

        <div className="vv-letter__flap">
          <div className="vv-letter__flap-face" />
          <div className="vv-letter__flap-back" />
        </div>

        <div className={`vv-letter__wax ${waxBreaking ? "vv-letter__wax--break" : ""}`}>
          <div className="vv-letter__wax-pool" aria-hidden />
          <div className="vv-letter__wax-body">
            <span className="vv-letter__wax-text">E&amp;S</span>
          </div>
          <span className="vv-letter__drip vv-letter__drip--1" aria-hidden />
          <span className="vv-letter__drip vv-letter__drip--2" aria-hidden />
          <span className="vv-letter__drip vv-letter__drip--3" aria-hidden />
          {waxBreaking &&
            Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={`vv-letter__chip vv-letter__chip--${i}`} aria-hidden />
            ))}
        </div>

        <div className={`vv-letter__candle ${phase === "warm" || waxBreaking ? "vv-letter__candle--lit" : ""}`}>
          <div className="vv-letter__wick" aria-hidden />
          <div className="vv-letter__flame" aria-hidden />
          <div className="vv-letter__flame-glow" aria-hidden />
        </div>
      </div>

      <div className={`vv-gate__hint ${isOpening ? "vv-gate__hint--hide" : ""}`}>
        <span className="vv-gate__hint-icon" aria-hidden>🕯</span>
        <span className="vv-gate__hint-text">{openHint}</span>
      </div>
    </div>
  );
}
