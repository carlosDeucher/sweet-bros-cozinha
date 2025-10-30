import * as React from "react";

type ButtonOwnProps = {
  variant?: "brand" | "outline" | "ghost" | "whatsapp" | "instagram";
  size?: "sm" | "md" | "lg";
  href?: string;
};

type ButtonProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps)
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonOwnProps);

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  className,
  variant = "brand",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-4 text-sm gap-2",
    md: "h-10 px-5 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2",
  };

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    brand: "text-black bg-brand/80 focus-visible:ring-brand",
    outline:
      "border border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 focus-visible:ring-brand",
    ghost:
      "bg-transparent text-zinc-100 hover:bg-zinc-800 focus-visible:ring-brand",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1ebe5b] focus-visible:ring-[#25D366]",
    instagram:
      "text-white bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] hover:opacity-90 focus-visible:ring-[#dd2a7b]",
  };
  const isLink = typeof (props as any).href === "string";
  if (isLink) {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonOwnProps;
    return (
      <a href={href} className={cn(base, sizes[size], variants[variant], className)} {...(rest as any)} />
    );
  }
  const rest = props as React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps;
  return <button className={cn(base, sizes[size], variants[variant], className)} {...(rest as any)} />;
}
