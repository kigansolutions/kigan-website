import { Reveal } from "./Reveal";

const cards = [
  {
    tag: "Orchestration",
    title: "Multi-agent systems",
    body: "I design agents that plan, delegate to each other, and check their own work before it reaches a person.",
  },
  {
    tag: "Integration",
    title: "Built into your stack",
    body: "Agents connect directly to the ERPs, CRMs, warehouses, and internal APIs you already run — no rip and replace.",
  },
  {
    tag: "Autonomy",
    title: "End-to-end workflows",
    body: "An agent that starts a task carries it through to completion, not just the parts that were easy to automate.",
  },
  {
    tag: "Oversight",
    title: "Guardrails by default",
    body: "Every agent ships with approval gates, audit trails, and a kill switch — autonomy your team can actually sign off on.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="max-w-xl mb-14">
        <p className="mono-label text-xs text-green mb-4">What I build</p>
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          Four ways I put agents to work.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {cards.map((card) => (
          <Reveal key={card.tag} className="lift border border-ink-4/50 bg-paper rounded-sm p-7 [box-shadow:var(--shadow-card)] hover:[box-shadow:var(--shadow-card-hover)]">
            <p className="mono-label text-[11px] text-green mb-4">{card.tag}</p>
            <h3 className="font-display font-semibold text-xl mb-3">{card.title}</h3>
            <p className="text-ink-2 leading-[1.7] font-light">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
