import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function CookiesSection() {
  const items = [
    { name: "Tradicionais", src: "/product-images/cookie-trad.png", desc: "Tradicional com Gotas de Chocolate Preto, Red Velvet com Gotas de Chocolate Branco, Chocolate Preto com  Gotas de Chocolate Branco." },
    { name: "Cookie Nevado", src: "/product-images/cookie-nev.png", desc: "Cookie de Cacau com Pedaços de Chocolate ao Leite e Meio Amargo, Coberto com Glaçúcar." },
    { name: "Cookie de Pistache", src: "/product-images/cookie-pistache.png", desc: "Cookie com Pedaços Generosos de Pistache." },
  ];

  return (
    <SectionRoot id="cookies" title="Cookies">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`cookies-${item.name}`} name={item.name} src={item.src} desc={item.desc} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
