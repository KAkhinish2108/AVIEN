"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories, searchCatalog } from "@/lib/catalog";

export function DiscoverExperience() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [submitted, setSubmitted] = useState(initial);
  const [category, setCategory] = useState("All");

  const results = useMemo(
    () => searchCatalog(submitted, category),
    [submitted, category],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = query.trim();
    setSubmitted(next);
    router.replace(next ? `/discover?q=${encodeURIComponent(next)}` : "/discover");
  }

  return (
    <div className="mt-12">
      <form onSubmit={onSubmit} className="rounded-sm border border-border bg-surface p-2 shadow-[0_8px_30px_rgba(23,23,23,0.04)] md:p-3">
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. bank linking for a fintech onboarding flow"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            className="btn-primary rounded-sm bg-primary px-5 py-3 text-[13px] font-medium tracking-wide text-background hover:bg-primary-hover"
          >
            Find APIs
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-wrap gap-2">
        {["All", ...categories].map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-sm border px-3 py-1.5 text-[12px] tracking-wide transition-colors ${
                active
                  ? "border-primary bg-primary text-background"
                  : "border-border bg-surface text-secondary hover:text-foreground"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <p className="mt-10 text-[12px] tracking-wide text-muted">
        {results.length} {results.length === 1 ? "API" : "APIs"} in view
      </p>

      <ul className="mt-4 grid gap-4">
        {results.map((api) => (
          <li
            key={api.id}
            className="card-lift rounded-sm border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(23,23,23,0.04)] md:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-medium">{api.name}</h2>
                  <span className="h-[3px] w-[3px] rounded-full bg-champagne" />
                  <span className="text-[12px] tracking-wide text-secondary">
                    {api.category}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary">
                  {api.summary}
                </p>
              </div>
              <a
                href={api.docs}
                target="_blank"
                rel="noreferrer"
                className="arrow-hover-self group text-[13px] text-primary hover:text-primary-hover"
              >
                Docs <span className="arrow-hover inline-block">→</span>
              </a>
            </div>
            <dl className="mt-6 grid gap-4 text-[12px] sm:grid-cols-3">
              <div>
                <dt className="tracking-[0.16em] text-muted">AUTH</dt>
                <dd className="mt-1 text-foreground">{api.auth}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-muted">PRICING</dt>
                <dd className="mt-1 text-foreground">{api.pricing}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-muted">REGION</dt>
                <dd className="mt-1 text-foreground">{api.region}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      {results.length === 0 && (
        <div className="mt-6 rounded-sm border border-border bg-surface px-6 py-16 text-center">
          <p className="text-foreground">Nothing in the index matches that sentence.</p>
          <p className="mt-2 text-sm text-secondary">
            Try the job instead of the brand — &ldquo;maps with routing&rdquo;, &ldquo;transactional email&rdquo;, &ldquo;UPI&rdquo;.
          </p>
        </div>
      )}
    </div>
  );
}
