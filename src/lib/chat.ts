import { catalog, searchCatalog, type ApiEntry } from "./catalog";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function formatApis(apis: ApiEntry[]) {
  if (!apis.length) {
    return "I could not match that to the current index. Try a job-to-be-done instead of a vendor — for example, “UPI payments in India” or “transactional email.”";
  }

  return apis
    .slice(0, 4)
    .map(
      (api) =>
        `• ${api.name} — ${api.summary} Auth: ${api.auth}. Pricing: ${api.pricing}. Region: ${api.region}.`,
    )
    .join("\n");
}

export function localConciergeReply(history: ChatMessage[]): string {
  const last = history.filter((m) => m.role === "user").at(-1)?.content ?? "";
  const text = last.toLowerCase();

  if (
    /what is avien|who are you|about avien|tell me about/.test(text) ||
    text.trim() === "avien"
  ) {
    return "AVIEN is an API intelligence layer for builders. You describe the product, feature, or constraint — not a vendor name — and AVIEN returns APIs that actually fit the job. It is not a marketplace. It is a quieter way to find infrastructure.";
  }

  if (/problem|pain|why|waste|hard to find/.test(text)) {
    return "The usual path is still Google, blog posts, and noisy catalogs. Docs disagree, pricing is buried, auth models differ, and regional support is a footnote. Developers lose hours comparing tools that were never going to work for their constraint. AVIEN starts from the job, then maps it to structured APIs.";
  }

  if (/feature|what can|capabilities/.test(text)) {
    return "Today you can: describe a product in natural language, search a structured index, filter by category, compare auth and pricing at a glance, and ask this concierge for a shortlist. Live model ranking will connect when you add a key — until then I answer from AVIEN’s local index.";
  }

  if (/how (do|does|to)|get started|use avien/.test(text)) {
    return "Open Discover. Write the thing you are shipping in a sentence. Example: “I need OTP over WhatsApp for an India-first app.” AVIEN ranks APIs by job, region, auth, and pricing. Open a result for docs. Keep this panel open if you want a tighter shortlist.";
  }

  const matches = searchCatalog(last);
  if (matches.length) {
    return `From the current index, these fit what you described:\n\n${formatApis(matches)}\n\nOpen Discover to filter by category, auth, or region.`;
  }

  if (/hello|hi\b|hey/.test(text)) {
    return "Hello. I am the AVIEN concierge. Tell me what you are building — a payment flow, identity, maps, email — and I will point you at APIs from the index.";
  }

  const featured = catalog.slice(0, 3);
  return `I stay inside AVIEN’s index, so I will not invent vendors. Try naming the job: payments, identity, maps, messaging, storage, AI, commerce, or data.\n\nA few starting points:\n${formatApis(featured)}`;
}
