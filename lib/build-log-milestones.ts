export type Milestone = {
  sha: string;
  relatedShas?: string[];
  title: string;
  body: string;
};

export const MILESTONES: Milestone[] = [
  {
    sha: "7fe9b46ed93eb12265575da078c02a9d8896009c",
    title: "Static site migrated to Next.js, TypeScript, and Tailwind v4 in one pass",
    body: "The agent rebuilt the entire site on Next.js with TypeScript and Tailwind v4, wiring in shadcn/ui and a new animated hero (word-cascade reveal, grid overlay, mouse-follow glow). It also caught copy that still read like a multi-person agency and rewrote it first-person throughout, since Kigan is solo. Founder reviewed and shipped the same evening.",
  },
  {
    sha: "f5a4a199b8f510257cbf76b99f5233d035dca673",
    title: "Agent shipped a real CSS bug, then found and fixed it in the same commit",
    body: "Writing .btn-primary as unlayered CSS meant it unconditionally beat Tailwind's layered hidden/md:inline-flex utilities - the desktop nav button was showing on mobile, overlapping the logo. The agent traced the cause to layer ordering, moved custom component classes into @layer components, and fixed it before it ever reached the founder as a bug report.",
  },
  {
    sha: "a10de1cc387c9dae98c88336cee59d7816a571ca",
    title: "Footer adapted, not copy-pasted",
    body: "The agent started from a pasted shadcn footer component but stripped everything that didn't belong on a real, solo-operated site: fake social platforms, \"Careers\"/\"Community\" links, a stranger's name in the copyright, an unrelated smooth-scroll dependency. It kept the structural idea - bordered grid, icon row, link columns - and rebuilt the content around what's actually true: real nav links, a working mailto button, copy that says solo instead of pretending otherwise.",
  },
  {
    sha: "7c2ad58d61c9a86b020098b7e2f577162c727724",
    relatedShas: [
      "396937d6b27abf0c2aa1318813b52d5d5027335c",
      "1ccdae9aa338c3d2ca434ed4696c305bb543ec3b",
    ],
    title: "Scroll-scrubbed hero, built end to end, mobile bug caught in real-device review",
    body: "The agent built the GSAP ScrollTrigger scroll-scrub logic for a cinematic macro-video hero end to end, choreographed against the existing headline and manifesto copy. On mobile it stuttered. The founder caught it in a real-device pass, and the agent traced it to two causes: viewport units recalculating every time the mobile browser chrome collapsed (fixed with svh instead of vh), and a video encoded with only 2 keyframes across 10 seconds, forcing every scroll-driven seek to reconstruct forward from the last keyframe (fixed by re-encoding with every frame independently keyed).",
  },
];
