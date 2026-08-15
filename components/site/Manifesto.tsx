import { Reveal } from "./Reveal";
import { PixelField } from "./PixelField";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden scroll-mt-24">
      <div className="quote-bg opacity-[0.06]">
        <PixelField />
      </div>
      <Reveal className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="font-display italic font-normal text-[1.75rem] md:text-4xl leading-[1.4] tracking-tight">
          &ldquo;Agents prepare. Systems enforce.
          <br className="hidden md:block" /> Humans approve the decisions that{" "}
          <span className="text-sage not-italic font-medium">cannot be delegated.</span>&rdquo;
        </p>
        <p className="mono-label text-xs text-ink-4 mt-8">Kigan operating principle</p>
      </Reveal>
    </section>
  );
}
