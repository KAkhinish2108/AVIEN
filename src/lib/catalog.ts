export type ApiAuth = "None" | "API key" | "OAuth 2.0" | "Bearer";
export type ApiPricing = "Free" | "Freemium" | "Usage-based";

export type ApiEntry = {
  id: string;
  name: string;
  category: string;
  summary: string;
  auth: ApiAuth;
  pricing: ApiPricing;
  region: string;
  docs: string;
  tags: string[];
};

export const categories = [
  "Payments",
  "Identity",
  "Maps",
  "Messaging",
  "Storage",
  "AI",
  "Commerce",
  "Data",
] as const;

export const catalog: ApiEntry[] = [
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    summary: "Cards, wallets, subscriptions, and payouts with a mature sandbox.",
    auth: "API key",
    pricing: "Usage-based",
    region: "Global",
    docs: "https://stripe.com/docs/api",
    tags: ["payments", "billing", "subscriptions", "checkout"],
  },
  {
    id: "razorpay",
    name: "Razorpay",
    category: "Payments",
    summary: "UPI, cards, and Indian payouts with local payment methods first.",
    auth: "API key",
    pricing: "Usage-based",
    region: "India",
    docs: "https://razorpay.com/docs/",
    tags: ["upi", "india", "payments", "payouts"],
  },
  {
    id: "auth0",
    name: "Auth0",
    category: "Identity",
    summary: "Hosted login, social providers, and enterprise SSO without building auth.",
    auth: "OAuth 2.0",
    pricing: "Freemium",
    region: "Global",
    docs: "https://auth0.com/docs",
    tags: ["auth", "sso", "login", "identity"],
  },
  {
    id: "clerk",
    name: "Clerk",
    category: "Identity",
    summary: "Drop-in user management for modern web apps, with components included.",
    auth: "API key",
    pricing: "Freemium",
    region: "Global",
    docs: "https://clerk.com/docs",
    tags: ["auth", "users", "session", "react"],
  },
  {
    id: "mapbox",
    name: "Mapbox",
    category: "Maps",
    summary: "Custom maps, geocoding, and routing for products that need a spatial layer.",
    auth: "API key",
    pricing: "Freemium",
    region: "Global",
    docs: "https://docs.mapbox.com/api/",
    tags: ["maps", "geocoding", "routing", "location"],
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "Messaging",
    summary: "SMS, WhatsApp, voice, and verify flows from one programmable stack.",
    auth: "API key",
    pricing: "Usage-based",
    region: "Global",
    docs: "https://www.twilio.com/docs",
    tags: ["sms", "whatsapp", "otp", "voice"],
  },
  {
    id: "resend",
    name: "Resend",
    category: "Messaging",
    summary: "Transactional email with a developer-first API and React templates.",
    auth: "API key",
    pricing: "Freemium",
    region: "Global",
    docs: "https://resend.com/docs",
    tags: ["email", "transactional", "notifications"],
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    category: "Storage",
    summary: "Media upload, transformation, and CDN delivery without a custom pipeline.",
    auth: "API key",
    pricing: "Freemium",
    region: "Global",
    docs: "https://cloudinary.com/documentation",
    tags: ["images", "video", "cdn", "upload"],
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI",
    summary: "Text, vision, and embeddings when your product needs a general model.",
    auth: "Bearer",
    pricing: "Usage-based",
    region: "Global",
    docs: "https://platform.openai.com/docs",
    tags: ["llm", "chat", "embeddings", "ai"],
  },
  {
    id: "shopify",
    name: "Shopify Admin",
    category: "Commerce",
    summary: "Products, orders, and storefront data for apps that sit on Shopify.",
    auth: "OAuth 2.0",
    pricing: "Free",
    region: "Global",
    docs: "https://shopify.dev/docs/api",
    tags: ["ecommerce", "orders", "catalog", "store"],
  },
  {
    id: "openweather",
    name: "OpenWeather",
    category: "Data",
    summary: "Current weather and forecasts when location context matters.",
    auth: "API key",
    pricing: "Freemium",
    region: "Global",
    docs: "https://openweathermap.org/api",
    tags: ["weather", "forecast", "climate"],
  },
  {
    id: "plaid",
    name: "Plaid",
    category: "Payments",
    summary: "Bank linking, balances, and identity for fintech onboarding.",
    auth: "API key",
    pricing: "Usage-based",
    region: "US / EU",
    docs: "https://plaid.com/docs/",
    tags: ["banking", "fintech", "kyc", "accounts"],
  },
];

const STOP = new Set([
  "a",
  "an",
  "the",
  "for",
  "to",
  "of",
  "and",
  "in",
  "with",
  "on",
  "my",
  "our",
  "i",
  "need",
  "want",
  "app",
  "api",
  "apis",
]);

export function searchCatalog(query: string, category = "All") {
  const q = query.trim().toLowerCase();
  const words = q.split(/\s+/).filter((word) => word.length > 1 && !STOP.has(word));

  return catalog
    .filter((api) => {
      const inCategory = category === "All" || api.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      const hay = [api.name, api.summary, api.category, api.region, ...api.tags]
        .join(" ")
        .toLowerCase();
      if (hay.includes(q)) return true;
      if (!words.length) return true;
      return words.some((word) => hay.includes(word));
    })
    .sort((a, b) => score(b, words) - score(a, words));
}

function score(api: ApiEntry, words: string[]) {
  if (!words.length) return 0;
  const hay = [api.name, api.summary, api.category, api.region, ...api.tags]
    .join(" ")
    .toLowerCase();
  return words.reduce((total, word) => total + (hay.includes(word) ? 1 : 0), 0);
}
