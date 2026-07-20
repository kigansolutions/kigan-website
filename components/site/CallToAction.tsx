import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section id="contact" className="relative bg-paper-2 scroll-mt-24 overflow-hidden">
      <Reveal className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight max-w-lg">
          Tell me what you&rsquo;d like to{" "}
          <span className="text-green font-semibold border-b-2 border-green/40 pb-0.5">automate</span>.
        </h2>
        <p className="mt-5 text-ink-2 leading-[1.7] max-w-md font-light">
          A short call is usually enough to tell if an agent is the right fit for the workflow you have in mind.
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
