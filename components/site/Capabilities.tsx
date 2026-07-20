import { Reveal } from "./Reveal";

/* Hallmark · F1 Bento knobs: tiles=4, spans=irregular (7/5 · 5/7), accent=corner-only
 * previous: 4 equal sm:grid-cols-2 tiles, no size variation */

const cards = [
  {
    tag: "Orchestration",
    title: "Multi-agent systems",
    body: "I design agents that plan, delegate to each other, and check their own work before it reaches a person.",
    span: "md:col-span-7",
  },
  {
    tag: "Integration",
    title: "Built into your stack",
    body: "Agents connect directly to the ERPs, CRMs, and internal APIs you already run — no rip and replace.",
    span: "md:col-span-5",
  },
  {
    tag: "Autonomy",
    title: "End-to-end workflows",
    body: "An agent that starts a task carries it through to completion, not just the parts that were easy to automate.",
    span: "md:col-span-5",
  },
  {
    tag: "Oversight",
    title: "Guardrails by default",
    body: "Every agent ships with approval gates, audit trails, and a kill switch — autonomy your team can actually sign off on.",
    span: "md:col-span-7",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="max-w-xl mb-14">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          Four ways I put agents to work.
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
