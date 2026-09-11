"use client";

import * as React from "react";
import { Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { loadAscf, type AscfData } from "@/lib/ascf";

type Props = {
  onClose: () => void;
};

export default function BadApplePlayer({ onClose }: Props) {
  const preRef = React.useRef<HTMLPreElement | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const dataRef = React.useRef<AscfData | null>(null);
  const rafRef = React.useRef<number>(0);
  const frameRef = React.useRef<number>(-1);

  const [phase, setPhase] = React.useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [progress, setProgress] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    loadAscf("/bad-apple/badapple.ascf.gz", (p) => {
      if (!cancelled) setProgress(p);
    })
      .then((data) => {
        if (cancelled) return;
        dataRef.current = data;
        const pre = preRef.current;
        if (pre && frameRef.current < 0) {
          // Show a recognizable poster frame until playback starts.
          const poster = Math.min(300, data.totalFrames - 1);
          pre.textContent = data.getFrame(poster);
          frameRef.current = poster;
        }
        setPhase("ready");
      })
      .catch(() => {
        if (!cancelled) setPhase("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  React.useEffect(() => {
    if (phase !== "ready") return;
    const audio = audioRef.current;
    const data = dataRef.current;
    if (!audio || !data) return;

    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      if (audio.paused) return;
      let i = Math.floor(audio.currentTime * data.fps);
      if (i >= data.totalFrames) i = data.totalFrames - 1;
      if (i !== frameRef.current) {
        frameRef.current = i;
        const pre = preRef.current;
        if (pre) pre.textContent = data.getFrame(i);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onStop = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onStop);
    audio.addEventListener("ended", onStop);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onStop);
      audio.removeEventListener("ended", onStop);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bad Apple ASCII player"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_0_80px_-15px_rgba(125,211,252,0.45)]">
          {/* title bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2">bad_apple.ascf</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-1 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* screen */}
          <div className="relative flex min-h-[240px] items-center justify-center bg-black py-4">
            <pre
              ref={preRef}
              aria-hidden="true"
              className="m-0 select-none overflow-hidden font-mono tracking-[-0.05em] text-[#e8e8e8]"
              style={{ fontSize: "min(1.9vw, 18px)", lineHeight: 1.2 }}
            />

            {/* scanlines */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
              }}
            />

            {phase === "loading" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 font-mono text-xs text-white/70">
                <span>
                  loading bad_apple.ascf… {Math.round(progress * 100)}%
                </span>
                <span className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full bg-[#7dd3fc] transition-[width] duration-200"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </span>
              </div>
            )}

            {phase === "error" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 px-4 text-center font-mono text-xs text-red-400">
                Couldn&apos;t load the animation.
              </div>
            )}

            {phase === "ready" && !playing && (
              <button
                type="button"
                onClick={toggle}
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/20"
                aria-label="Play"
              >
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 font-mono text-sm text-white backdrop-blur">
                  <Play className="size-4" /> play
                </span>
              </button>
            )}
          </div>

          {/* controls */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
            <button
              type="button"
              onClick={toggle}
              disabled={phase !== "ready"}
              className="flex items-center gap-2 rounded-md px-2 py-1 font-mono text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40"
            >
              {playing ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
              {playing ? "pause" : "play"}
            </button>

            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className="flex items-center gap-2 rounded-md px-2 py-1 font-mono text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
              {muted ? "muted" : "sound"}
            </button>
          </div>
        </div>

        <p className="mt-3 text-center font-mono text-[11px] text-white/40">
          ASCII rendering by{" "}
          <a
            href="https://github.com/YusufB5/ASCILINE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 underline underline-offset-2 hover:text-white"
          >
            ASCILINE
          </a>{" "}
          · fan tribute to Bad Apple!!
        </p>

        <audio
          ref={audioRef}
          src="/bad-apple/badapple.mp3"
          loop
          preload="auto"
          muted={muted}
        />
      </div>
    </div>
  );
}
