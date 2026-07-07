"use client";

import { useCallback, useRef, useState } from "react";
import { CelestialStarfield } from "@/components/CelestialStarfield";

interface CelestialEngagementGateProps {
  gateOpen: boolean;
  envelopeOpening: boolean;
  openHint: string;
  onOpen: () => void;
  onSequenceComplete: () => void;
}

function burstParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = canvas.parentElement?.clientWidth ?? window.innerWidth;
  canvas.height = canvas.parentElement?.clientHeight ?? window.innerHeight;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const particles = Array.from({ length: 72 }, (_, i) => {
    const angle = (i / 72) * Math.PI * 2 + Math.random() * 0.3;
    const speed = Math.random() * 6 + 3;
    return {
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 1.5,
      life: 1,
      decay: Math.random() * 0.018 + 0.012,
      color: Math.random() > 0.3 ? "#e8c872" : "#fff8e8",
    };
  });

  let frame = 0;
  const maxFrames = 90;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.97;
      p.vy *= 0.97;
      p.life -= p.decay;
      if (p.life <= 0) return;
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    frame++;
    if (frame < maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  draw();
}

export function CelestialEngagementGate({
  gateOpen,
  envelopeOpening,
  openHint,
  onOpen,
  onSequenceComplete,
}: CelestialEngagementGateProps) {
  const doneRef = useRef(false);
  const burstRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"idle" | "burst" | "flaps" | "warp" | "done">("idle");
  const [warp, setWarp] = useState(0);

  const startOpening = useCallback(() => {
    if (doneRef.current || envelopeOpening || gateOpen) return;
    doneRef.current = true;
    onOpen();

    setPhase("burst");
    if (burstRef.current) burstParticles(burstRef.current);

    setTimeout(() => setPhase("flaps"), 400);
    setTimeout(() => {
      setPhase("warp");
      setWarp(1);
    }, 900);
    setTimeout(() => setWarp(2.5), 1400);
    setTimeout(() => {
      setPhase("done");
      onSequenceComplete();
    }, 3200);
  }, [envelopeOpening, gateOpen, onOpen, onSequenceComplete]);

  if (gateOpen) return null;

  const isOpening = phase !== "idle";

  return (
    <div
      className={`cel-gate ${phase === "done" ? "cel-gate--out" : ""} ${isOpening ? "cel-gate--opening" : ""}`}
      onClick={startOpening}
      onKeyDown={(e) => e.key === "Enter" && startOpening()}
      role="button"
      tabIndex={0}
      aria-label={openHint}
    >
      <CelestialStarfield className="cel-gate__stars" warp={warp} />
      <canvas ref={burstRef} className="cel-gate__burst" aria-hidden />
      <div className={`cel-gate__flash ${phase === "burst" ? "cel-gate__flash--on" : ""}`} aria-hidden />

      <div className={`cel-env ${isOpening ? "cel-env--open" : ""}`}>
        <div className="cel-env__glow" aria-hidden />
        <div className="cel-env__body" aria-hidden />

        <div className="cel-env__flap cel-env__flap--top" aria-hidden />
        <div className="cel-env__flap cel-env__flap--bottom" aria-hidden />
        <div className="cel-env__flap cel-env__flap--left" aria-hidden />
        <div className="cel-env__flap cel-env__flap--right" aria-hidden />

        <div className={`cel-env__seal ${phase === "burst" || isOpening ? "cel-env__seal--break" : ""}`}>
          <div className="cel-env__seal-ring" aria-hidden />
          <span className="cel-env__seal-text">E&amp;A</span>
          {(phase === "burst" || phase === "flaps") &&
            Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`cel-env__shard cel-env__shard--${i}`} aria-hidden />
            ))}
        </div>
      </div>

      <div className={`cel-gate__hint ${isOpening ? "cel-gate__hint--hide" : ""}`}>
        <span className="cel-gate__hint-icon" aria-hidden>✦</span>
        <span className="cel-gate__hint-text">{openHint}</span>
        <span className="cel-gate__hint-icon" aria-hidden>✦</span>
      </div>
    </div>
  );
}
