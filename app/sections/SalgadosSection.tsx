import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function SalgadosSection() {
  const items = [
    { name: "Pão picante", src: "/brigadeiro.svg" },
    { name: "Pão quente", src: "/brigadeiro.svg" },
    { name: "Pastelão", src: "/brigadeiro.svg" },
    { name: "Salgadinhos- BK", src: "/brigadeiro.svg" },
  ];

  return (
    <SectionRoot id="salgados" title="Salgados">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`salg-${item.name}`} name={item.name} src={item.src} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
