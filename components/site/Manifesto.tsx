import { Reveal } from "./Reveal";
import { PixelField } from "./PixelField";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
      <div className="quote-bg opacity-[0.06]">
        <PixelField />
      </div>
      <Reveal className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-display italic font-normal text-[1.75rem] md:text-4xl leading-[1.4] tracking-tight">
          &ldquo;Most software still waits to be asked.
          <br className="hidden md:block" /> I build the kind that{" "}
          <span className="text-sage not-italic font-medium">doesn&rsquo;t wait.</span>&rdquo;
        </p>
        <p className="mono-label text-xs text-ink-4 mt-8">— Kigan, on agentic AI</p>
      </Reveal>
    </section>
  );
}
