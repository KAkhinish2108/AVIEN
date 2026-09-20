import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DiscoverExperience } from "@/components/discover-experience";

export default function DiscoverPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="text-[11px] tracking-[0.28em] text-champagne">DISCOVER</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Describe the job.
          <span className="serif-accent font-normal"> Read the shortlist.</span>
        </h1>
        <p className="mt-4 max-w-xl text-secondary">
          Search the AVIEN index by intent, category, or constraint. Results are
          structured — not ranked by who paid to be first.
        </p>
        <Suspense fallback={<p className="mt-16 text-sm text-muted">Loading the index…</p>}>
          <DiscoverExperience />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
