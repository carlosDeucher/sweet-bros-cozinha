import type { ReactNode } from "react";

type ItemsGridProps = {
  children: ReactNode;
};

export default function ItemsGrid({ children }: ItemsGridProps) {
  return <div className="flex flex-row flex-wrap gap-y-4 gap-x-2">{children}</div>;
}
