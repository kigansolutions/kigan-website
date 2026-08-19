import { ExternalLink } from "lucide-react";
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

const publicProof = [
  {
    title: "Newsletter Automation",
    body: "Kigan first-party public work: a draft-first workflow for sourcing, branded copy, assembly, and Gmail draft creation for review.",
    href: "https://github.com/kigansolutions/newsletter-automation",
  },
  {
    title: "Hermes Agent Framework",
    body: "Kigan first-party public work: inspectable orchestration, planner architecture, workflows, and safety documentation.",
    href: "https://github.com/kigansolutions/hermes-agent-framework",
  },
  {
    title: "n8n Security Automation",
    body: "Kigan first-party public work: inspectable n8n workflow definitions and workflow validation tooling.",
    href: "https://github.com/kigansolutions/n8n-security-automation",
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

      <Reveal className="mt-14 border-t border-ink-4/40 pt-6">
        <p className="mono-label text-[10px] text-green mb-5">Public first-party work</p>
        <div className="grid gap-5 md:grid-cols-3">
          {publicProof.map((item) => (
            <div key={item.title} className="min-w-0">
              <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-ink-2 leading-[1.7] font-light">{item.body}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-green hover:text-green-deep transition-colors"
              >
                Inspect the public repository
                <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
