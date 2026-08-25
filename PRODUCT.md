# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Businesses (any size, any geography — not filtered by region or technical sophistication) with a workflow worth automating. The visitor is evaluating whether an AI agent could take on a task their team currently handles manually, and is deciding whether Kigan is a credible, safe operator to build it.

## Product Purpose

Kigan Agentic AI Solutions designs and builds agentic AI systems — agents that plan, act, and carry workflows through to completion inside a client's existing stack (ERPs, CRMs, internal APIs), rather than one-off automation scripts. Success is a visitor recognizing the operating model is credible enough to start a conversation, and emailing directly.

## Positioning

Kigan's proof is that it is built the way it sells: a solo founder (Cameron Weyers) directs an AI agent that does the implementation work, with every change reviewed before it ships. The site's own git history — surfaced live on the `/build-log` page — is the evidence. A generic AI agency can claim guardrails or full-lifecycle ownership; only Kigan can point to its own commit history as a running demonstration of the founder+agent model it sells to clients.

## Operating Context

- Engagement model (per `Process.tsx`): Discover → Design → Deploy → Operate. Agent architecture and guardrails are designed before production code; deployment happens inside the client's existing access controls and approvals; Kigan stays on to monitor/retrain/extend post-launch.
- The `/build-log` page pulls commit history live from GitHub (`lib/fetch-build-log.ts`, with `lib/build-log-fallback.ts` as a fallback) and flags commits with a `Co-Authored-By: Claude` trailer, i.e. agent-authored changes reviewed by the founder — this is the site literally demonstrating its own sales pitch.

## Capabilities and Constraints

- Solo-founder operation, pre-revenue, no client case studies yet. The build log stands in as evidence in their place — do not fabricate client work, testimonials, or metrics.
- Static-export Next.js site (`output: 'export'`); no backend beyond client-side data fetching (e.g. GitHub API calls for the build log).

## Brand Commitments

- Name: Kigan Agentic AI Solutions. Founder: Cameron Weyers.
- Contact: enquiries@kigansolutions.co.za (direct email is the primary CTA — no contact form, no booking tool).
- Social: GitHub github.com/kigansolutions, LinkedIn linkedin.com/in/cameron-weyers (footer links).
- Logo/brand assets live in `Branding/` (source SVG/PNG) and `public/logo/` (optimized, site-served).

## Evidence on Hand

- Real, live evidence: this repository's own commit history, surfaced on `/build-log`. No client case studies, testimonials, logos, or usage metrics exist — future work must not invent them.

## Product Principles

- The site's own build process is the primary proof point — lean into transparency (real commits, real co-authorship trailers) rather than manufacturing external social proof.
- Every capability claim should map to something the engagement model (Discover/Design/Deploy/Operate) or the guardrails-by-default framing actually delivers — don't drift into generic AI-agency claims a competitor could equally make.
- Direct, low-friction contact (a single email CTA) matches a solo-founder operation — don't introduce enterprise-y sales friction (forms, gated demos) that overstates current scale.

## Accessibility & Inclusion

No specific accessibility standard has been mandated; treat as good-practice-only, not a hard constraint.
