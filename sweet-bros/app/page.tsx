import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, InstagramIcon, MapPinIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-brand/10 to-brand-secondary/10">
      <div className="mx-auto w-full max-w-md px-4 pb-16 pt-10">
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

          <div className="mt-3 flex items-center justify-center text-sm text-zinc-600 dark:text-zinc-400">
            <MapPinIcon size={16} className="mr-1 text-brand-secondary" />
            Porto Belo, SC
          </div>
        </section>
        
        <section id="brigadeiros" className="mt-10 space-y-4">
          <header className="text-center">
            <h2 className="font-brand text-3xl text-brand">Brigadeiros</h2>
          </header>

          <div id="tradicionais" className="space-y-3">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Tradicionais</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Tradicional", src: "/brigadeiro.svg" },
                { name: "Branco", src: "/brigadeiro.svg" },
                { name: "Meio Amargo", src: "/brigadeiro.svg" },
                { name: "Coco", src: "/brigadeiro.svg" },
              ].map((item) => (
                <div
                  key={`trad-${item.name}`}
                  className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="especiais" className="space-y-3">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Especiais</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Churros", src: "/brigadeiro.svg" },
                { name: "Oreo", src: "/brigadeiro.svg" },
                { name: "Ninho", src: "/brigadeiro.svg" },
                { name: "Paçoca", src: "/brigadeiro.svg" },
              ].map((item) => (
                <div
                  key={`esp-${item.name}`}
                  className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="gourmet" className="space-y-3">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Gourmet</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Pistache", src: "/brigadeiro.svg" },
                { name: "Nutella", src: "/brigadeiro.svg" },
                { name: "Ferrero", src: "/brigadeiro.svg" },
                { name: "Avelã", src: "/brigadeiro.svg" },
              ].map((item) => (
                <div
                  key={`gou-${item.name}`}
                  className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 text-center">
            <Button href="https://wa.me/" target="_blank" rel="noopener noreferrer" size="lg" variant="whatsapp" className="gap-2">
              <WhatsAppIcon className="text-white" />
              Peça pelo WhatsApp
            </Button>
          </div>
        </section>
        <section id="doces" className="mt-10 space-y-4">
          <header className="text-center">
            <h2 className="font-brand text-3xl text-brand">Doces</h2>
          </header>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Biscoito amanteigado", src: "/brigadeiro.svg" },
              { name: "Pão de mel", src: "/brigadeiro.svg" },
              { name: "Alfajor", src: "/brigadeiro.svg" },
              { name: "Pirulitos para Drinks", src: "/brigadeiro.svg" },
            ].map((item) => (
              <div
                key={`doces-${item.name}`}
                className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cookies" className="mt-10 space-y-4">
          <header className="text-center">
            <h2 className="font-brand text-3xl text-brand">Cookies</h2>
          </header>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Cookie Nevado", src: "/brigadeiro.svg" },
              { name: "Red Velvet", src: "/brigadeiro.svg" },
              { name: "Tradicional", src: "/brigadeiro.svg" },
              { name: "Pistache", src: "/brigadeiro.svg" },
            ].map((item) => (
              <div
                key={`cookies-${item.name}`}
                className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="salgados" className="mt-10 space-y-4">
          <header className="text-center">
            <h2 className="font-brand text-3xl text-brand">Salgados</h2>
          </header>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Pão picante", src: "/brigadeiro.svg" },
              { name: "Pão quente", src: "/brigadeiro.svg" },
              { name: "Pastelão", src: "/brigadeiro.svg" },
              { name: "Salgadinhos- BK", src: "/brigadeiro.svg" },
            ].map((item) => (
              <div
                key={`salg-${item.name}`}
                className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
