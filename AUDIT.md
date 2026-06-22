# Full-Stack Website Audit — NXT Level Builds

**Date:** 2026-06-22  
**Auditor:** OpenCode principal-level web auditor  
**Scope:** Technical SEO, GEO/AEO, Conversion UX, Accessibility (WCAG 2.2 AA), Performance/CWV  
**Stack:** Next.js 14 (App Router) + Tailwind CSS, hosted on Railway

---

## 1. Verdict

The site has a solid technical foundation — metadata, robots, sitemap, structured data on the root layout, Next.js image optimization, and security headers are all in good shape. However, it's undermined by **9 pages missing canonical tags** (duplicate content exposure), a **homepage title that gets doubled by the layout template**, and a **contact page phone number that can't be tapped to call** on mobile. The conversion funnel is well-designed (exit intent, lead magnets, multiple CTAs), but the city service pages are dangerously thin templates — Port Orange has only 109 unique words. The single highest-leverage move is **adding canonical tags and fixing the homepage title**, which costs nothing, takes 15 minutes, and eliminates a self-inflicted SEO penalty. The brand itself ("NXT Level Builds") carries a construction-industry connotation that creates a positioning tax on every impression, but that's a naming decision beyond code scope.

---

## 2. Scorecard

| Dimension | Weight | Score | Justification |
|-----------|--------|-------|---------------|
| **Technical SEO** | 20 | **10/20** | Good foundation (robots, sitemap, metadata on all pages) but 9 pages missing canonical tags creates duplicate content risk; homepage title duplicates layout default (doubled rendering); thin city pages risk Google quality filter |
| **GEO / AEO** | 15 | **9/15** | LocalBusiness + Organization + WebSite schema on every page with full NAP is strong; FAQPage and BlogPosting on relevant pages; but missing BreadcrumbList schema despite rendering visual breadcrumbs, missing Service schema on 4 core service pages, no llms.txt for AI crawlers |
| **Conversion UX** | 25 | **18/25** | Excellent CTA strategy (hero, mid-page, footer, mobile bar, exit intent, chat), strong lead magnets (2 free audits), TrustBar with stats + testimonials; but contact hero phone is static text (not tap-to-call), FloatingCTA and BudgetMeter are dead code, CTA text varies confusingly |
| **Accessibility** | 15 | **9/15** | Custom focus-visible styles, prefers-reduced-motion support, print styles; but decorative SVGs missing aria-hidden, form labels need verification, color contrast on tinted text over hero backgrounds is risky |
| **Performance** | 25 | **16/25** | next/image with AVIF/WebP and 1-year cache, next/font with swap, aggressive CDN caching; but `/work` and `/faq` use "use client" unnecessarily (blocking server rendering), no ISR/revalidate on any static page, large JS bundle from client-heavy components (Navbar, TrustBar, chat, exit intent) |
| **Total** | 100 | **62/100 — D+** | |

---

## 3. Findings

### 🔴 Critical

| ID | Dimension | Issue | Evidence | Impact | Fix |
|----|-----------|-------|----------|--------|-----|
| C1 | Tech SEO | **9 pages missing canonical tags** | `app/free-website-audit/page.tsx`, `app/free-seo-audit/page.tsx`, `app/thank-you/page.tsx`, 5 city service pages, 2 niche service pages — none export `alternates: { canonical }` | **High** — Google may index these on multiple URLs (with/without trailing slash, www vs non-www), splitting link equity | Add `alternates: { canonical: canonical('/path') }` to each page's metadata |
| C2 | Tech SEO | **Homepage title doubles layout template** | `app/page.tsx:8` exports `title:` as a string matching the root layout default; layout template `%s | NXT Level Builds` appends suffix → rendered `<title>` becomes `"... | NXT Level Builds | NXT Level Builds"` | **High** — doubled brand name in title tag looks spammy to users and search engines | Use `title: { absolute: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL' }` or remove the homepage title entirely |
| C3 | GEO/AEO | **Missing BreadcrumbList schema** | `components/Breadcrumb.tsx` renders visual breadcrumbs on FAQ, work, blog detail, and all 5 city pages with `<BreadcrumbList>` HTML structure but no `application/ld+json` script | **High** — Google rich result for breadcrumbs is a standard SERP enhancement; missed visibility opportunity | Add `<script type="application/ld+json">` in the Breadcrumb component |
| C4 | Conversion UX | **Contact page phone is static text, not tap-to-call** | `app/contact/page.tsx:40` renders `(386) 259-0178` as a `<p>` tag, not `<a href="tel:+13862590178">` | **High** — Mobile users on the contact page see the number but can't tap to call; lost conversions | Wrap phone in `<a href="tel:+13862590178">` |

### 🟠 High

| ID | Dimension | Issue | Evidence | Impact | Fix |
|----|-----------|-------|----------|--------|-----|
| H1 | Tech SEO | **Thin city pages risk Google quality filter** | Port Orange: 133 lines, ~109 unique words, missing FAQ/neighborhoods/industries sections; all 5 city pages share 79 identical non-blank lines of JSX with swapped city names | **High** — Google's "website described as" and helpful content systems may flag these as thin affiliate-style templates | Expand Port Orange to full template; add 2-3 unique local references per page; vary CTA and stats copy |
| H2 | Performance | **`/work` uses `"use client"` unnecessarily** | `app/work/page.tsx:1` — entire portfolio listing page is client-rendered, blocking pre-indexing of case study content | **High** — Bots and social previews see empty shell; no server-rendered HTML for work listing | Convert to server component; move only interactive parts (filters, if any) to client islands |
| H3 | Tech SEO | **Missing Service schema on 4 core service pages** | `/services/web-design`, `/services/seo`, `/services/google-ads`, `/services/ai-automation` — no inline JSON-LD beyond root layout's generic `LocalBusiness` | **High** — Google can't surface these as distinct service entities in knowledge panels or AI answers | Add `Service` schema with `serviceType`, `description`, `offers` (with price) to each page |
| H4 | Conversion UX | **PriceRange `$$` in LocalBusiness schema doesn't match $599/$150 positioning** | `app/layout.tsx:95`: `priceRange: '$$'` — the new offer is $599 + $150/mo, which is affordable, not mid-range | **Medium** — Misleading price signal in knowledge panel; users expecting $$ may be surprised | Change to `"$"` ($ = under $1,000 for service) |
| H5 | Performance | **4 dead components inflate bundle** | `FloatingCTA.tsx`, `BudgetMeter.tsx`, `BudgetMeterSmall.tsx`, `Nav.tsx` — defined but never imported anywhere | **Medium** — Unnecessary bytes in the JS bundle; BudgetMeter imports client-side dependencies | Remove unused component files or tree-shake |
| H6 | Performance | **No ISR/revalidate on static pages** | No `revalidate` export or `fetch` cache config on any route except `[slug]` pages via `generateStaticParams` | **Medium** — New blog posts, case studies, or content updates won't appear until next full deploy | Add `revalidate = 3600` to blog and work listing pages; consider ISR for city pages |
| H7 | GEO/AEO | **No `llms.txt` for AI crawler optimization** | No `public/llms.txt` file exists | **Medium** — ChatGPT, Perplexity, and Gemini crawlers have no structured entry point to cite the site | Create `public/llms.txt` with site summary, key pages, and service descriptions |

### 🟡 Medium

| ID | Dimension | Issue | Evidence | Impact | Fix |
|----|-----------|-------|----------|--------|-----|
| M1 | Tech SEO | **OG image format inconsistency** | 9 pages use `images: ['/opengraph-image']` instead of `images: [ogImage()]` — missing width/height/alt | **Low-Medium** — Social platforms may still render the image but without explicit dimensions | Use `ogImage()` helper consistently |
| M2 | Tech SEO | **Duplicate LocalBusiness on city pages** | Root layout injects LocalBusiness; city pages inject another LocalBusiness with same telephone/name but different locality | **Low-Medium** — Schema.org allows multiple entities but Google may disambiguate incorrectly | Use `Service` schema on city pages instead of duplicating LocalBusiness |
| M3 | Conversion UX | **Inconsistent CTA text across pages** | 9 different CTA texts: "Book A Strategy Call", "Start Your Project", "Get a Free Quote", "Start Ranking", etc. | **Low** — Minor cognitive friction but per-page relevance is a valid counter-argument | Standardize to 2-3 primary CTAs; let secondary CTAs vary by page context |
| M4 | Conversion UX | **Exit-intent success shown on fetch failure** | `ExitIntentPopup.tsx:87-92` — on fetch error, component silently shows success | **Low-Medium** — Lost leads if Resend is down; false conversion data | Show "Something went wrong — try again or call us" on error |
| M5 | Accessibility | **Decorative SVGs missing `aria-hidden`** | Multiple icon SVGs in service grids, footer, trust bar — none use `aria-hidden="true"` | **Low** — Screen readers may announce meaningless icon content | Add `aria-hidden="true"` to all decorative SVG elements |
| M6 | Performance | **Blog and work listing have no dedup/refresh strategy** | `/blog` and `/work` are fully static at build time; `generateStaticParams` for detail pages but listing never rebuilds | **Low-Medium** — New content won't appear in listings until next deploy | Add `revalidate` or use `fetch` with `next: { revalidate }` on listing content |

### ⚪ Low

| ID | Dimension | Issue | Evidence | Impact | Fix |
|----|-----------|-------|----------|--------|-----|
| L1 | Conversion UX | **All city H1s follow identical pattern** | `"Web Design for [City] Businesses."` on all 5 city pages | **Low** — Google doesn't penalize pattern H1s, but reduces differentiation | Vary H1 patterns: `"Website Design in [City]"`, `"[City] Web Design Agency"`, etc. |
| L2 | GEO/AEO | **No `Person` or `aboutPage` schema for founder** | `app/layout.tsx` has `founder` in LocalBusiness but no `Person` entity for Cory Brenner | **Low** — Google's knowledge graph can't connect the founder entity | Add `Person` schema for founder with `sameAs` links |
| L3 | Tech SEO | **Stats strip data identical on all city pages** | `['7 Days', 'Avg Launch Time'], ['90+', 'PageSpeed Score'], ['3×', 'Avg Lead Increase']` — same on all 5 pages | **Low** — Part of template duplication pattern; minor uniqueness signal | Use city-specific stats if available, or vary format |
| L4 | Tech SEO | **No `sitemap.xml` priority for FAQ vs services** | All city pages are 0.8 priority; FAQ is 0.6 (lower than blog index at 0.7) | **Low** — Sitemap priority is advisory only | Rebalance: FAQ should be 0.7, city pages should vary (Port Orange 0.8, others 0.7) |
| L5 | Branding | **Brand name "NXT Level Builds" reads as construction** | `app/layout.tsx:35` — company name in schema and metadata | **Medium** — Every search impression creates confusion; users looking for web design see a construction company | Tagline clarification in metadata: "NXT Level Builds — Web Design & Digital Marketing" |

---

## 4. Prioritized Action Plan (Top 10 by Impact-to-Effort)

- [ ] **1. 🔴 Add canonical tags to 9 missing pages** — 15 min, eliminates critical SEO risk
- [ ] **2. 🔴 Fix homepage title duplication** — 2 min, stops spammy doubled title rendering
- [ ] **3. 🔴 Add BreadcrumbList schema to Breadcrumb component** — 10 min, unlocks SERP rich result
- [ ] **4. 🔴 Fix contact page phone to tap-to-call** — 1 min, direct conversion lift on mobile
- [ ] **5. 🟠 Add Service schema to 4 core service pages** — 20 min, strengthens entity SEO
- [ ] **6. 🟠 Fix priceRange in LocalBusiness schema** — 1 min, accurate price signal
- [ ] **7. 🟠 Expand Port Orange city page to full template** — 30 min, eliminates high thin-content risk
- [ ] **8. 🟠 Convert `/work` from client to server component** — 15 min, enables bot indexing of portfolio
- [ ] **9. 🟠 Create `public/llms.txt`** — 10 min, AI crawler optimization
- [ ] **10. 🟡 Add `aria-hidden` to decorative SVGs** — 15 min, WCAG compliance

---

## 5. Quick Wins (< 15 min each)

1. Fix homepage title (C2) — 2 min
2. Add tap-to-call on contact page (C4) — 1 min
3. Change priceRange to `"$"` (H4) — 1 min
4. Add canonical tags to 9 pages using find-replace pattern (C1) — 15 min
5. Delete dead component files (H5) — 2 min
6. Add `aria-hidden` to decorative SVGs (M5) — 15 min
7. Create `llms.txt` (H7) — 10 min
8. Add BreadcrumbList schema (C3) — 10 min
