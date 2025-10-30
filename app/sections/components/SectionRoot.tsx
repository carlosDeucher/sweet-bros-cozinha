import type { ReactNode } from "react";

type SectionRootProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function SectionRoot({ id, title, children }: SectionRootProps) {
  return (
    <section id={id} className="mt-10 space-y-4">
      <header className="text-center">
        <h2 className="font-brand text-3xl text-brand">{title}</h2>
      </header>
      {children}
    </section>
  );
}
