"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DAMP_RATE = 6;
const SEEK_EPSILON = 0.01;

const CHAPTERS = [
  {
    eyebrow: "Agentic AI Solutions",
    heading: "Software that finishes the task — not just the sentence.",
    tone: "paper",
  },
  {
    eyebrow: "How it works",
    heading: "Agents that read, decide, and act inside the systems you already run.",
    tone: "sage",
  },
] as const;

export function CinematicHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const durationRef = useRef(0);
  const targetProgressRef = useRef(0);
  const playheadRef = useRef(0);
  const seekingRef = useRef(false);
  const pendingSeekRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);

  const [ready, setReady] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!video || !section || !stage) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0;
      setReady(true);
    };
    const onProgress = () => {
      if (video.buffered.length && video.duration) {
        setBuffered(Math.min(1, video.buffered.end(video.buffered.length - 1) / video.duration));
      }
    };
    const onSeeking = () => {
      seekingRef.current = true;
    };
    const onSeeked = () => {
      seekingRef.current = false;
      if (pendingSeekRef.current !== null) {
        const next = pendingSeekRef.current;
        pendingSeekRef.current = null;
        if (Math.abs(next - video.currentTime) > SEEK_EPSILON) video.currentTime = next;
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("progress", onProgress);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);

    // Metadata can already be available by the time this effect runs (fast
    // local server, cached response) — the event won't fire again, so check
    // readyState directly rather than only waiting on the event.
    if (video.readyState >= 1) onLoadedMetadata();
    onProgress();

    const ctx = gsap.context(() => {
      const progressTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          targetProgressRef.current = self.progress;
          const idx = self.progress > 0.66 ? 2 : self.progress > 0.33 ? 1 : 0;
          setActiveChapter((prev) => (prev === idx ? prev : idx));
        },
      });

      const tick = (now: number) => {
        rafIdRef.current = requestAnimationFrame(tick);
        const duration = durationRef.current;
        if (!duration) return;
        const targetTime = targetProgressRef.current * duration;

        if (reducedMotion) {
          playheadRef.current = targetTime;
        } else {
          const last = lastFrameRef.current ?? now;
          const dt = Math.min(0.1, (now - last) / 1000);
          lastFrameRef.current = now;
          const factor = 1 - Math.exp(-DAMP_RATE * dt);
          playheadRef.current += (targetTime - playheadRef.current) * factor;
        }

        const desired = playheadRef.current;
        const delta = desired - video.currentTime;
        if (Math.abs(delta) < SEEK_EPSILON) return;

        if (seekingRef.current) {
          pendingSeekRef.current = desired;
        } else {
          video.currentTime = desired;
        }
      };
      rafIdRef.current = requestAnimationFrame(tick);

      return () => {
        progressTrigger.kill();
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }, section);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return (
    <div id="top" ref={sectionRef} className="relative" style={{ height: "340vh" }}>
      <div ref={stageRef} className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          src="/media/signal-ordered.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        {!ready && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink">
            <div className="mono-label text-[10px] text-sage">Loading</div>
            <div className="h-px w-32 overflow-hidden bg-paper/15">
              <div
                className="h-full bg-sage transition-[width] duration-200"
                style={{ width: `${Math.round(buffered * 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-8 pb-20 md:px-16 md:pb-28">
          {CHAPTERS.map((c, i) => (
            <div
              key={c.heading}
              className="absolute left-8 right-8 bottom-20 max-w-2xl transition-[opacity,transform] duration-700 ease-out md:left-16 md:bottom-28"
              style={{
                opacity: activeChapter === i ? 1 : 0,
                transform: activeChapter === i ? "translateY(0)" : "translateY(14px)",
                pointerEvents: activeChapter === i ? "auto" : "none",
              }}
            >
              <p className="mono-label mb-4 text-xs text-sage">{c.eyebrow}</p>
              <h1
                className={`font-sans text-3xl font-extralight leading-tight tracking-tight md:text-5xl ${
                  c.tone === "sage" ? "text-sage" : "text-paper"
                }`}
              >
                {c.heading}
              </h1>
            </div>
          ))}

          <div
            className="absolute left-8 right-8 bottom-20 max-w-2xl transition-[opacity,transform] duration-700 ease-out md:left-16 md:bottom-28"
            style={{
              opacity: activeChapter === CHAPTERS.length ? 1 : 0,
              transform: activeChapter === CHAPTERS.length ? "translateY(0)" : "translateY(14px)",
              pointerEvents: activeChapter === CHAPTERS.length ? "auto" : "none",
            }}
          >
            <p className="font-display text-2xl italic leading-snug text-paper md:text-3xl">
              &ldquo;Most software still waits to be asked.
              <br className="hidden md:block" /> I build the kind that{" "}
              <span className="not-italic font-medium text-sage">doesn&rsquo;t wait.</span>&rdquo;
            </p>
            <p className="mono-label mt-6 text-[11px] text-ink-4">
              Multi-agent orchestration · Real system integration · Guardrails by default
            </p>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-6 flex justify-center transition-opacity duration-500"
          style={{ opacity: activeChapter === 0 ? 1 : 0 }}
          aria-hidden="true"
        >
          <div className="mono-label flex flex-col items-center gap-2 text-[10px] text-paper/50">
            Scroll
            <span className="h-6 w-px bg-paper/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
