import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function BrigadeirosSection() {
  const brigadeiros = [
    { name: "Tradicionais", src: "/product-images/tradicional.png", desc: "Tradicional, Beijinho, Cajuzinho, Casadinho, Sensação, Tentação, Moranguinho, Cappuccino, Paçoca, Coco Queimado ou Ninho." },
    { name: "Especiais", src: "/product-images/especial.png", desc: "Napolitano, Pink Lemonade, Cacau Black, Torta de Limão, Maracujá, Abacaxi, Churros, Olho de Sogra, Creme Brûlée ou Nutella." },
    { name: "Gourmet", src: "/product-images/gourmet.png", desc: "Licores, Óreo, Kinder, Supresa de Uva e Morango, Ferrero, Confete ou Pistache." },
  ];

  return (
    <SectionRoot id="brigadeiros" title="Brigadeiros">
        <ItemsGrid>
          {brigadeiros.map((item) => (
            <ItemCard key={`trad-${item.name}`} name={item.name} src={item.src} desc={item.desc} />
          ))}
        </ItemsGrid>
    </SectionRoot>
  );
}
