import { Nav } from "@/components/site/Nav";
import { CinematicHero } from "@/components/site/CinematicHero";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { Manifesto } from "@/components/site/Manifesto";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";
import { PixelDivider } from "@/components/site/PixelDivider";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <CinematicHero />
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
