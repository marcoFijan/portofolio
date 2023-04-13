import HeroSection from "../HeroSection.js";
import AboutSection from "../AboutSection.js";
import PortofolioSection from "../PortoflioSection.js";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <HeroSection />
      <AboutSection />
      <PortofolioSection />
    </main>
  );
}
