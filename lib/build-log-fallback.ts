import { NormalizedCommit } from "./build-log-types";

export const FALLBACK_SNAPSHOT_DATE = "2026-07-25";

const REPO_URL = "https://github.com/kigansolutions/kigan-website/commit";

function commit(
  sha: string,
  date: string,
  subject: string,
  body: string,
  hasTrailer: boolean
): NormalizedCommit {
  return {
    sha,
    shortSha: sha.slice(0, 7),
    date,
    subject,
    message: body ? `${subject}\n\n${body}` : subject,
    hasTrailer,
    url: `${REPO_URL}/${sha}`,
  };
}

export const FALLBACK_COMMITS: NormalizedCommit[] = [
  commit(
    "0095a19549031bd7d9b7272c6af2c055cf048670",
    "2026-07-17T19:54:58+02:00",
    "Checkpoint: static site before Next.js migration",
    "",
    false
  ),
  commit(
    "7fe9b46ed93eb12265575da078c02a9d8896009c",
    "2026-07-17T20:10:53+02:00",
    "Migrate static site to Next.js + TypeScript + Tailwind v4 + shadcn/ui",
    "Integrates a new full-viewport animated hero (word-cascade reveal, grid\noverlay, mouse-follow glow, floating dots) restyled to the Kigan brand\npalette, and fixes copy throughout to first-person singular (\"I\"/\"my\")\nsince Kigan is a solo operation, not a multi-person agency.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "42be75ab3f2229b5b412d1e229f598f31f99383c",
    "2026-07-17T20:11:07+02:00",
    "Remove unused create-next-app placeholder SVGs from public/",
    "Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "875ff3ed50684f911dc23ca2526747aa0bee7e51",
    "2026-07-18T12:06:13+02:00",
    "Make hero color flow uninterrupted from the very top; enlarge nav logo",
    "Nav becomes a transparent, light-text overlay while over the hero (fixed\npositioning, not sticky, so it no longer occupies flow space and reveal\nthe plain body background) and crossfades to the compact solid paper bar\nonce scrolled past it. Nav logo is ~3x larger and swaps to the on-ink\nmark variant while overlaying the hero. Hero's top eyebrow is restructured\ninto a mark/KIGAN/tagline lockup mirroring the real logo composition,\ninstead of one cascading line of text.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "0bfd82901074f22656197c68d636d7e1e4780836",
    "2026-07-18T12:13:38+02:00",
    "Make the K mark truly transparent instead of sitting on a solid box",
    "Both nav and hero logo instances were using PNG variants that have a\nflat background color baked into the raster (kigan-mark-on-ink.png),\nwhich clashed against the hero's gradient. Switched to the actual\ntransparent PNG and recolor it via a brightness/invert CSS filter, so\nonly the K's own pixel shape renders - no background box at all.\n\nAlso fixed the hero's entrance animation stomping on that filter: the\nword-appear keyframes set their own `filter: blur(...)`, which was\noverriding the invert filter once the animation ran. Moved the entrance\nanimation onto a wrapper element so the two filters no longer collide.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "793ad8aa6b33404f9cb9eae7ca62e782360e672b",
    "2026-07-18T12:17:47+02:00",
    "Move the KIGAN / Agentic AI Solutions lockup into the nav only",
    "It was appearing twice (nav and hero), which read as redundant now that\nthe nav carries a large, always-visible logo. Nav gains a stacked\n\"Agentic AI Solutions\" tagline under KIGAN; the hero drops its own\nmark/wordmark/tagline block entirely and goes straight into the headline,\nwith word-cascade delays shifted earlier to fill the time that block used\nto occupy.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "d25e62456d2168dfb32d8494ac2f529c7ecc84a4",
    "2026-07-18T12:23:27+02:00",
    "Update contact email, trim Integration copy, and give buttons real depth",
    "Email changed to enquiries@kigansolutions.co.za throughout. Dropped\n\"warehouses\" from the Integration capability description. Buttons were\nflat single-color fills; they now use a diagonal gradient matching the\nhero's own gradient direction plus a layered, sage-tinted glow shadow\nthat intensifies on hover - echoing the hero's ambient glow/pulse\nlanguage instead of sitting stale against it.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "f5a4a199b8f510257cbf76b99f5233d035dca673",
    "2026-07-18T12:34:07+02:00",
    "Unify light-section background tone and give buttons a real upgrade",
    "Capabilities/Process were inheriting the brighter `paper` tone from\n<body> while the contact section explicitly used the deeper `paper-2`,\nreading as an inconsistent white-vs-paper split. Body now uses paper-2\nas the base canvas throughout, with cards staying on `paper` so they\nactually read as elevated surfaces against it instead of blending in.\n\nButtons: gradient fill, glossy inset highlight, a continuously \"breathing\"\nsage glow halo reusing the hero's own pulse-glow animation, and a sliding\narrow icon on hover.\n\nFixed a real bug this introduced: .btn-primary now sets its own `display`,\nand since it was written as unlayered CSS it unconditionally beat\nTailwind's layered `hidden`/`md:inline-flex` utilities regardless of\nbreakpoint - showing the desktop nav button on mobile, overlapping the\nlogo. Moved all custom component classes into `@layer components` so\nTailwind utilities correctly take precedence again.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "a10de1cc387c9dae98c88336cee59d7816a571ca",
    "2026-07-18T12:43:13+02:00",
    "Redesign footer to match the rest of the site's depth and feel",
    "Adapted the structure of a pasted shadcn footer component (bordered\ngrid layout, icon row, link columns) rather than lifting it wholesale -\nits placeholder content (fake social platforms, \"Careers\"/\"Community\"\nlinks, a stranger's name in the copyright, an unrelated smooth-scroll\ndemo dependency) didn't belong on a real, solo-operated site. Kept the\nstructural idea, dropped what didn't apply.\n\nReal content only: the actual nav links split into \"Site\" and \"Get in\ntouch\" columns, a mailto icon button (no fake social links to accounts\nthat don't exist), and copy reinforcing the solo positioning. Reused the\nsame PixelField ambient texture as the manifesto section at low opacity\nplus a hairline top border, so the footer now shares the same layered-\ndepth system as the rest of the page instead of sitting as a flat,\nuntextured box.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
  commit(
    "e2a7224d1dfd15ab0d4fea575645c355203fe874",
    "2026-07-20T10:36:22+02:00",
    "Add README",
    "",
    false
  ),
  commit(
    "1bb69349d1ed0bca3cb5b8cedd6c9a0e22dcb9f7",
    "2026-07-20T18:33:55+02:00",
    "Redesign pass: fix italic headers, repeated eyebrows, hero centering, footer weight",
    "- Remove italic accent headers and per-section eyebrow labels (Capabilities,\n  Process, CallToAction) in favor of inline colored emphasis\n- Capabilities cards move to an irregular bento grid (7/5 span) instead of\n  four equal tiles\n- Hero shifts from full-viewport centered to left-biased, anchored layout\n- Nav rebuilt as a floating pill (N5) instead of a full-width sticky bar\n- CallToAction simplified to a single column, drops the duplicate email link",
    false
  ),
  commit(
    "e137bbcfd8b8d8e4966b1de12111ece61a6fc4fe",
    "2026-07-20T18:34:17+02:00",
    "Address Louise's feedback: explicit hero paragraph, GitHub/LinkedIn in footer",
    "- Hero was headline + tagline only, no plain-language explanation of what\n  Kigan actually does. Added a 3-sentence paragraph stating it directly:\n  what gets built, what to tell Cameron, what you get back.\n- Footer had no outbound links at all. Added GitHub and LinkedIn, placed\n  above the copyright line.",
    false
  ),
  commit(
    "ab491b60227d79a7f25230ea13143d34fc008294",
    "2026-07-20T21:09:32+02:00",
    "Fix contact CTA and give the K mark a cascading reveal",
    "\"Start a project\" only scrolled to the contact section, which had no\nactual way to get in touch - both nav links now go straight to\nmailto:enquiries@kigansolutions.co.za, and the bottom CTA section gets\nits own \"Email me directly\" button as a backup for anyone who scrolls\nthere anyway.\n\nThe full K mark now bleeds in from the top-left border of the hero,\ncascading in last after the headline/paragraph/tagline sequence using\nthe same word-appear timing. The nav bar's small K gets the identical\nbleed-in on page load, applied to its wrapper rather than the image\nitself so it doesn't fight the image's own scroll-driven invert filter.",
    false
  ),
  commit(
    "396937d6b27abf0c2aa1318813b52d5d5027335c",
    "2026-07-23T20:47:15+02:00",
    "Add cinematic scroll-video hero prototype",
    "Replaces the hero with a scroll-scrubbed macro video journey through\nKigan's own pixel-dissolve motif, choreographed against the existing\nhero and manifesto copy. Nav's solid-background threshold now tracks\nthe hero's actual height instead of a hardcoded scrollY value.\n\nPrototype only - not wired into the production hero yet.",
    false
  ),
  commit(
    "1ccdae9aa338c3d2ca434ed4696c305bb543ec3b",
    "2026-07-23T21:09:42+02:00",
    "Fix mobile scroll jank: use svh instead of vh for hero geometry",
    "Mobile browsers resize the viewport as the address bar collapses/\nexpands during scroll, which was constantly shifting the hero's\ncomputed height since it was sized in vh (confirmed: 2870px -> 2584px\nacross a ~85px viewport height change). Switched the hero wrapper and\nsticky stage to svh, which stays fixed regardless of browser chrome\nchanges, and added ScrollTrigger.config({ ignoreMobileResize: true })\nas a second guard against the same class of resize event.",
    false
  ),
  commit(
    "7c2ad58d61c9a86b020098b7e2f577162c727724",
    "2026-07-23T21:31:42+02:00",
    "Re-encode hero video with dense keyframes to fix mobile scrub jank",
    "Original had only 2 keyframes across 10s, forcing mobile decoders to\nreconstruct forward from the last keyframe on every scroll-driven seek\n(visible as pixelated jumps while scrubbing on touch). Every frame is\nnow independently keyed, so seeks are instant regardless of position.\n\nCo-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>",
    true
  ),
];
