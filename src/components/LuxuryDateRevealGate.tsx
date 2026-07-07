"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface LuxuryDateRevealGateProps {
  gateOpen: boolean;
  envelopeOpening: boolean;
  openHint: string;
  onOpen: () => void;
  onSequenceComplete: () => void;
}

export function LuxuryDateRevealGate({
  gateOpen,
  envelopeOpening,
  openHint,
  onOpen,
  onSequenceComplete,
}: LuxuryDateRevealGateProps) {
  const doneRef = useRef(false);
  const [phase, setPhase] = useState<"idle" | "opening" | "done">("idle");

  const startOpening = useCallback(() => {
    if (doneRef.current || envelopeOpening || gateOpen) return;
    doneRef.current = true;
    onOpen();
    setPhase("opening");
    setTimeout(() => {
      setPhase("done");
      onSequenceComplete();
    }, 4200);
  }, [envelopeOpening, gateOpen, onOpen, onSequenceComplete]);

  if (gateOpen) return null;

  const isOpening = phase !== "idle";

  return (
    <div
      className={`ldr-gate ${phase === "done" ? "ldr-gate--out" : ""} ${isOpening ? "ldr-gate--opening" : ""}`}
      onClick={startOpening}
      onKeyDown={(e) => e.key === "Enter" && startOpening()}
      role="button"
      tabIndex={0}
      aria-label={openHint}
    >
      <div className={`ldr-env ${isOpening ? "ldr-env--open" : ""}`}>
        <div className="ldr-env__shadow" aria-hidden />

        <Image
          src="/demo/luxury-date-reveal/flap-top.png"
          alt=""
          width={1012}
          height={439}
          className="ldr-env__flap ldr-env__flap--top"
          aria-hidden
          priority
        />
        <Image
          src="/demo/luxury-date-reveal/flap-bottom.png"
          alt=""
          width={1011}
          height={581}
          className="ldr-env__flap ldr-env__flap--bottom"
          aria-hidden
          priority
        />
        <Image
          src="/demo/luxury-date-reveal/flap-left.png"
          alt=""
          width={467}
          height={874}
          className="ldr-env__flap ldr-env__flap--left"
          aria-hidden
          priority
        />
        <Image
          src="/demo/luxury-date-reveal/flap-right.png"
          alt=""
          width={461}
          height={863}
          className="ldr-env__flap ldr-env__flap--right"
          aria-hidden
          priority
        />

        <div className={`ldr-env__seal ${isOpening ? "ldr-env__seal--break" : ""}`}>
          <Image
            src="/demo/luxury-date-reveal/seal.png"
            alt=""
            width={241}
            height={241}
            className="ldr-env__seal-img"
            priority
          />
        </div>
      </div>

      <div className={`ldr-gate__tap ${isOpening ? "ldr-gate__tap--hide" : ""}`}>
        <span className="ldr-gate__tap-label">{openHint}</span>
      </div>
    </div>
  );
}
