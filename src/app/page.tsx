import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroSearch } from "@/components/hero-search";
import { SectionReveal } from "@/components/scroll-animations";

const problems = [
  {
    n: "01",
    title: "The catalog is a search engine now",
    body: "Finding an API still means Google, stale directories, and vendor blogs written to rank. The job you are actually shipping gets lost in SEO.",
  },
  {
    n: "02",
    title: "The constraints live in footnotes",
    body: "Auth model, region, rate limits, sandbox quality, and pricing are never on the first page. Developers discover blockers after a day of docs.",
  },
  {
    n: "03",
    title: "Comparison is unpaid research",
    body: "Stripe versus Razorpay, Auth0 versus Clerk, Twilio versus a local SMS gateway — the comparison matrix is rebuilt from scratch on every project.",
  },
];

const features = [
  {
    title: "Intent-first search",
    body: "Describe the product, not the vendor. \u201cUPI payouts with webhooks\u201d is a better query than a brand name.",
  },
  {
    title: "Structured index",
    body: "Every API is filed with category, auth, pricing, region, and the job it actually does — not a marketing blurb.",
  },
  {
    title: "Honest constraints",
    body: "See authentication, commercial model, and geography before you open a tab. Fewer surprises after the sandbox.",
  },
  {
    title: "Shortlists, not dumps",
    body: "AVIEN returns a few APIs that fit. It is not a marketplace homepage competing for your attention.",
  },
  {
    title: "A concierge in the margin",
    body: "Ask in plain language. The assistant stays inside the index. It will not invent a vendor to sound helpful.",
  },
  {
    title: "Built for the stack",
    body: "Payments, identity, maps, messaging, storage, models, commerce, data. The boring infrastructure that ships products.",
  },
];

const steps = [
  {
    n: "01",
    title: "Describe the work",
    body: "One sentence about the feature. Region and constraints if you have them.",
  },
  {
    n: "02",
    title: "Read the shortlist",
    body: "APIs ranked by job-to-be-done, with auth and pricing visible without leaving the page.",
  },
  {
    n: "03",
    title: "Open the docs",
    body: "Leave AVIEN for the official reference — not a scraped mirror. Integrate with the source of truth.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">
          <div className="hero-reveal">
            <p className="mb-8 flex items-center gap-3 text-[11px] tracking-[0.28em] text-champagne">
              API INTELLIGENCE
              <span className="h-px w-10 bg-champagne" />
            </p>
            <h1 className="serif-heading max-w-3xl text-5xl leading-[1.08] tracking-tight text-foreground md:text-7xl">
              Find the API
              <br />
              behind your{" "}
              <span className="serif-accent italic font-normal">idea.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-secondary">
              AVIEN is for developers who are tired of hunting infrastructure.
              Say what you are building. Receive the APIs that fit the job —
              quietly, precisely, without a marketplace shouting over the result.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/discover"
                className="btn-primary group rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-primary-hover"
              >
                Find APIs{" "}
                <span className="arrow-hover ml-1 inline-block">→</span>
              </Link>
              <Link
                href="/#product"
                className="link-underline px-2 py-3 text-sm text-secondary transition-colors hover:text-foreground"
              >
                What AVIEN is
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator mt-16 flex justify-center text-muted md:mt-20">
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 4 L10 20" />
              <path d="M4 16 L10 22 L16 16" />
            </svg>
          </div>
        </section>

        {/* ── Problem ── */}
        <SectionReveal>
          <section id="problem" className="border-y border-border bg-surface">
            <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
              <p className="text-[11px] tracking-[0.28em] text-champagne">THE PROBLEM</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Shipping software means stitching APIs.
                <span className="mt-2 block serif-accent italic font-normal text-secondary">
                  Finding them is still folklore.
                </span>
              </h2>
              <div className="mt-16 grid gap-6 md:grid-cols-3">
                {problems.map((item) => (
                  <article
                    key={item.n}
                    className="card-lift rounded-sm border border-border bg-surface p-7 shadow-[0_8px_30px_rgba(23,23,23,0.04)]"
                  >
                    <p className="text-[11px] tracking-[0.2em] text-champagne">{item.n}</p>
                    <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* ── Product ── */}
        <SectionReveal>
          <section id="product" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
            <p className="text-[11px] tracking-[0.28em] text-champagne">WHAT AVIEN IS</p>
            <div className="mt-4 grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <h2 className="serif-heading text-3xl tracking-tight md:text-4xl">
                  An intelligence layer
                  <br />
                  over public APIs.
                </h2>
                <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-secondary">
                  AVIEN does not sell endpoints. It does not bury results under
                  featured listings. You describe a capability — payments in India,
                  hosted login, transactional email, maps with routing — and AVIEN
                  maps that intent onto a curated index.
                </p>
                <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-secondary">
                  The point is speed with taste. Fewer tabs. Fewer dead ends.
                  A shortlist you can defend in a design review.
                </p>
              </div>
              <aside className="card-lift rounded-sm border border-border bg-surface p-8 shadow-[0_8px_30px_rgba(23,23,23,0.04)]">
                <p className="text-[11px] tracking-[0.2em] text-muted">IT SOLVES</p>
                <ul className="mt-6 space-y-5 text-sm leading-relaxed text-secondary">
                  <li className="border-b border-border pb-5">
                    Hours of unstructured research before the first request is sent.
                  </li>
                  <li className="border-b border-border pb-5">
                    Choosing a vendor that fails a regional or auth constraint late.
                  </li>
                  <li>
                    Treating API discovery like shopping instead of engineering.
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </SectionReveal>

        {/* ── Dark search CTA ── */}
        <SectionReveal>
          <section className="bg-foreground text-background">
            <div className="mx-auto max-w-6xl px-6 py-28 md:py-32">
              <p className="text-[11px] tracking-[0.32em] text-champagne">
                FIND THE API YOU NEED.
              </p>
              <h2 className="serif-heading mt-6 max-w-2xl text-3xl tracking-tight md:text-5xl">
                Describe what you&apos;re building.
              </h2>
              <HeroSearch variant="dark" />
            </div>
          </section>
        </SectionReveal>

        {/* ── Features ── */}
        <SectionReveal>
          <section id="features" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
            <p className="text-[11px] tracking-[0.28em] text-champagne">FEATURES</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
              Quiet tools.{" "}
              <span className="serif-accent italic font-normal">Serious infrastructure.</span>
            </h2>
            <div className="mt-16 grid gap-px rounded-sm bg-border md:grid-cols-2">
              {features.map((feature) => (
                <article key={feature.title} className="bg-background p-8 md:p-10">
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </SectionReveal>

        {/* ── How it works ── */}
        <SectionReveal>
          <section className="border-t border-border bg-surface">
            <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
              <p className="text-[11px] tracking-[0.28em] text-champagne">HOW IT WORKS</p>
              <div className="mt-12 grid gap-12 md:grid-cols-3">
                {steps.map((step) => (
                  <article key={step.n}>
                    <p className="text-[11px] tracking-[0.2em] text-champagne">{step.n}</p>
                    <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* ── Bottom CTA ── */}
        <SectionReveal>
          <section className="mx-auto max-w-6xl px-6 py-28 text-center md:py-32">
            <h2 className="serif-heading text-3xl tracking-tight md:text-4xl">
              Stop browsing.{" "}
              <span className="serif-accent italic font-normal">Start specifying.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-secondary">
              Open Discover and write the sentence you would write in a spec.
              AVIEN will do the rest of the hunting.
            </p>
            <Link
              href="/discover"
              className="btn-primary group mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-background hover:bg-primary-hover"
            >
              Open Discover{" "}
              <span className="arrow-hover ml-1 inline-block">→</span>
            </Link>
          </section>
        </SectionReveal>
      </main>
      <SiteFooter />
    </>
  );
}
