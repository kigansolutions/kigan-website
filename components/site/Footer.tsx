import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-4">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/kigan-mark-on-ink.png"
            alt="Kigan"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="font-display font-semibold text-paper text-lg">KIGAN</span>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 mono-label text-xs">
          <a href="#capabilities" className="hover:text-paper transition-colors">Capabilities</a>
          <a href="#process" className="hover:text-paper transition-colors">Process</a>
          <a href="#manifesto" className="hover:text-paper transition-colors">Manifesto</a>
          <a href="#contact" className="hover:text-paper transition-colors">Contact</a>
        </nav>
        <p className="mono-label text-xs md:text-right">
          © 2026 Kigan Solutions.<br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
