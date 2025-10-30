import HeroSection from "./sections/HeroSection";
import BrigadeirosSection from "./sections/BrigadeirosSection";
import DocesSection from "./sections/DocesSection";
import CookiesSection from "./sections/CookiesSection";
import SalgadosSection from "./sections/SalgadosSection";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-brand/10 to-brand-secondary/10">
      <div className="mx-auto w-full max-w-md px-4 pb-16 pt-10">
        <HeroSection />
        <BrigadeirosSection />
        <DocesSection />
        <CookiesSection />
        <SalgadosSection />

        <div className="pt-12 text-center">
        <Button href="https://wa.me/" target="_blank" rel="noopener noreferrer" size="lg" variant="whatsapp" className="gap-2">
          <WhatsAppIcon className="text-white" />
          Peça pelo WhatsApp
        </Button>
      </div>
      </div>
    </main>
  );
}

