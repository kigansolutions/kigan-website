import { Reveal } from "./Reveal";

const steps = [
  {
    step: "01 · Discover",
    body: "I clarify the business outcome, the people involved, the evidence available, and the decisions that cannot be guessed.",
  },
  {
    step: "02 · Shape",
    body: "I choose the Studio path, define the system, and mark where AI can move quickly and where human approval stays required.",
  },
  {
    step: "03 · Prove",
    body: "I build a focused artifact or workflow, test it against real material, and keep claims tied to what the work actually shows.",
  },
  {
    step: "04 · Evolve",
    body: "I feed what worked back into the Platform so future Studio work starts with better context, tools, and judgment.",
  },
];

export function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-24">
      <Reveal className="max-w-xl mb-16">
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          A delivery model built around{" "}
          <span className="text-green font-semibold border-b-2 border-green/40 pb-0.5">earned trust</span>.
        </h2>
      </Reveal>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div className="hidden lg:block absolute top-[9px] left-0 right-0 h-px bg-ink-4/50" />

        {steps.map((s) => (
          <Reveal key={s.step} className="relative">
            <div className="relative z-10 w-[18px] h-[18px] rounded-full bg-green mb-6" />
            <p className="mono-label text-[11px] text-ink-3 mb-2">{s.step}</p>
            <p className="text-ink-2 leading-[1.7] font-light">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
