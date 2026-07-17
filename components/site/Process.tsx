import { Reveal } from "./Reveal";

const steps = [
  {
    step: "01 · Discover",
    body: "I map the workflow, the data it touches, and where a person is currently making repetitive judgment calls.",
  },
  {
    step: "02 · Design",
    body: "I architect the agent, the tools it can call, and the guardrails around it — before any production code.",
  },
  {
    step: "03 · Deploy",
    body: "I ship into your existing stack, behind the access controls and approvals your team requires.",
  },
  {
    step: "04 · Operate",
    body: "I monitor, retrain, and extend the agent as your business changes around it.",
  },
];

export function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal className="max-w-xl mb-16">
        <p className="mono-label text-xs text-green mb-4">How I work</p>
        <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
          A short path from idea to <em className="italic text-green font-normal">autonomous</em>.
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
