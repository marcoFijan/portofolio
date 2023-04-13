import HeroSection from "../HeroSection.jsx";
import AboutSection from "../AboutSection.jsx";
import PortfolioSection from "../PortfolioSection.jsx";

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
      <PortfolioSection />
    </main>
  );
}
