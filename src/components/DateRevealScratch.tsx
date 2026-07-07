"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TILES = [
  { id: "day", value: "14", label: "Day", isMonth: false },
  { id: "month", value: "September", label: "Month", isMonth: true },
  { id: "year", value: "2025", label: "Year", isMonth: false },
] as const;

function paintChampagne(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const base = ctx.createLinearGradient(0, 0, w, h);
  base.addColorStop(0, "#dce8ee");
  base.addColorStop(0.25, "#d2dfe6");
  base.addColorStop(0.55, "#c8d7df");
  base.addColorStop(0.8, "#d0dde5");
  base.addColorStop(1, "#c4d3dc");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, w, h);

  const hl = ctx.createRadialGradient(w * 0.28, h * 0.24, 0, w * 0.28, h * 0.24, w * 0.65);
  hl.addColorStop(0, "rgba(240,248,252,0.65)");
  hl.addColorStop(0.45, "rgba(230,242,248,0.22)");
  hl.addColorStop(1, "rgba(230,242,248,0)");
  ctx.fillStyle = hl;
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.1;
  for (let i = -h; i < w + h; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + h * 0.75, h);
    ctx.strokeStyle = "#eef4f8";
    ctx.lineWidth = 9;
    ctx.stroke();
  }
  ctx.globalAlpha = 0.05;
  for (let i = -h + 10; i < w + h; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + h * 0.75, h);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  const dots: [number, number][] = [
    [w * 0.14, h * 0.18],
    [w * 0.5, h * 0.1],
    [w * 0.84, h * 0.22],
    [w * 0.22, h * 0.78],
    [w * 0.72, h * 0.82],
    [w * 0.88, h * 0.58],
    [w * 0.08, h * 0.52],
    [w * 0.62, h * 0.42],
    [w * 0.38, h * 0.62],
  ];
  dots.forEach(([dx, dy]) => {
    const rg = ctx.createRadialGradient(dx, dy, 0, dx, dy, 6);
    rg.addColorStop(0, "rgba(220,238,248,0.95)");
    rg.addColorStop(0.5, "rgba(180,210,228,0.45)");
    rg.addColorStop(1, "rgba(180,210,228,0)");
    ctx.fillStyle = rg;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(dx, dy, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(220,238,248,0.45)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(0.75, 0.75, w - 1.5, h - 1.5);
}

function runConfetti() {
  const cc = document.getElementById("ldr-confetti") as HTMLCanvasElement | null;
  if (!cc) return;
  const cx = cc.getContext("2d");
  if (!cx) return;

  cc.width = window.innerWidth;
  cc.height = window.innerHeight;

  const pal = [
    "#c8aa78",
    "#dfc48e",
    "#ede5cc",
    "#f5ede0",
    "#1a1916",
    "#d4c090",
    "rgba(200,170,120,0.55)",
    "rgba(245,237,220,0.65)",
    "#b89050",
    "#e8d8a8",
  ];

  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * cc.width,
    y: -15 - Math.random() * 160,
    vy: Math.random() * 1.1 + 0.5,
    vx: (Math.random() - 0.5) * 0.9,
    w: Math.random() * 10 + 2.5,
    h: Math.random() * 3.5 + 1.2,
    rot: Math.random() * Math.PI * 2,
    rv: (Math.random() - 0.5) * 0.055,
    color: pal[Math.floor(Math.random() * pal.length)],
    alpha: Math.random() * 0.6 + 0.38,
    drift: Math.random() * Math.PI * 2,
    ds: Math.random() * 0.016 + 0.007,
    shape: Math.random() > 0.45 ? 0 : 1,
  }));

  let f = 0;
  const max = 320;

  const draw = () => {
    cx.clearRect(0, 0, cc.width, cc.height);
    const fade = Math.max(0, 1 - f / max);
    pieces.forEach((p) => {
      cx.save();
      cx.globalAlpha = p.alpha * fade;
      cx.translate(p.x, p.y);
      cx.rotate(p.rot);
      cx.fillStyle = p.color;
      if (p.shape === 0) cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      else {
        cx.beginPath();
        cx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        cx.fill();
      }
      cx.restore();
      p.y += p.vy;
      p.x += p.vx + Math.sin(p.drift) * 0.4;
      p.rot += p.rv;
      p.drift += p.ds;
      if (p.y > cc.height + 20) {
        p.y = -15;
        p.x = Math.random() * cc.width;
      }
    });
    f++;
    if (f < max) requestAnimationFrame(draw);
    else cx.clearRect(0, 0, cc.width, cc.height);
  };
  draw();
}

interface DateRevealScratchProps {
  invitedText: string;
  labels: { day: string; month: string; year: string };
}

export function DateRevealScratch({ invitedText, labels }: DateRevealScratchProps) {
  const [revealed, setRevealed] = useState(false);
  const [flash, setFlash] = useState(false);
  const doneCountRef = useRef(0);
  const tileRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const canvasRefs = useRef<Record<string, HTMLCanvasElement | null>>({});
  const doneRef = useRef<Record<string, boolean>>({});

  const onAllDone = useCallback(() => {
    setRevealed(true);
    setFlash(true);
    runConfetti();
    setTimeout(() => setFlash(false), 1500);
  }, []);

  const finishPanel = useCallback(
    (id: string) => {
      if (doneRef.current[id]) return;
      doneRef.current[id] = true;
      const cvs = canvasRefs.current[id];
      const ctx = cvs?.getContext("2d");
      if (!cvs || !ctx) return;

      let a = 1;
      const fade = setInterval(() => {
        a -= 0.055;
        if (a <= 0) {
          clearInterval(fade);
          cvs.style.display = "none";
        } else {
          ctx.clearRect(0, 0, cvs.width, cvs.height);
          ctx.globalAlpha = Math.max(0, a);
          paintChampagne(ctx, cvs.width, cvs.height);
          ctx.globalAlpha = 1;
        }
      }, 22);

      doneCountRef.current += 1;
      if (doneCountRef.current === 3) {
        setTimeout(onAllDone, 550);
      }
    },
    [onAllDone],
  );

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    TILES.forEach(({ id }) => {
      const tile = tileRefs.current[id];
      const cvs = canvasRefs.current[id];
      if (!tile || !cvs) return;
      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      let isDown = false;

      const resize = () => {
        const r = tile.getBoundingClientRect();
        cvs.width = Math.round(r.width);
        cvs.height = Math.round(r.height);
        if (!doneRef.current[id]) paintChampagne(ctx, cvs.width, cvs.height);
      };

      resize();
      window.addEventListener("resize", resize);
      const t1 = setTimeout(resize, 200);
      const t2 = setTimeout(resize, 600);

      const canvasXY = (clientX: number, clientY: number) => {
        const r = cvs.getBoundingClientRect();
        return {
          x: (clientX - r.left) * (cvs.width / r.width),
          y: (clientY - r.top) * (cvs.height / r.height),
        };
      };

      const scratchAt = (x: number, y: number) => {
        if (doneRef.current[id]) return;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 36, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        if (Math.random() > 0.12) return;
        const d = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
        let vis = 0;
        let tot = 0;
        for (let i = 3; i < d.length; i += 12) {
          tot++;
          if (d[i] > 10) vis++;
        }
        if ((tot - vis) / tot > 0.4) finishPanel(id);
      };

      const onDown = (e: MouseEvent) => {
        isDown = true;
        const p = canvasXY(e.clientX, e.clientY);
        scratchAt(p.x, p.y);
      };
      const onMove = (e: MouseEvent) => {
        if (!isDown) return;
        const p = canvasXY(e.clientX, e.clientY);
        scratchAt(p.x, p.y);
      };
      const onUp = () => {
        isDown = false;
      };
      const onTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        isDown = true;
        const t = e.touches[0];
        const p = canvasXY(t.clientX, t.clientY);
        scratchAt(p.x, p.y);
      };
      const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        if (!isDown) return;
        const t = e.touches[0];
        const p = canvasXY(t.clientX, t.clientY);
        scratchAt(p.x, p.y);
      };
      const onTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        isDown = false;
      };

      cvs.addEventListener("mousedown", onDown);
      cvs.addEventListener("mousemove", onMove);
      cvs.addEventListener("mouseup", onUp);
      cvs.addEventListener("mouseleave", onUp);
      cvs.addEventListener("touchstart", onTouchStart, { passive: false });
      cvs.addEventListener("touchmove", onTouchMove, { passive: false });
      cvs.addEventListener("touchend", onTouchEnd, { passive: false });

      cleanups.push(() => {
        window.removeEventListener("resize", resize);
        clearTimeout(t1);
        clearTimeout(t2);
        cvs.removeEventListener("mousedown", onDown);
        cvs.removeEventListener("mousemove", onMove);
        cvs.removeEventListener("mouseup", onUp);
        cvs.removeEventListener("mouseleave", onUp);
        cvs.removeEventListener("touchstart", onTouchStart);
        cvs.removeEventListener("touchmove", onTouchMove);
        cvs.removeEventListener("touchend", onTouchEnd);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [finishPanel]);

  useEffect(() => {
    const onResize = () => {
      const cc = document.getElementById("ldr-confetti") as HTMLCanvasElement | null;
      if (cc) {
        cc.width = window.innerWidth;
        cc.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const labelMap = { day: labels.day, month: labels.month, year: labels.year };

  return (
    <>
      <canvas id="ldr-confetti" className="ldr-scratch__confetti" aria-hidden />
      <div className={`ldr-scratch__flash ${flash ? "ldr-scratch__flash--go" : ""}`} aria-hidden />

      <div className="ldr-scratch">
        <div className="ldr-scratch__panels">
          {TILES.map((tile) => (
            <div key={tile.id} className="ldr-scratch__panel">
              <div
                className="ldr-scratch__tile"
                ref={(el) => {
                  tileRefs.current[tile.id] = el;
                }}
              >
                <div className="ldr-scratch__tile-bg">
                  <span
                    className={`ldr-scratch__num rufina-font ${tile.isMonth ? "ldr-scratch__num--month" : ""}`}
                  >
                    {tile.value}
                  </span>
                </div>
                <canvas
                  className="ldr-scratch__canvas"
                  ref={(el) => {
                    canvasRefs.current[tile.id] = el;
                  }}
                />
              </div>
              <div className="ldr-scratch__label rufina-font">{labelMap[tile.id]}</div>
            </div>
          ))}
        </div>
        <p className={`ldr-scratch__invited imperial-font ${revealed ? "ldr-scratch__invited--show" : ""}`}>
          {invitedText}
        </p>
      </div>
    </>
  );
}
