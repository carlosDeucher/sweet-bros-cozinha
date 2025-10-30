import HeroSection from "./sections/HeroSection";
import BrigadeirosSection from "./sections/BrigadeirosSection";
import DocesSection from "./sections/DocesSection";
import CookiesSection from "./sections/CookiesSection";
import SalgadosSection from "./sections/SalgadosSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-brand/10 to-brand-secondary/10">
      <div className="mx-auto w-full max-w-md px-4 pb-16 pt-10">
        <HeroSection />
        <BrigadeirosSection />
        <DocesSection />
        <CookiesSection />
        <SalgadosSection />
      </div>
    </main>
  );
}

