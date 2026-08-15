import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section id="contact" className="relative bg-paper-2 scroll-mt-24 overflow-hidden">
      <Reveal className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight max-w-lg">
          Bring me the problem worth{" "}
          <span className="text-green font-semibold border-b-2 border-green/40 pb-0.5">solving</span>.
        </h2>
        <p className="mt-5 text-ink-2 leading-[1.7] max-w-md font-light">
          A short conversation is usually enough to tell whether this belongs in Brand Studio, Workflow Studio, Growth Studio, or nowhere yet.
        </p>
        <p className="mt-3 text-sm text-ink-2/80 leading-[1.6] max-w-md">
          Send the messy version. I&apos;ll help shape the question before we decide what to build.
        </p>
        <a
          href="mailto:enquiries@kigansolutions.co.za"
          className="btn-primary mt-8 inline-flex px-6 py-3 text-sm font-medium rounded-full"
        >
          Email me directly
          <ArrowRight className="btn-arrow" size={15} strokeWidth={2.25} />
        </a>
      </Reveal>
    </section>
  );
}
