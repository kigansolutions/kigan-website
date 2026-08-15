import { Reveal } from "./Reveal";

const cards = [
  {
    tag: "Active",
    title: "Brand Studio",
    body: "Discovery, positioning, messaging, identity direction, and brand systems for businesses that need clearer market shape.",
    fit: "Good fit when the business is changing faster than the way it explains itself.",
    span: "md:col-span-7",
  },
  {
    tag: "Active",
    title: "Workflow Studio",
    body: "Review-gated AI workflows, scoped integrations, and agent systems built around the tools a business already uses.",
    fit: "Good fit when manual handoffs, repeated decisions, or scattered tools are slowing the work down.",
    span: "md:col-span-5",
  },
  {
    tag: "Emerging",
    title: "Growth Studio",
    body: "Content, lead generation, marketplace offers, newsletters, and sales support systems that turn learning into pipeline.",
    fit: "Good fit when useful thinking exists but is not yet becoming consistent demand.",
    span: "md:col-span-5",
  },
  {
    tag: "Shared",
    title: "Kigan Platform",
    body: "The memory, evidence, decisions, reusable tools, and operating context that let each Studio improve the next one.",
    fit: "Good fit when knowledge is spread across people, files, chats, and tools with no reliable centre.",
    span: "md:col-span-7",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="mb-14 border-y border-ink-4/40 py-6">
        <p className="mono-label text-[10px] text-green mb-5">Common starting points</p>
        <div className="grid gap-4 text-sm text-ink-2 md:grid-cols-4 md:gap-6">
          {[
            ["Unclear offer or brand direction", "Brand Studio"],
            ["Manual handoffs eating time", "Workflow Studio"],
            ["Useful content not creating pipeline", "Growth Studio"],
            ["Knowledge scattered across tools", "Platform"],
          ].map(([problem, destination]) => (
            <div key={problem}>
              <p className="leading-[1.55]">{problem}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-green">{destination}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="max-w-xl mb-14">
        <p className="mono-label text-[11px] text-green mb-4">Studios</p>
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          Focused Studios, one shared operating system.
        </h2>
        <p className="mt-5 text-ink-2 leading-[1.7] font-light">
          Kigan is built as a small AI-native services company: each Studio focuses on a business outcome, while the Platform carries the evidence and learning forward.
        </p>
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
            <p className="mt-5 border-t border-ink-4/30 pt-4 text-sm text-ink-2 leading-[1.6]">
              <span className="font-medium text-ink">{card.fit}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
