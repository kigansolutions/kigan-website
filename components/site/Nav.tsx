"use client";

import { useState } from "react";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink-4/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Image
            src="/logo/kigan-mark-transparent.png"
            alt="Kigan mark"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-display font-semibold text-lg tracking-tight">
            KIGAN
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 mono-label text-xs text-ink-2">
          <a href="#capabilities" className="nav-link hover:text-ink">
            Capabilities
          </a>
          <a href="#process" className="nav-link hover:text-ink">
            Process
          </a>
          <a href="#manifesto" className="nav-link hover:text-ink">
            Manifesto
          </a>
          <a href="#contact" className="nav-link hover:text-ink">
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
          <span className="w-6 h-px bg-ink" />
          <span className="w-6 h-px bg-ink" />
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
