import Image from "next/image";
import { Mail } from "lucide-react";
import { PixelField } from "./PixelField";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ink-4 overflow-hidden border-t border-ink-4/20">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <PixelField />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-ink-4/20">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/kigan-mark-transparent.png"
                alt="Kigan"
                width={36}
                height={36}
                className="h-9 w-9 brightness-0 invert"
              />
              <span className="font-display font-semibold text-paper text-lg">KIGAN</span>
            </div>
            <p className="text-sm text-ink-3 leading-[1.7] max-w-xs font-light">
              Agentic AI solutions — built and operated by one person, not an agency.
            </p>
            <a
              href="mailto:enquiries@kigansolutions.co.za"
              aria-label="Email Kigan"
              className="inline-flex items-center justify-center w-9 h-9 rounded-sm border border-ink-4/30 hover:border-sage hover:bg-sage/10 transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>

          <div>
            <p className="mono-label text-[11px] text-ink-3 mb-3">Site</p>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#capabilities" className="hover:text-paper transition-colors">Capabilities</a>
              <a href="#process" className="hover:text-paper transition-colors">Process</a>
              <a href="#manifesto" className="hover:text-paper transition-colors">Manifesto</a>
            </nav>
          </div>

          <div>
            <p className="mono-label text-[11px] text-ink-3 mb-3">Get in touch</p>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#contact" className="hover:text-paper transition-colors">Contact</a>
              <a
                href="mailto:enquiries@kigansolutions.co.za"
                className="hover:text-paper transition-colors break-all"
              >
                enquiries@kigansolutions.co.za
              </a>
            </nav>
          </div>
        </div>

        <p className="mono-label text-[11px] text-ink-3 text-center pt-8">
          © 2026 Kigan Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
