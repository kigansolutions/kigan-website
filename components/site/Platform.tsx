import { Reveal } from "./Reveal";

const platformItems = [
  {
    label: "Memory",
    text: "Shared context keeps decisions, client work, and reusable methods from disappearing between tools.",
  },
  {
    label: "Evidence",
    text: "Outputs are tied back to files, checks, source material, and review notes wherever the work allows it.",
  },
  {
    label: "Tools",
    text: "Agents, automations, prompts, code, and templates are improved as reusable capabilities instead of one-off tricks.",
  },
  {
    label: "Governance",
    text: "AI can prepare, compare, and execute scoped work. People approve money, legal, compliance, payroll, and public claims.",
  },
];

export function Platform() {
  return (
    <section id="platform" className="relative overflow-hidden bg-ink text-paper scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="platform-grid" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mono-label text-[11px] text-sage mb-4">Platform</p>
            <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
              The part that makes Kigan compound.
            </h2>
          </div>
          <p className="text-paper/75 leading-[1.75] font-light text-base md:text-lg">
            The Platform is not a product pitch yet. It is the operating layer behind the Studios: the place where knowledge, judgment, proof, tools, and delivery patterns are captured so each project leaves Kigan stronger than it found it.
          </p>
        </Reveal>

        <Reveal className="mt-14 border-y border-paper/15 py-7 md:py-8">
          <p className="mono-label text-[10px] text-sage mb-5">Operating loop</p>
          <div className="grid gap-3 text-sm text-paper/80 md:grid-cols-5 md:items-center">
            {["Client work", "Evidence", "Decisions", "Reusable tools", "Next Studio engagement"].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center border border-sage/50 font-mono text-[10px] text-sage">0{index + 1}</span>
                <span>{step}</span>
                {index < 4 && <span className="hidden text-sage/60 md:inline" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-4">
          {platformItems.map((item) => (
            <Reveal key={item.label} className="bg-ink/90 p-6 md:p-7">
              <p className="mono-label text-[10px] text-sage mb-5">{item.label}</p>
              <p className="text-paper/78 leading-[1.7] font-light">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
