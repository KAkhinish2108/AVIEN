"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSearch({ variant = "light" }: { variant?: "light" | "dark" }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const dark = variant === "dark";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/discover?q=${encodeURIComponent(q)}` : "/discover");
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-2xl">
      <label htmlFor="hero-q" className="sr-only">
        Describe what you are building
      </label>
      <div
        className={`flex flex-col gap-3 sm:flex-row sm:items-stretch ${
          dark ? "border-b border-white/15" : "border-b border-border"
        }`}
      >
        <input
          id="hero-q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="WhatsApp OTP for an India-first app"
          className={`min-w-0 flex-1 bg-transparent py-4 text-base outline-none ${
            dark
              ? "text-background placeholder:text-white/35"
              : "text-foreground placeholder:text-muted"
          }`}
        />
        <button
          type="submit"
          className="btn-primary group mb-3 shrink-0 self-end rounded-sm bg-primary px-5 py-2.5 text-[13px] font-medium tracking-wide text-background hover:bg-primary-hover sm:self-center"
        >
          Find APIs{" "}
          <span className="arrow-hover ml-0.5 inline-block">→</span>
        </button>
      </div>
    </form>
  );
}
