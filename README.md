# kigan-website

Marketing site for Kigan — an AI-native professional services company built around specialised Studios and a shared intelligence Platform. Live at [kigan-website.vercel.app](https://kigan-website.vercel.app).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · Base UI

## Structure

Single-page marketing site built from composed section components:

```
app/
  layout.tsx        root layout, fonts, metadata
  page.tsx           assembles the page from components/site
components/site/
  Nav.tsx             navigation
  HeroSection.tsx      hero
  Manifesto.tsx         positioning / philosophy
  Capabilities.tsx       Studio model
  Platform.tsx           shared intelligence Platform
  Process.tsx             how engagements work
  Proof.tsx               proof-in-progress signals
  CallToAction.tsx         contact CTA
  Footer.tsx
  PixelField.tsx           background animation
  Reveal.tsx                scroll-triggered reveal wrapper
Branding/               source logo files and brand reference (SVG, PNG)
public/logo/            optimized logo assets served by the site
screenshot.mjs           Puppeteer script to capture a site screenshot
```

## Local development

```bash
npm install
npm run dev
```

Runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

Deployed on Vercel; pushes to the default branch auto-deploy.
