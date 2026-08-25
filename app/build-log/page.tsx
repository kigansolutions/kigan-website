import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { PixelDivider } from "@/components/site/PixelDivider";
import { BuildLog } from "@/components/site/BuildLog";
import { BuildLogCount } from "@/components/site/BuildLogCount";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Build Log — Kigan Agentic AI Solutions",
  description:
    "The real commit history behind this site — an agent doing the building, a founder directing and reviewing every change.",
};

export default function BuildLogPage() {
  return (
    <>
      <div className="grain" />
      <Nav />

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16 md:pb-20 scroll-mt-24">
        <Reveal className="max-w-2xl">
          <p className="mono-label text-[11px] text-green mb-4">Proof of work</p>
          <h1 className="font-display font-semibold text-3xl md:text-[2.5rem] leading-[1.15] tracking-tight">
            <BuildLogCount /> commits. One founder directing, one agent{" "}
            <span className="text-green font-semibold border-b-2 border-green/40 pb-0.5">building</span>.
          </h1>
          <p className="mt-5 text-ink-2 leading-[1.7] max-w-xl font-light">
            Kigan doesn&rsquo;t have client case studies yet — it&rsquo;s pre-revenue. What it does have is this
            site&rsquo;s own git history, pulled live from GitHub below. It&rsquo;s the same operating model Kigan
            sells: an agent does the building, a founder directs and reviews every change before it ships.
          </p>
        </Reveal>
      </section>

      <PixelDivider />
      <BuildLog />
      <CallToAction />
      <Footer />
    </>
  );
}
