# AVIEN

### AI-Powered API Discovery Platform

> **Describe what you're building. AVIEN finds the APIs you need.**

AVIEN is an AI-powered API discovery platform built to help developers find, understand, compare, and start using the right APIs for their projects.

Instead of requiring developers to already know which API they need, AVIEN lets them describe their requirements in natural language and intelligently recommends relevant APIs from a curated database.

---

## 🚀 The Problem

Developers often know **what they want to build**, but don't know **which API they should use**.

Finding the right API usually means:

- Searching Google
- Browsing multiple API directories
- Comparing different providers
- Checking pricing
- Checking free tiers
- Reading documentation
- Finding integration examples

Traditional API directories mainly help users **browse APIs**.

AVIEN focuses on a different problem:

> **"Which APIs do I actually need for what I'm building?"**

---

## 💡 The Solution

AVIEN allows developers to describe their project or requirement in natural language.

For example:

> "I'm building a food delivery app and need payment, maps and SMS APIs."

AVIEN understands the requirement and recommends relevant APIs.

Users can then:

- 🔎 Search APIs
- 🗂️ Browse API categories
- 🤖 Get AI-powered recommendations
- 💡 Understand why an API was recommended
- ⚖️ Compare APIs
- 💰 Check pricing and free tiers
- 📚 Access documentation
- 💻 Get integration code snippets

---

## ✨ Features

### 🔎 API Directory

Browse a curated collection of APIs across multiple categories.

Each API includes:

- Name
- Description
- Category
- Pricing
- Free tier
- API type
- Documentation
- Integration examples

---

### 🗂️ Categories

Explore APIs by category:

- AI & Machine Learning
- Payments
- Maps & Location
- Weather
- Communication
- Authentication
- Finance
- Social Media
- Search
- Storage
- Email
- Images & Media
- News
- Developer Tools

---

### 🔍 Search

Search APIs using keywords such as:

```text
weather
payments
OCR
maps
voice
email
translation
AI
authentication

```

User Query
    ↓
Intent Extraction
    ↓
Requirement Detection
    ↓
API Database Search
    ↓
Relevance Matching
    ↓
Recommended APIs


# Architecture

                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ AVIEN Frontend│
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  Next.js API  │
                    │     Route     │
                    └───────┬───────┘
                            │
                  ┌─────────┴─────────┐
                  ▼                   ▼
          ┌───────────────┐   ┌───────────────┐
          │  OpenAI API   │   │   Supabase    │
          │               │   │   PostgreSQL  │
          └───────┬───────┘   └───────┬───────┘
                  │                   │
                  ▼                   ▼
          ┌─────────────────────────────────┐
          │      Intent + API Matching      │
          └───────────────┬─────────────────┘
                          │
                          ▼
                  ┌───────────────┐
                  │ Recommendations│
                  └───────┬───────┘
                          │
                          ▼
                    ┌───────────────┐
                    │     User      │
                    └───────────────┘







# Project Structure
avien/
│
├── app/
│   ├── page.tsx
│   ├── apis/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── compare/
│   │   └── page.tsx
│   │
│   └── api/
│       └── discover/
│           └── route.ts
│
├── components/
│   ├── navbar.tsx
│   ├── hero-search.tsx
│   ├── api-card.tsx
│   ├── api-grid.tsx
│   ├── category-filter.tsx
│   ├── recommendation-card.tsx
│   ├── comparison-table.tsx
│   ├── code-snippet.tsx
│   └── loading-state.tsx
│
├── lib/
│   ├── openai.ts
│   ├── supabase.ts
│   └── matching.ts
│
├── data/
│   └── apis.json
│
├── types/
│   └── api.ts
│
└── README.md


# Current MVP Scope
## Included
API Directory
Categories
Search
API Details
Natural-Language API Finder
AI Recommendations
API Comparison
Pricing / Free Tier
Documentation
Code Snippets
"Why This API?"
Responsive UI
Animations
Not Included in MVP
Authentication
User profiles
API marketplace
Payments
API monitoring
API playground
API key management
Usage analytics
Reviews and ratings
Advanced ML recommendation system
Provider dashboard
Mobile application
Dynamic pricing scraping

These features may be considered in future versions.

# 🗺️ Future Roadmap
## Phase 1 — Hackathon MVP
AI API discovery
Curated API directory
Search
Comparison
Code snippets
Pricing information
## Phase 2 — Discovery Intelligence
1,500+ APIs
Better recommendations
API alternatives
Curated collections
Advanced filters
API reliability information
SEO-focused API pages
## Phase 3 — API Platform
Provider onboarding
API marketplace
Developer accounts
Usage analytics
Saved APIs
Personalized recommendations
## Phase 4 — AI & Agent Ecosystem
AI agent/tool discovery
MCP ecosystem discovery
Automated API evaluation
API quality intelligence
Automated API metadata collection
🎯 Hackathon Demo

Example query:

"I'm building a food delivery application and need payment, maps, and SMS APIs."

AVIEN will:

Understand the requirements
Find relevant APIs
Recommend APIs
Explain why they match
Show pricing and free tiers
Provide documentation
Show integration snippets
Allow API comparison
Core Demo Flow
Describe
   ↓
Discover
   ↓
Understand
   ↓
Compare
   ↓
Integrate
🏆 What Makes AVIEN Different?

Traditional API directories generally answer:

"Here are APIs you can search through."

AVIEN aims to answer:

"Tell me what you're building, and I'll help you find the APIs you need."

That is the core idea behind AVIEN.

📌 Project Status

Status: 🚧 Hackathon MVP

AVIEN is currently being developed as a rapid MVP focused on validating the core API discovery experience.

🤝 Contributing

Contributions, ideas, and feedback are welcome.

If you'd like to contribute:

Fork the repository
Create a feature branch
Make your changes
Commit your changes
Open a Pull Request
## 📄 License

License information will be added as the project evolves.

AVIEN
Describe what you're building. AVIEN finds the APIs you need.

Discover. Understand. Compare. Integrate.

