"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function check() {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-ink-4/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between transition-[height] duration-500 ${
          scrolled ? "h-20" : "h-36 md:h-40"
        }`}
      >
        <a href="#top" className="flex items-center gap-4 group">
          <Image
            src="/logo/kigan-mark-transparent.png"
            alt="Kigan mark"
            width={112}
            height={112}
            priority
            className={`transition-[height,width,filter] duration-500 ${
              scrolled ? "h-8 w-8" : "h-24 w-24 brightness-0 invert"
            }`}
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? "text-lg text-ink" : "text-2xl md:text-3xl text-paper"
              }`}
            >
              KIGAN
            </span>
            <span
              className={`mono-label transition-colors duration-500 ${
                scrolled ? "text-[9px] text-ink-3 mt-0.5" : "text-[10px] md:text-xs text-sage mt-1.5"
              }`}
            >
              Agentic AI Solutions
            </span>
          </span>
        </a>
        <nav
          className={`hidden md:flex items-center gap-9 mono-label text-xs transition-colors duration-500 ${
            scrolled ? "text-ink-2" : "text-paper/80"
          }`}
        >
          <a href="#capabilities" className={`nav-link ${scrolled ? "hover:text-ink" : "hover:text-paper"}`}>
            Capabilities
          </a>
          <a href="#process" className={`nav-link ${scrolled ? "hover:text-ink" : "hover:text-paper"}`}>
            Process
          </a>
          <a href="#manifesto" className={`nav-link ${scrolled ? "hover:text-ink" : "hover:text-paper"}`}>
            Manifesto
          </a>
          <a href="#contact" className={`nav-link ${scrolled ? "hover:text-ink" : "hover:text-paper"}`}>
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary px-5 py-2.5 text-sm font-medium rounded-sm"
        >
          Start a project
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-px transition-colors duration-500 ${scrolled ? "bg-ink" : "bg-paper"}`} />
          <span className={`w-6 h-px transition-colors duration-500 ${scrolled ? "bg-ink" : "bg-paper"}`} />
        </button>
      </div>
      <div
        className="md:hidden overflow-hidden border-t border-ink-4/40 bg-paper transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: open ? "260px" : "0px", opacity: open ? 1 : 0 }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 mono-label text-xs text-ink-2">
          <a href="#capabilities" onClick={() => setOpen(false)}>
            Capabilities
          </a>
          <a href="#process" onClick={() => setOpen(false)}>
            Process
          </a>
          <a href="#manifesto" onClick={() => setOpen(false)}>
            Manifesto
          </a>
          <a href="#contact" className="text-green" onClick={() => setOpen(false)}>
            Start a project →
          </a>
        </nav>
      </div>
    </header>
  );
}
