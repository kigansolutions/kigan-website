import { Reveal } from "./Reveal";

const proof = [
  {
    state: "Available to inspect",
    title: "Brand system",
    body: "The public site, logo system, colour tokens, typography rules, and reusable brand references are working artifacts, not a future promise.",
  },
  {
    state: "In active use",
    title: "Client discovery framework",
    body: "Discovery, strategy, messaging, quality checks, and client handoff patterns are being shaped through real work and can be explained on request.",
  },
  {
    state: "Testing in public view",
    title: "AI Platform spike",
    body: "The platform work is being tested through evidence, decisions, workflows, and architecture spikes before broader claims are made.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="mono-label text-[11px] text-green mb-4">Proof in progress</p>
          <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          Show the artifacts before claiming the category.
          </h2>
        </div>
        <p className="text-ink-2 leading-[1.75] font-light text-base md:text-lg">
          Kigan does not need inflated case studies to sound credible. It needs visible artifacts, careful claims, and a clear distinction between what can be inspected now, what is in active use, and what is still being tested.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {proof.map((item) => (
          <Reveal key={item.title} className="border-t border-ink-4/50 pt-6">
            <p className="mono-label text-[10px] text-green mb-5">{item.state}</p>
            <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
            <p className="text-ink-2 leading-[1.7] font-light">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
