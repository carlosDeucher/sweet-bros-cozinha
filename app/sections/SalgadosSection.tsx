import SectionRoot from "./components/SectionRoot";
import ItemsGrid from "./components/ItemsGrid";
import ItemCard from "./components/ItemCard";

export default function SalgadosSection() {
  const items = [
    { name: "Pão picante", src: "/product-images/pao-picante.png", desc: "Pão Picante Frio, com Frango, Pepino, Milho e Maionese Caseira." },
    { name: "Pão quente", src: "/product-images/pao-quente.png", desc: "Pão com Creme de Palmito, Presunto e Queijo." },
    { name: "Pastelão", src: "/product-images/pastelao.png", desc: "Massa Fofinha, com Recheio de Frango, Palmito, Carne, Vegetariano ou **Camarão. Com crosta de queijo provolone." },
    { name: "Salgadinhos-Bread King", src: "/product-images/salgadinhos.png", desc: "Mini Salgados Bread King, nos sabores: Coxinha, Bolinha de Queijo, Risolis de Carne, Salsichinha, Bolinha de Queijo e Presunto ou Croquete de Carne com Requeijão." },
  ];

  return (
    <SectionRoot id="salgados" title="Salgados">
      <ItemsGrid>
        {items.map((item) => (
          <ItemCard key={`salg-${item.name}`} name={item.name} src={item.src} desc={item.desc} />
        ))}
      </ItemsGrid>
    </SectionRoot>
  );
}
