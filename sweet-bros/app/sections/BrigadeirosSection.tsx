import SectionRoot from "./components/SectionRoot";
import Subsection from "./components/Subsection";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

export default function BrigadeirosSection() {
  const tradicionais = [
    { name: "Tradicional", src: "/brigadeiro.svg" },
    { name: "Branco", src: "/brigadeiro.svg" },
    { name: "Meio Amargo", src: "/brigadeiro.svg" },
    { name: "Coco", src: "/brigadeiro.svg" },
  ];
  const especiais = [
    { name: "Churros", src: "/brigadeiro.svg" },
    { name: "Oreo", src: "/brigadeiro.svg" },
    { name: "Ninho", src: "/brigadeiro.svg" },
    { name: "Paçoca", src: "/brigadeiro.svg" },
  ];
  const gourmet = [
    { name: "Pistache", src: "/brigadeiro.svg" },
    { name: "Nutella", src: "/brigadeiro.svg" },
    { name: "Ferrero", src: "/brigadeiro.svg" },
    { name: "Avelã", src: "/brigadeiro.svg" },
  ];

  return (
    <SectionRoot id="brigadeiros" title="Brigadeiros">
      <Subsection id="tradicionais" title="Tradicionais">
        <ItemsGrid>
          {tradicionais.map((item) => (
            <ItemCard key={`trad-${item.name}`} name={item.name} src={item.src} />
          ))}
        </ItemsGrid>
      </Subsection>

      <Subsection id="especiais" title="Especiais">
        <ItemsGrid>
          {especiais.map((item) => (
            <ItemCard key={`esp-${item.name}`} name={item.name} src={item.src} />
          ))}
        </ItemsGrid>
      </Subsection>

      <Subsection id="gourmet" title="Gourmet">
        <ItemsGrid>
          {gourmet.map((item) => (
            <ItemCard key={`gou-${item.name}`} name={item.name} src={item.src} />
          ))}
        </ItemsGrid>
      </Subsection>

      <div className="pt-4 text-center">
        <Button href="https://wa.me/" target="_blank" rel="noopener noreferrer" size="lg" variant="whatsapp" className="gap-2">
          <WhatsAppIcon className="text-white" />
          Peça pelo WhatsApp
        </Button>
      </div>
    </SectionRoot>
  );
}
