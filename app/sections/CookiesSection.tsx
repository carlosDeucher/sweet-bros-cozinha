import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function CookiesSection() {
  const items = [
    { name: "Cookie Nevado", src: "/brigadeiro.svg" },
    { name: "Red Velvet", src: "/brigadeiro.svg" },
    { name: "Tradicional", src: "/brigadeiro.svg" },
    { name: "Pistache", src: "/brigadeiro.svg" },
  ];

  return (
    <SectionRoot id="cookies" title="Cookies">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`cookies-${item.name}`} name={item.name} src={item.src} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
