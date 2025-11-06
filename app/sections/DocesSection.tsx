import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function DocesSection() {
  const items = [
    { name: "Biscoito amanteigado", src: "/product-images/bisc-amanteigado.png", desc: "Limão, Amendoim, Especiarias, Chocolate, Moranguinho ou Arco íris." },
    { name: "Pão de mel", src: "/product-images/pao-mel.png", desc: "Recheado com Doce de Leite e Coberto com Chocolate." },
    { name: "Alfajor", src: "/product-images/alfajor.png", desc: "Bolacha Recheada com Doce de Leite e Coberto com Chocolate." },
    { name: "Pirulitos para Drinks", src: "/product-images/pirulito.png", desc: "Pirulitos de Isomalte com Especiarias nos sabores, Cereja, Marula, Champagne, Laranja, Morango ou Maracujá." },
  ];

  return (
    <SectionRoot id="doces" title="Doces">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`doces-${item.name}`} name={item.name} src={item.src} desc={item.desc} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
