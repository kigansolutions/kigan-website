---
name: Kigan Agentic AI Solutions
description: The proof-of-work marketing site for a solo-founder agentic AI consultancy — warm paper neutrals, a single deep-green accent, and mono-label instrumentation that reads as logged and auditable.
colors:
  paper: "#FBF8F2"
  paper-2: "#F3EEE4"
  ink: "#191C1B"
  ink-2: "#434946"
  ink-3: "#767D79"
  ink-4: "#A8AEA9"
  green: "#1E5C41"
  green-deep: "#154732"
  green-tint: "#E7EFE9"
  sage: "#9CC3AE"
  destructive: "#8A2E1E"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  display-italic:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, 'Courier New', Courier, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  label-secondary:
    fontFamily: "JetBrains Mono, 'Courier New', Courier, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
  label-micro:
    fontFamily: "JetBrains Mono, 'Courier New', Courier, monospace"
    fontSize: "0.5rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  none: "0.125rem"
  sm: "0.125rem"
  pill: "9999px"
spacing:
  section-y: "5rem"
  section-y-lg: "7rem"
  container-max: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "28px 32px"
---

# Design System: Kigan Agentic AI Solutions

## Overview

**Creative North Star: "The Agent's Ledger"**

Every surface reads as a running, provable technical record rather than a sales brochure. Mono-label timestamps, pixel-grid motifs, trailer pills, and timeline rails carry the same honesty the `/build-log` page states outright: this is a founder directing an agent, with the receipts on screen. The palette is warm and unhurried — off-white paper, near-black ink, one deep forest green — so the "instrumentation" layer (mono labels, pills, rails) never tips into cold or clinical.

The pairing of a serif display face (Fraunces) with a mono label face (JetBrains Mono) does the same job typography does everywhere in this system: Fraunces carries editorial confidence for headlines and the italic manifesto pull-quote; JetBrains Mono, always uppercase and letter-spaced, marks anything that is metadata, status, or proof (section eyebrows, nav links, commit trailers, stat labels). Body copy in Inter Light stays quiet underneath both.

This system explicitly rejects the generic "AI startup" register: no glossy VC-deck gradients, no blue/purple accent cliché, no neon or cyberpunk AI imagery. Deep forest green is the only accent color and it is used sparingly — the restraint is the point, the same way the copy avoids hype.

**Key Characteristics:**
- One accent color (Deep Forest Green) used deliberately, never decoratively
- Mono-label uppercase tracking marks anything that is metadata, proof, or status
- Warm paper neutrals, not cold gray-scale
- Shadows and lift respond to interaction — nothing elevated just sits there
- Spring easing everywhere motion appears; nothing linear, nothing abrupt

## Colors

Warm, restrained, and green-anchored: the palette reads as one accent color surrounded by warm neutrals, not a multi-hue brand system.

### Primary
- **Deep Forest Green** (`#1E5C41`): The single brand accent. Primary buttons, links, active nav states, section-heading underline/emphasis spans, milestone markers on the build-log rail. Always paired with `green-deep` for gradient depth on interactive surfaces.
- **Green Deep** (`#154732`): The shadow/gradient partner to Deep Forest Green — never used alone, only as the darker stop in `btn-primary`'s gradient and in tinted shadow colors.

### Secondary
- **Soft Sage** (`#9CC3AE`): A lighter, quieter green used for secondary emphasis — the manifesto's "doesn't wait" span, floating background dots, the pixel-field flicker animation, "live" trailer pills. Reads as the accent's calmer sibling, never competing with it.

### Neutral
- **Paper** (`#FBF8F2`): Primary background — warm off-white, not pure white.
- **Paper 2** (`#F3EEE4`): Secondary/recessed background (footer, mobile nav panel resting state) — one step warmer/deeper than Paper.
- **Near-Black Ink** (`#191C1B`): Primary text color and the dark-section background (Manifesto, Build Log). Warm near-black, not neutral gray-black.
- **Ink 2** (`#434946`): Secondary body text on light backgrounds.
- **Ink 3** (`#767D79`): Tertiary text — nav links at rest, muted labels.
- **Ink 4** (`#A8AEA9`): Borders, dividers, disabled/quiet states.

### Named Rules
**The One Accent Rule.** Deep Forest Green is the only saturated color in the system. Every other color is a neutral (paper/ink scale) or a desaturated green tint (Sage, Green Tint). If a new element needs a second saturated hue, that's a signal to reconsider, not a green problem to solve with a new color.

## Typography

**Display Font:** Fraunces (with Georgia, "Times New Roman", serif fallback)
**Body Font:** Inter (with -apple-system, "Segoe UI", Helvetica, Arial, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with "Courier New", Courier, monospace fallback)

**Character:** Fraunces is editorial and slightly warm — a serif with enough personality to carry headlines and an italic pull-quote without feeling corporate. JetBrains Mono is the ledger's instrument: every eyebrow, nav link, stat label, and commit trailer is set in it, uppercase, tracked wide (`0.14em`), so the eye learns "mono + uppercase = this is metadata, not prose."

### Hierarchy
- **Display** (600 weight, `clamp(1.75rem, 4vw, 2.5rem)`, 1.15 line-height, `-0.02em` tracking): Section headings (Capabilities, Process, CallToAction, Build Log hero). Fraunces, upright.
- **Display Italic** (400 weight, `clamp(1.75rem, 3vw, 2.25rem)`, 1.4 line-height): The Manifesto pull-quote only — Fraunces italic is reserved for that single voice-of-the-founder moment, not used elsewhere.
- **Title** (600 weight, ~1.25rem): Card/milestone titles (Capabilities cards, Build Log milestone entries).
- **Body** (300 weight, 1rem, 1.7 line-height): Paragraph copy throughout — deliberately light-weight and generously spaced so long-form copy (Manifesto, CTA body, Build Log commentary) stays readable at a relaxed pace.
- **Label** (400 weight, 11px, `0.14em` tracking, uppercase): The default tier — eyebrows, nav links, SHA/commit links, footer nav. Always JetBrains Mono, always uppercase.
- **Label Secondary** (400 weight, 10px, `0.14em` tracking, uppercase): A quieter step down for dense, repeated metadata — stat captions, commit timestamps, the "Live from GitHub"/"Cached snapshot" source badge, trailer pills. Used where 11px would compete with adjacent primary content for attention.
- **Label Micro** (400 weight, 8px, `0.14em` tracking, uppercase): Reserved for exactly one spot — the "Agentic AI Solutions" tagline stacked under the nav wordmark, where it must stay visually subordinate to the brand name above it.

### Named Rules
**The Mono-Metadata Rule.** Anything that is a timestamp, status, category tag, or proof marker is set in uppercase JetBrains Mono with wide tracking — never in body copy weight or the display face. This is how the system visually distinguishes "content" from "evidence."

**The Three-Step Label Rule.** The mono label scale has exactly three steps — 11px (default), 10px (secondary/dense metadata), 8px (nav tagline only, one instance). A new label-role element takes the 11px default unless it's genuinely competing with denser primary content nearby; don't introduce a fourth size.

## Layout

Single-column, generously spaced sections on a `max-w-6xl` (72rem) container with `px-6 md:px-10` gutters; the Manifesto and Build Log intro use a narrower `max-w-3xl` / `max-w-2xl` for long-form reading measure. Section vertical rhythm is large and consistent: `py-20 md:py-28` (5rem → 7rem) between major sections, reinforced by a `PixelDivider` (a thin rule with three small colored blocks centered on it) marking the seams between them.

The Capabilities grid is a 12-column bento layout with deliberately irregular spans (`md:col-span-7` / `md:col-span-5` alternating) rather than a uniform 2- or 3-up grid — asymmetry is the point, so no two cards read as equal weight. The Process steps use a 4-up grid on desktop with a connecting horizontal rail behind the step markers, collapsing to 2-up on tablet and stacked on mobile. The Build Log uses a single vertical timeline rail with entries indented and connected by a hairline.

Nav is a floating centered pill (`max-w-3xl`), not a full-width bar — fixed near the top with `top-4 md:top-6` offset, transitioning from a transparent/dark-blurred state over the hero to a solid paper card once scrolled past it.

## Elevation & Depth

Hybrid: surfaces carry a real, if subtle, resting shadow (`shadow-card` on Capabilities cards, always-on), and that shadow escalates measurably on interaction (`shadow-card-hover`, the nav pill going solid, button press states). Depth is not purely ambient decoration and not purely a hover-only signal — resting elevation establishes the layering system (base paper → elevated card → floating nav/menu), and interaction states confirm what's clickable or live by deepening it further. Shadows are consistently color-tinted with the ink and green tokens rather than flat black, so elevation always reads as belonging to this palette.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgba(25,28,27,.04), 0 8px 20px -6px rgba(25,28,27,.10), 0 2px 8px -2px rgba(30,92,65,.07)`): Resting state for Capabilities cards — a soft, layered lift with a faint green tint in the outer layer.
- **Card Hover** (`0 2px 4px rgba(25,28,27,.06), 0 20px 36px -10px rgba(25,28,27,.16), 0 4px 12px -2px rgba(30,92,65,.12)`): Escalated depth on card hover, paired with a `-5px` translateY lift and green border-tint.
- **Float** (`0 4px 10px rgba(25,28,27,.08), 0 28px 48px -16px rgba(25,28,27,.22)`): Reserved for content that floats above the page flow — the mobile nav dropdown panel.
- **Primary Button** (multi-layer inset + drop shadow, green-tinted): A tactile, almost physical shadow stack (inner highlight, inner shadow, two outer drop shadows) that deepens further on hover and compresses on active/press — the button behaves like a pressable object, not a flat rectangle.

### Named Rules
**The Escalation Rule.** Nothing's resting shadow is its loudest shadow. Every elevated surface in this system has a hover or active state that measurably deepens or lifts further — elevation is evidence something responds, not a static styling choice.

## Shapes

Two deliberately different corner languages coexist by role. Content surfaces (cards, the base `--radius` token) use a near-sharp `0.125rem` (2px) radius — barely-there rounding that reads as precise and document-like, in keeping with "ledger" character. Interactive/chrome elements (buttons, the nav pill, badges, trailer pills, milestone markers) go fully circular (`9999px` / `rounded-full`) — a hard binary between "this is content" (barely rounded) and "this is something you act on or that marks status" (fully pill-shaped or circular). There is no middle ground like `rounded-lg` or `rounded-xl` anywhere in the system.

### Named Rules
**The Two-Radius Rule.** Every shape is either near-sharp (2px, content) or fully round (pill/circle, interactive/status). A card is never pill-shaped; a button is never sharp-cornered.

## Components

Buttons and cards are tactile and alive: motion is spring-eased (`cubic-bezier(0.16, 1, 0.3, 1)`) throughout, the primary button carries a soft pulsing halo glow behind it at rest that speeds up on hover, and interactive surfaces lift on hover rather than just recoloring. Nothing static sits completely still — even resting elements have a slow ambient animation (the pulsing button halo, the flickering pixel-field dots) that keeps the "ledger" feeling live rather than printed.

### Buttons
- **Shape:** Fully circular / pill (`rounded-full`, `9999px`).
- **Primary:** Deep Forest Green → Green Deep diagonal gradient, paper text, `px-6 py-3` (or `px-4 py-2` compact in nav). Multi-layer inset+drop shadow gives it physical depth; a soft sage radial-gradient halo pulses behind it continuously (3.4s cycle), speeding up to 1.6s on hover. Lifts `-2px` and scales `1.02` on hover; compresses to scale `0.98` on active/press.
- **Ghost:** Transparent background, `ink-4` border, `ink` text. On hover: border and background shift to green/green-tint, `-2px` lift, soft green glow shadow. No halo effect (halo is primary-only).
- **Hover / Focus:** All buttons use `transition` on transform/box-shadow/border/background only (never `transition-all`), spring-eased. Focus-visible state everywhere: `2px solid green` outline with `3px` offset.

### Chips / Pills (Trailer Pills)
- **Style:** Transparent background, `1px solid currentColor` border, fully round, uppercase mono text at 10px with a small solid dot indicator.
- **State:** Color-coded by meaning via `currentColor` — sage for "present"/"live" (positive/active), paper at reduced opacity for "absent"/"cached" (neutral/inactive). The dot and border always match the text color.

### Cards / Containers
- **Corner Style:** Near-sharp, `0.125rem` (2px) radius — see Shapes.
- **Background:** Paper on light sections; `paper/[0.06]` (near-transparent paper tint) on dark sections like Build Log milestone cards.
- **Shadow Strategy:** Card → Card Hover escalation (see Elevation & Depth); dark-section cards use a translucent border (`paper/10`) instead of a shadow, since shadows don't read against a dark background.
- **Border:** `1px solid ink-4/50` on light cards; `1px solid paper/10` on dark cards.
- **Internal Padding:** `p-7 md:p-8` (28px → 32px) is the standard card padding; dark milestone cards use `p-6 md:p-8`.

### Navigation
- **Style:** Floating centered pill, not a full-width bar. Backdrop-blur + saturate. Transitions between a transparent/dark state (over the hero, `bg-ink/35`, `border-paper/15`) and a solid state (`bg-paper/90` with `shadow-card`) based on scroll position, animated over 500ms.
- **Typography:** Logo wordmark in Fraunces semibold; nav links in mono-label uppercase at 11px with an animated underline that grows left-to-right on hover (`nav-link` class, 400ms spring).
- **States:** Active route (Build Log) is marked in green permanently, not just on hover.
- **Mobile:** Two-line hamburger icon (not three); menu opens as a rounded card (`shadow-float`) directly below the pill, same mono-label link treatment stacked vertically.

### Timeline Rail (signature component)
The Build Log's structural device: a thin vertical rail (`ink-4`/`paper` at low opacity) runs behind a column of entries, each marked with a small circular dot — larger and sage-colored for milestone entries, smaller and neutral for ordinary commits. Milestone entries expand into a full card (title, body copy, trailer pill, linked commit SHAs); ordinary commits stay a single compact row (date, subject, trailer pill, SHA link). This is the clearest expression of "The Agent's Ledger" — a literal, scannable log with proof markers attached to every line.

## Do's and Don'ts

### Do:
- **Do** keep Deep Forest Green as the only saturated accent color; everything else stays in the paper/ink neutral scale or desaturated sage.
- **Do** set anything that is metadata, status, or proof (timestamps, trailers, eyebrows, nav links) in uppercase JetBrains Mono with `0.14em` tracking.
- **Do** use fully circular/pill shapes for anything interactive or status-bearing, and near-sharp 2px radius for content containers — never a mid-range radius like `rounded-lg`.
- **Do** escalate shadow depth on hover/active for any surface that already carries a resting shadow (The Escalation Rule).
- **Do** animate only `transform`, `opacity`, `box-shadow`, `border-color`, and `background-color`, always with the spring easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** reserve Fraunces italic for the founder-voice manifesto quote; use upright Fraunces semibold for all other headings.

### Don't:
- **Don't** introduce a second saturated hue (no blues, purples, oranges) — the generic "AI startup" gradient look is explicitly rejected.
- **Don't** use `transition-all`; always name the properties.
- **Don't** use a shadow that stays flat black — every shadow in this system is tinted with ink or green rgba values.
- **Don't** give a button or pill a sharp corner, or a card a fully round corner — shape signals role (Two-Radius Rule).
- **Don't** add decorative imagery, stock photography, or generic AI iconography (robots, neural-net graphics, circuit patterns) — the visual language is typographic and data/ledger-driven, not illustrative.
