import type { ReactNode } from "react";

type SubsectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Subsection({ id, title, children }: SubsectionProps) {
  return (
    <div id={id} className="space-y-3 mt-6">
      <h3 className="text-2xl font-semibold text-brand font-brand">{title}</h3>
      {children}
    </div>
  );
}
