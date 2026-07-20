import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section id="contact" className="bg-paper-2 scroll-mt-24">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight max-w-lg">
          Tell me what you&rsquo;d like to{" "}
          <span className="text-green font-semibold border-b-2 border-green/40 pb-0.5">automate</span>.
        </h2>
        <p className="mt-5 text-ink-2 leading-[1.7] max-w-md font-light">
          A short call is usually enough to tell if an agent is the right fit for the workflow you have in mind.
        </p>
      </Reveal>
    </section>
  );
}
