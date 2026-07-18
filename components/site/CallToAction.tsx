import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section id="contact" className="bg-paper-2 scroll-mt-24">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="mono-label text-xs text-green mb-4">Let&rsquo;s talk</p>
          <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight max-w-lg">
            Tell me what you&rsquo;d like to <em className="italic text-green font-normal">automate</em>.
          </h2>
          <p className="mt-5 text-ink-2 leading-[1.7] max-w-md font-light">
            A short call is usually enough to tell if an agent is the right fit for the workflow you have in mind.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
          <a href="mailto:enquiries@kigansolutions.co.za" className="btn-primary px-7 py-4 rounded-sm text-sm font-medium">
            Start a project
          </a>
          <a href="mailto:enquiries@kigansolutions.co.za" className="mono-label text-xs text-ink-2 hover:text-green transition-colors">
            enquiries@kigansolutions.co.za
          </a>
        </div>
      </Reveal>
    </section>
  );
}
