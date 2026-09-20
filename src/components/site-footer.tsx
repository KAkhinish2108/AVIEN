import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-secondary">
            API intelligence for builders. Describe the work. Receive the
            infrastructure.
          </p>
        </div>
        <div className="flex gap-10 text-[13px] text-secondary">
          <Link href="/#problem" className="link-underline hover:text-foreground">
            Problem
          </Link>
          <Link href="/#features" className="link-underline hover:text-foreground">
            Features
          </Link>
          <Link href="/discover" className="link-underline hover:text-foreground">
            Discover
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-border px-6 py-6 text-[11px] tracking-wide text-muted">
        <span>© {new Date().getFullYear()} AVIEN</span>
        <span className="flex items-center gap-3">
          Ivory
          <span className="h-px w-6 bg-champagne" />
          Obsidian
        </span>
      </div>
    </footer>
  );
}
