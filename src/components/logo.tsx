import Link from "next/link";

type LogoProps = {
  invert?: boolean;
  href?: string;
};

export function Logo({ invert = false, href = "/" }: LogoProps) {
  return (
    <Link href={href} className="group inline-flex items-baseline gap-2">
      <span
        className={`text-[13px] font-medium tracking-[0.28em] ${
          invert ? "text-background" : "text-foreground"
        }`}
      >
        AVIEN
      </span>
      <span
        className="inline-block h-[3px] w-[3px] translate-y-[-1px] rounded-full bg-champagne"
        aria-hidden
      />
    </Link>
  );
}
