import { Nav } from "@/components/site/Nav";
import { HeroSection } from "@/components/site/HeroSection";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { Manifesto } from "@/components/site/Manifesto";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";

function PixelDivider() {
  return (
    <div className="pixel-divider">
      <div className="blocks">
        <span style={{ background: "var(--color-green)" }} />
        <span style={{ background: "var(--color-ink-4)" }} />
        <span style={{ background: "var(--color-green)" }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <div id="top">
        <HeroSection />
      </div>
      <PixelDivider />
      <Capabilities />
      <PixelDivider />
      <Process />
      <Manifesto />
      <CallToAction />
      <Footer />
    </>
  );
}
