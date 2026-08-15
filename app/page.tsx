import { Nav } from "@/components/site/Nav";
import { CinematicHero } from "@/components/site/CinematicHero";
import { Capabilities } from "@/components/site/Capabilities";
import { Platform } from "@/components/site/Platform";
import { Process } from "@/components/site/Process";
import { Proof } from "@/components/site/Proof";
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
      <CinematicHero />
      <PixelDivider />
      <Capabilities />
      <Platform />
      <PixelDivider />
      <Process />
      <Proof />
      <Manifesto />
      <CallToAction />
      <Footer />
    </>
  );
}
