"use client";

/* Hallmark · nav: N5 Floating pill · knobs: width=max~720px, backdrop=blur+saturate, anchor=top-centred
 * previous nav: informal N1a shape (full-width sticky bar, 4 inline links, CTA hard-right) */

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    // Threshold tracks the hero's own height (it's a tall pinned section, not
    // one viewport) so the nav stays transparent-on-dark for the full cinematic
    // hero and only goes solid once the paper-background sections begin.
    function check() {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight - window.innerHeight * 0.6 : 40;
      setSolid(window.scrollY > threshold);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <div
        className={`w-full max-w-3xl flex items-center justify-between gap-4 rounded-full border backdrop-blur-md px-4 md:px-6 py-2.5 transition-[background-color,border-color,box-shadow] duration-500 ${
          solid
            ? "bg-paper/90 border-ink-4/40 [box-shadow:var(--shadow-card)]"
            : "bg-ink/35 border-paper/15"
        }`}
      >
        <a href="#top" className="flex items-center gap-1.5 shrink-0">
          {/* cropped ~22% off the left — the source mark's dissolve-pixel edge reads
              as dead space at this size; the crop keeps the K legible without it.
              The bleed-in animation lives on this wrapper, not the <Image>, so it
              doesn't fight the image's own scroll-driven invert filter transition. */}
          <div
            className="relative h-7 w-7 overflow-hidden shrink-0 opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "0.1s" }}
          >
            <Image
              src="/logo/kigan-mark-transparent.png"
              alt="Kigan mark"
              width={36}
              height={34}
              priority
              className={`absolute -left-2 -top-[3px] h-[34px] w-[36px] max-w-none transition-[filter] duration-500 ${
                solid ? "" : "brightness-0 invert"
              }`}
            />
          </div>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display font-semibold text-sm tracking-tight transition-colors duration-500 ${
                solid ? "text-ink" : "text-paper"
              }`}
            >
              KIGAN
            </span>
            <span
              className={`mono-label text-[8px] mt-0.5 transition-colors duration-500 ${
                solid ? "text-ink-3" : "text-sage"
              }`}
            >
              Agentic AI Solutions
            </span>
          </span>
        </a>

        <nav
          className={`hidden md:flex items-center gap-6 mono-label text-[11px] transition-colors duration-500 ${
            solid ? "text-ink-2" : "text-paper/80"
          }`}
        >
          <a href="#capabilities" className={`nav-link ${solid ? "hover:text-ink" : "hover:text-paper"}`}>
            Capabilities
          </a>
          <a href="#process" className={`nav-link ${solid ? "hover:text-ink" : "hover:text-paper"}`}>
            Process
          </a>
          <a href="#manifesto" className={`nav-link ${solid ? "hover:text-ink" : "hover:text-paper"}`}>
            Manifesto
          </a>
        </nav>

        <a
          href="mailto:enquiries@kigansolutions.co.za"
          className="hidden md:inline-flex btn-primary px-4 py-2 text-xs font-medium rounded-full"
        >
          Start a project
          <ArrowRight className="btn-arrow" size={13} strokeWidth={2.25} />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-5 h-px transition-colors duration-500 ${solid ? "bg-ink" : "bg-paper"}`} />
          <span className={`w-5 h-px transition-colors duration-500 ${solid ? "bg-ink" : "bg-paper"}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 rounded-2xl border border-ink-4/30 bg-paper [box-shadow:var(--shadow-float)] overflow-hidden">
          <nav className="flex flex-col px-6 py-5 gap-4 mono-label text-xs text-ink-2">
            <a href="#capabilities" onClick={() => setOpen(false)}>
              Capabilities
            </a>
            <a href="#process" onClick={() => setOpen(false)}>
              Process
            </a>
            <a href="#manifesto" onClick={() => setOpen(false)}>
              Manifesto
            </a>
            <a href="mailto:enquiries@kigansolutions.co.za" className="text-green" onClick={() => setOpen(false)}>
              Start a project →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
