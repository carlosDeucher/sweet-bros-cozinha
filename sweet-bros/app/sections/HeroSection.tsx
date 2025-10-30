import { Button } from "@/components/ui/button";
import { WhatsAppIcon, InstagramIcon, MapPinIcon } from "@/components/icons";

export default function HeroSection() {
  return (
    <section className="mb-10 text-center">
      <div className="mx-auto inline-block rounded-2xl bg-white/60 px-4 py-2 shadow-sm backdrop-blur">
        <span className="font-brand text-5xl leading-none text-brand">Sweet Bros</span>
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary/80">
        Doceria
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Button href="https://wa.me/" target="_blank" rel="noopener noreferrer" variant="whatsapp" className="gap-2">
          <WhatsAppIcon className="text-white" />
          WhatsApp
        </Button>
        <Button
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          variant="instagram"
          className="gap-2"
        >
          <InstagramIcon className="text-white" />
          Instagram
        </Button>
      </div>

      <div className="mt-3 flex items-center justify-center text-md text-zinc-600 dark:text-zinc-400">
        <MapPinIcon size={20} className="mr-1 text-brand-secondary" />
        <span className="mb-[-2px] text-brand-secondary">Porto Belo, SC</span>
      </div>
    </section>
  );
}
