import Image from "next/image";

type ItemCardProps = {
  name: string;
  src: string;
  desc: string;
};

export default function ItemCard({ name, src, desc }: ItemCardProps) {
  return (
    <div className="rounded-xl p-2 shadow-sm bg-(--brand-tertiary) min-w-[250px] flex-1">
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
        <Image
          src={src}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2 text-center text-2xl font-medium font-brand text-zinc-100">
        {name}{desc ? ":" : ""}
      </div>
      <div className="mt-2 text-center text-lg font-medium font-brand text-zinc-100">
        {desc}
      </div>
    </div>
  );
}
