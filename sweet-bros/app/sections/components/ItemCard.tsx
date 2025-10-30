import Image from "next/image";

type ItemCardProps = {
  name: string;
  src: string;
};

export default function ItemCard({ name, src }: ItemCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100">
        <Image src={src} alt={name} width={400} height={400} className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">{name}</div>
    </div>
  );
}
