import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const offers = [
  {
    number: "01",
    studio: "Brand Studio",
    name: "Brand Clarity Foundation",
    signal: "You are doing good work, but the offer is hard to explain or apply consistently.",
    outcome: "A clear, evidence-backed foundation for what you do, who it is for, and how to say it before investing in a larger build.",
    receives: [
      "A clarified offer and audience direction",
      "Core positioning and messaging guidance",
      "A practical foundation for future design, copy, or website work",
    ],
    human: "You approve the direction, claims, and language before anything is treated as final.",
    notIncluded: "Not a finished website, campaign, visual identity, or promise of commercial results.",
    href: "mailto:enquiries@kigansolutions.co.za?subject=Brand%20Studio%20starting%20engagement",
    cta: "Ask about Brand Studio",
  },
  {
    number: "02",
    studio: "Workflow Studio",
    name: "Workflow Proof Plan",
    signal: "One repetitive, messy workflow is absorbing attention and you need to know what is worth changing first.",
    outcome: "A grounded view of the current workflow and a scoped recommendation for where AI or automation may help safely.",
    receives: [
      "A current-state workflow map",
      "The data, tools, decisions, and handoffs involved",
      "A scoped proof or pilot design where the evidence supports it",
    ],
    human: "You approve access, boundaries, risk tolerance, and any move from design into a controlled proof or pilot.",
    notIncluded: "Not an autonomous system, broad integration programme, or production deployment by default.",
    href: "mailto:enquiries@kigansolutions.co.za?subject=Workflow%20Studio%20starting%20engagement",
    cta: "Ask about Workflow Studio",
  },
];

export function CommercialOffer() {
  return (
    <section id="start-here" className="relative bg-paper-2 border-y border-ink-4/30 scroll-mt-24">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <p className="mono-label text-[11px] text-green mb-4">Start here</p>
          <h2 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
            Choose the problem, not the technology.
          </h2>
          <p className="mt-5 text-ink-2 leading-[1.7] font-light max-w-xl">
            Two small first engagements for making the next decision clearer. Each starts with evidence, keeps consequential choices human-approved, and leaves a useful artefact behind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
          {offers.map((offer) => (
            <article
              key={offer.number}
              className="lift min-w-0 border border-ink-4/50 bg-paper rounded-sm p-7 md:p-8 [box-shadow:var(--shadow-card)] hover:[box-shadow:var(--shadow-card-hover)] flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="mono-label text-[11px] text-green mb-3">{offer.studio}</p>
                  <h3 className="font-display font-semibold text-2xl leading-tight">{offer.name}</h3>
                </div>
                <span className="mono-label text-[11px] text-ink-3" aria-hidden="true">{offer.number}</span>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="mono-label text-[10px] text-ink-3 mb-2">For when</p>
                  <p className="text-ink-2 leading-[1.65]">{offer.signal}</p>
                </div>
                <div>
                  <p className="mono-label text-[10px] text-ink-3 mb-2">You leave with</p>
                  <p className="text-ink-2 leading-[1.65] mb-3">{offer.outcome}</p>
                  <ul className="space-y-2 text-sm text-ink-2 leading-[1.55]">
                    {offer.receives.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-green" aria-hidden="true">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-ink-4/40 pt-5 space-y-3 text-sm leading-[1.6]">
                  <p><span className="font-medium text-ink">Human approval:</span> <span className="text-ink-2">{offer.human}</span></p>
                  <p><span className="font-medium text-ink">Not included by default:</span> <span className="text-ink-2">{offer.notIncluded}</span></p>
                </div>
              </div>

              <a href={offer.href} className="btn-ghost mt-8 inline-flex self-start items-center gap-2 rounded-full px-5 py-2.5 text-sm" aria-label={`${offer.cta} by email`}>
                {offer.cta}
                <ArrowRight className="btn-arrow" size={15} strokeWidth={2.25} />
              </a>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
