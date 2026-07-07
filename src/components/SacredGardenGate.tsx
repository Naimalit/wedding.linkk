"use client";

import { useCallback, useRef, useState } from "react";

interface SacredGardenGateProps {
  gateOpen: boolean;
  envelopeOpening: boolean;
  openHint: string;
  onOpen: () => void;
  onSequenceComplete: () => void;
}

/** Embossed floral vine — used on each flap edge */
const FLORAL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 360'%3E%3Cpath d='M50 4 C44 70 22 120 48 185 C72 240 30 310 50 356' stroke='%23d5cec3' stroke-width='1.3' fill='none'/%3E%3Cellipse cx='34' cy='78' rx='10' ry='6.5' fill='%23ebe4da'/%3E%3Cellipse cx='66' cy='132' rx='9' ry='6' fill='%23e3dcd2'/%3E%3Cellipse cx='36' cy='188' rx='10' ry='6.5' fill='%23ebe4da'/%3E%3Cellipse cx='64' cy='248' rx='9' ry='6' fill='%23e3dcd2'/%3E%3Cellipse cx='38' cy='302' rx='10' ry='6.5' fill='%23ebe4da'/%3E%3Ccircle cx='28' cy='76' r='4.5' fill='%23f5f0e8'/%3E%3Ccircle cx='60' cy='130' r='4' fill='%23f5f0e8'/%3E%3Ccircle cx='30' cy='186' r='4.5' fill='%23f5f0e8'/%3E%3Ccircle cx='58' cy='246' r='4' fill='%23f5f0e8'/%3E%3Ccircle cx='32' cy='300' r='4.5' fill='%23f5f0e8'/%3E%3C/svg%3E")`;

export function SacredGardenGate({
  gateOpen,
  envelopeOpening,
  openHint,
  onOpen,
  onSequenceComplete,
}: SacredGardenGateProps) {
  const doneRef = useRef(false);
  const [phase, setPhase] = useState<"idle" | "seal" | "flaps" | "done">("idle");

  const startOpening = useCallback(() => {
    if (doneRef.current || envelopeOpening || gateOpen) return;
    doneRef.current = true;
    onOpen();

    setPhase("seal");
    setTimeout(() => setPhase("flaps"), 480);
    setTimeout(() => {
      setPhase("done");
      onSequenceComplete();
    }, 2600);
  }, [envelopeOpening, gateOpen, onOpen, onSequenceComplete]);

  if (gateOpen) return null;

  const isOpening = phase !== "idle";

  return (
    <div
      className={`sg-gate ${phase === "done" ? "sg-gate--out" : ""} ${isOpening ? "sg-gate--opening" : ""}`}
      onClick={startOpening}
      onTouchStart={startOpening}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && startOpening()}
      aria-label={openHint}
    >
      <div className={`sg-env ${phase === "flaps" || phase === "done" ? "sg-env--open" : ""}`}>
        <div className="sg-env__shadow" aria-hidden />

        {/* Inner sheet — warm glow source */}
        <div className="sg-env__inner" aria-hidden />
        <div className="sg-env__glow" aria-hidden />

        {/* Paper body */}
        <div className="sg-env__body" aria-hidden />

        {/* Four flaps */}
        <div className="sg-env__flap sg-env__flap--bottom" style={{ backgroundImage: FLORAL }} aria-hidden />
        <div className="sg-env__flap sg-env__flap--left" style={{ backgroundImage: FLORAL }} aria-hidden />
        <div className="sg-env__flap sg-env__flap--right" style={{ backgroundImage: FLORAL }} aria-hidden />
        <div className="sg-env__flap sg-env__flap--top" style={{ backgroundImage: FLORAL }} aria-hidden />

        {/* Native E&S wax seal — no overlay, no R&Z */}
        <div className={`sg-env__seal ${phase === "seal" || phase === "flaps" || phase === "done" ? "sg-env__seal--break" : ""}`}>
          <div className="sg-env__seal-wax">
            <span className="sg-env__seal-text">E&amp;S</span>
          </div>
          {(phase === "seal" || phase === "flaps") &&
            Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className={`sg-env__chip sg-env__chip--${i}`} />
            ))}
        </div>
      </div>

      <div className={`sg-gate__tap ${isOpening ? "sg-gate__tap--hide" : ""}`}>
        <div className="sg-gate__chevron" aria-hidden />
        <span className="sg-gate__tap-label">{openHint}</span>
      </div>
    </div>
  );
}
