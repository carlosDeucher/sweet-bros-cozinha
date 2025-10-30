import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function DocesSection() {
  const items = [
    { name: "Biscoito amanteigado", src: "/brigadeiro.svg" },
    { name: "Pão de mel", src: "/brigadeiro.svg" },
    { name: "Alfajor", src: "/brigadeiro.svg" },
    { name: "Pirulitos para Drinks", src: "/brigadeiro.svg" },
  ];

  return (
    <SectionRoot id="doces" title="Doces">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`doces-${item.name}`} name={item.name} src={item.src} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
