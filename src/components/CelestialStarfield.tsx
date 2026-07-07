"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  twinkle: number;
  twinkleSpeed: number;
}

interface CelestialStarfieldProps {
  className?: string;
  warp?: number;
  density?: number;
}

export function CelestialStarfield({
  className = "",
  warp = 0,
  density = 1,
}: CelestialStarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const warpRef = useRef(warp);

  useEffect(() => {
    warpRef.current = warp;
  }, [warp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = Math.floor(180 * density);

    const initStars = () => {
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        size: Math.random() * 1.8 + 0.4,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth ?? window.innerWidth;
      canvas.height = parent?.clientHeight ?? window.innerHeight;
      if (starsRef.current.length === 0) initStars();
    };

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let raf = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const currentWarp = warpRef.current;

      ctx.fillStyle = currentWarp > 0.1
        ? `rgba(8, 12, 28, ${0.08 + currentWarp * 0.04})`
        : "rgba(8, 12, 28, 0.35)";
      ctx.fillRect(0, 0, w, h);

      starsRef.current.forEach((star) => {
        star.twinkle += star.twinkleSpeed;
        const twinkleAlpha = 0.35 + Math.sin(star.twinkle) * 0.35;

        if (currentWarp > 0.05) {
          const dx = star.x - cx;
          const dy = star.y - cy;
          const speed = 2 + currentWarp * 18;
          star.x += dx * 0.02 * speed;
          star.y += dy * 0.02 * speed;

          if (star.x < -20 || star.x > w + 20 || star.y < -20 || star.y > h + 20) {
            star.x = cx + (Math.random() - 0.5) * 40;
            star.y = cy + (Math.random() - 0.5) * 40;
          }

          const streakLen = currentWarp * 12;
          const angle = Math.atan2(dy, dx);
          ctx.strokeStyle = `rgba(232, 200, 114, ${twinkleAlpha * 0.7})`;
          ctx.lineWidth = star.size;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(
            star.x - Math.cos(angle) * streakLen,
            star.y - Math.sin(angle) * streakLen,
          );
          ctx.stroke();
        } else {
          const gold = star.z > 0.7;
          ctx.fillStyle = gold
            ? `rgba(232, 200, 114, ${twinkleAlpha})`
            : `rgba(220, 230, 255, ${twinkleAlpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (currentWarp < 0.3 && frame % 120 === 0) {
        ctx.strokeStyle = "rgba(232, 200, 114, 0.06)";
        ctx.lineWidth = 0.5;
        for (let i = 0; i < 4; i++) {
          const s1 = starsRef.current[Math.floor(Math.random() * count)];
          const s2 = starsRef.current[Math.floor(Math.random() * count)];
          if (s1 && s2) {
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      frame++;
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
