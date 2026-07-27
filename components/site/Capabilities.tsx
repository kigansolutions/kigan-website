import { Reveal } from "./Reveal";

const cards = [
  {
    tag: "Orchestration",
    title: "Multi-agent systems",
    body: "I design agent systems that plan, delegate, and check their work before important actions reach a person.",
    span: "md:col-span-7",
  },
  {
    tag: "Integration",
    title: "Built around your stack",
    body: "I design scoped integrations around the tools and data your team already uses — without a rip and replace.",
    span: "md:col-span-5",
  },
  {
    tag: "Progression",
    title: "From assisted to autonomous",
    body: "Start with a useful, review-gated workflow. Increase autonomy only when the controls and evidence support it.",
    span: "md:col-span-5",
  },
  {
    tag: "Oversight",
    title: "Guardrails by default",
    body: "Approval gates, audit trails, and a clear stop path keep people accountable as automation grows.",
    span: "md:col-span-7",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="max-w-xl mb-14">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          Four ways I put AI to work.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-5 md:gap-6">
        {cards.map((card) => (
          <Reveal
            key={card.tag}
            className={`lift border border-ink-4/50 bg-paper rounded-sm p-7 md:p-8 [box-shadow:var(--shadow-card)] hover:[box-shadow:var(--shadow-card-hover)] ${card.span}`}
          >
            <p className="mono-label text-[11px] text-green mb-4">{card.tag}</p>
            <h3 className="font-display font-semibold text-xl mb-3">{card.title}</h3>
            <p className="text-ink-2 leading-[1.7] font-light">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
