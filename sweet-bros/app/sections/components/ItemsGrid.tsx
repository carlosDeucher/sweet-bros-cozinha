import type { ReactNode } from "react";

type ItemsGridProps = {
  children: ReactNode;
};

export default function ItemsGrid({ children }: ItemsGridProps) {
  return <div className="grid grid-cols-2 gap-3">{children}</div>;
}
