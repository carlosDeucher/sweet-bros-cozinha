import type { ReactNode } from "react";

type SubsectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Subsection({ id, title, children }: SubsectionProps) {
  return (
    <div id={id} className="space-y-3">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      {children}
    </div>
  );
}
