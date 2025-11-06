import { Button } from "@/components/ui/button";
import { WhatsAppIcon, InstagramIcon, MapPinIcon } from "@/components/icons";
import { WhatsAppBtn } from "@/components/feat/WhatsAppBtn";

export default function HeroSection() {
  return (
    <section className="mb-10 text-center">
      <div className="mx-auto inline-block rounded-2xl bg-white/60 px-4 py-2 shadow-sm backdrop-blur">
        <span className="font-brand text-5xl leading-none text-brand">
          Sweet Bros
        </span>
      </div>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary/80">
        Cozinha Artesanal
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <WhatsAppBtn />
        <Button
          href="https://www.instagram.com/sweetbrospb/"
          target="_blank"
          rel="noopener noreferrer"
          variant="instagram"
          className="gap-2"
        >
          <InstagramIcon className="text-white" />
          Instagram
        </Button>
      </div>

      <div className="mt-3 flex items-center justify-center text-md text-zinc-400">
        <MapPinIcon size={20} className="mr-1 text-brand-secondary" />
        <span className="mb-[-2px] text-brand-secondary">Porto Belo, SC</span>
      </div>
    </section>
  );
}
