"use client";

import * as React from "react";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

export default function InteractiveGrid({ className }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = React.useRef(resolvedTheme);

  React.useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const CELL = 30;
    const STEP = 14;
    const RADIUS = 165;
    const STRENGTH = 28;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;

    const pointer = { x: -9999, y: -9999 };
    const cursor = { x: -9999, y: -9999 };
    let amp = 0;
    let ampTarget = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };

    const displaced = (x: number, y: number, t: number): [number, number] => {
      let ox = 0;
      let oy = 0;

      if (amp > 0.001) {
        const dx = x - cursor.x;
        const dy = y - cursor.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS * RADIUS) {
          const d = Math.sqrt(d2) || 1;
          let e = 1 - d / RADIUS;
          e = e * e * (3 - 2 * e);
          const f = e * STRENGTH * amp;
          ox += (dx / d) * f;
          oy += (dy / d) * f;
        }
      }

      if (!reduce) {
        const w =
          Math.sin((x + t * 0.06) * 0.012) *
          Math.cos((y + t * 0.05) * 0.014) *
          2.4;
        oy += w;
      }

      return [x + ox, y + oy];
    };

    function draw(t: number) {
      cursor.x += (pointer.x - cursor.x) * 0.14;
      cursor.y += (pointer.y - cursor.y) * 0.14;
      amp += (ampTarget - amp) * 0.06;

      const dark = themeRef.current === "dark";
      const stroke = dark
        ? "rgba(255,255,255,0.13)"
        : "rgba(15,23,42,0.12)";

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = stroke;

      const maxX = width + CELL;
      const maxY = height + CELL;

      for (let x = 0; x <= maxX; x += CELL) {
        ctx.beginPath();
        for (let y = -CELL; y <= maxY; y += STEP) {
          const [px, py] = displaced(x, y, t);
          if (y === -CELL) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      for (let y = 0; y <= maxY; y += CELL) {
        ctx.beginPath();
        for (let x = -CELL; x <= maxX; x += STEP) {
          const [px, py] = displaced(x, y, t);
          if (x === -CELL) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      ampTarget = 1;
    };

    const onLeave = () => {
      ampTarget = 0;
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduce) {
      raf = requestAnimationFrame(loop);
    } else {
      draw(0);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
