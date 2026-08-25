# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `impeccable` skill** before writing any frontend code, every session, no exceptions. Run `/impeccable` with no argument for a context-aware menu, or the relevant sub-command directly when the task is clear.
- This project has `PRODUCT.md` and `DESIGN.md` at the repo root — impeccable loads both automatically. Don't re-derive brand facts or tokens from scratch.
- If working from a pasted reference image, impeccable's own workflow governs matching vs. improving it — no separate rule needed here.

## Local Server
- Serve on localhost, never `file:///`. `npm run dev` → `http://localhost:3000` (check terminal output if 3000 is busy).
- If the server is already running, don't start a second instance.

## Screenshot Workflow
- `node screenshot.mjs http://localhost:3000 [label]` → saves to `./temporary screenshots/screenshot-N[-label].png` (auto-incremented, never overwritten).
- Read the PNG with the Read tool afterward — don't guess at the render.
- Be specific in comparisons: exact px/hex deltas, not "looks off."

## Output Defaults
- Next.js App Router (TypeScript, Tailwind v4, shadcn/ui) — no `tailwind.config.js`; theme tokens live in `app/globals.css`'s `@theme` block.
- New sections go in `components/site/`; shadcn primitives in `components/ui/` (via `npx shadcn add <name>`, don't hand-edit for bespoke content).
- Static export (`output: 'export'`) — `npm run build` → `out/`, hostable anywhere.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`. Mobile-first.

## Brand Assets
- Check `Branding/` before designing — source logos and brand reference live there; optimized site-served versions are in `public/logo/`.
- Use real assets over placeholders. If a color palette is defined (see `DESIGN.md`), use those exact values.

## Git / Deployment
- This is a **live website**. Never `git commit` or `git push` without explicit authorization for that specific change.
- Work locally first (dev server + screenshots), review, then commit on approval. Pushes auto-deploy — no manual step.
