import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "/#problem", label: "Problem" },
  { href: "/#product", label: "Product" },
  { href: "/#features", label: "Features" },
  { href: "/discover", label: "Discover" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-6 sm:flex md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/discover"
          className="bg-primary px-4 py-2 text-[13px] font-medium tracking-wide text-background transition-colors hover:bg-primary-hover"
        >
          Find APIs
        </Link>
      </div>
    </header>
  );
}
