# Per-Page Audit — NXT Level Builds

**Date:** 2026-08-06
**Scope:** All 24 page files. Reviewed technical SEO, conversion UX, content quality, schema, rendering, accessibility, and bugs on every route.

---

## Site-Wide Cross-Page Findings

These affect multiple pages and should be fixed once, everywhere:

| ID | Severity | Issue | Evidence |
|----|----------|-------|----------|
| S1 | 🔴 | **Pricing contradiction sitewide** — "$599 + $150/mo" (home `page.tsx:53`, web-design `:63`, FAQ visible `:21`, llms.txt) vs "$697/$997/$1,997/$2,497" (FAQ JSON-LD `faq/page.tsx:9`) vs "$997 5-page site" (blog `posts.ts:340`) | Multiple |
| S2 | 🔴 | **No inline click-to-call on any service/city page** — phone only in global Navbar/MobileBar/Footer, yet 3 city pages + contractors page *advertise* "click-to-call" as an included feature | DeLand `:111`, Ormond `:111`, Port Orange `:92`, Contractors `:36` |
| S3 | 🟠 | **Duplicate LocalBusiness entities** — root layout emits Daytona Beach LocalBusiness (`layout.tsx:61-107`); all 5 city pages emit a second one with same name/phone but different locality, no `@id`/geo | DeLand `:23-33` etc. |
| S4 | 🟠 | **PageSpeed stat inconsistency** — "100 PageSpeed Target" (home `:79`, web-design `:74`, Port Orange `:57`) vs "90+" (DeLand/NSB/Ormond/Palm Coast `:76`, FAQ `:40-41`, blog) | Multiple |
| S5 | 🟠 | **All titles render 70–90 chars** post-template (over ~60 best practice) because layout appends `| NXT Level Builds` | `layout.tsx:37` |
| S6 | 🟠 | **Contrast failure on every closing CTA** — `text-white/70` on `bg-accent` (#1a6eff) ≈ 2.2:1, fails WCAG AA | All 7 city/niche pages + 4 service pages |
| S7 | 🟠 | **Conflated client stats across pages** — Miller's "190%" labeled "Organic Leads" (Contractors `:42`), "Organic Lead Increase" (Home Services `:58`), but source case study says "organic inbound calls" (`projects.ts:48`); Summit "85% More Quote Requests" (Contractors `:43`) vs "85% More Form Submissions" (Port Orange `:112`) | Multiple |
| S8 | 🟡 | **h2→h4 heading skips** on all 4 service detail pages and About (values/team) | web-design `:95`, about `:115` |
| S9 | 🟡 | **No `FAQPage` schema** on any of the 4 city pages that render FAQ blocks | DeLand `:185-201` etc. |

---

## Page-by-Page

### `/` — Homepage `app/page.tsx`
- ✅ Title (absolute, deduped), description, canonical, 1 H1, clean heading nesting
- ✅ $599/$150 pricing with "simple sites" qualifier
- ⚠️ S1 pricing conflict (blog says $997); S4 PageSpeed "100"
- ⚠️ Hero paragraph `text-white/60` ≈ <3:1 contrast; stat labels `white/40` at 9-11px fail AA
- ⚠️ "100 PageSpeed Target" vs "90+" elsewhere
- ✅ No lorem, no broken links, server component

### `/about` — `app/about/page.tsx`
- ✅ Metadata, canonical, 1 H1, pure server component (no client JS!)
- ⚠️ **CTA below the fold** — hero has no CTA ("Let's Talk" at `:89`)
- ⚠️ **h2→h4 heading skip** (Values `:115`, Team `:135-162`)
- ⚠️ No `AboutPage`/`Person` schema for founder
- ⚠️ "Founded 2024" + "3 Yrs Industry Exp" — company is ~2 yrs old; "industry" defense works but is not stated

### `/contact` — `app/contact/page.tsx`
- ✅ Title, description (with phone), canonical, 1 H1
- ✅ **Phone/email now tap-to-call** (`:40-41`), form above fold on desktop
- 🔴 **Form labels not programmatically associated** — `<label>` without `htmlFor`/`id` on all inputs (`ContactForm.tsx:56-107`)
- ⚠️ No `ContactPage` schema

### `/faq` — `app/faq/page.tsx`
- ✅ FAQPage JSON-LD well-formed
- 🔴 **Title double-suffix bug** — layout title contains "| NXT Level Builds" (`faq/layout.tsx:5`) + root template appends it again → renders doubled brand
- 🔴 **Pricing contradiction within the same page** — visible answer says "$599/$150" (`:21`) but inline FAQPage JSON-LD says "$697/$997/$1,997/$2,497" (`:9`)
- ⚠️ Entire page is `'use client'` just for accordion; accordion buttons lack `aria-expanded`/`aria-controls`
- ⚠️ "View Pricing →" button lands on `/contact` (pricing page is now a redirect) — stale CTA

### `/blog` — `app/blog/page.tsx`
- ✅ Metadata, canonical, 1 H1, server component
- ⚠️ **Zero conversion elements** — no CTA, no phone, no newsletter
- ⚠️ No `Blog`/`ItemList` schema on the index
- ⚠️ Featured card hardcodes Google Ads SVG regardless of featured category (`:51`)

### `/blog/[slug]` — `app/blog/[slug]/page.tsx`
- ✅ SSG via `generateStaticParams`, per-post metadata/canonical, BlogPosting schema
- 🔴 **Schema image 404** — `https://nxtlevelbuilds.com/images/og-image.jpg` (`:54`) doesn't exist
- ⚠️ h2→h4 skip in related posts (`:187`)
- ⚠️ `cta_inline` renderer is dead code — no post uses it
- ⚠️ 2 buttons to the same `/contact` (redundant)
- ⚠️ S1: blog content still references $997 pricing

### `/work` — `app/work/page.tsx`
- 🔴 **Zero technical SEO** — it's `'use client'` (`:1`), so it CANNOT export metadata. Falls back to root defaults → same title/description as homepage, no canonical, no robots
- 🔴 **Empty featured video cell** — `featured.videoUrl` (`:111`) is never set in `projects.ts`; `CaseStudyVideo` renders `null` → empty left column on a 2-col grid
- ⚠️ Copy at `:107` hardcoded to project #1's narrative ("60 days")
- ⚠️ Stats "200+ Combined Years of Client Experience" (`:26`) is fluff

### `/work/[slug]` — `app/work/[slug]/page.tsx`
- ✅ Server component, SSG, per-project metadata/canonical, Article + BreadcrumbList schema
- 🔴 **Article schema image 404** — `images/og-image.jpg` (`:62`) doesn't exist
- ⚠️ `relatedService` data field set on 3 projects but never consumed (dead field)
- ⚠️ No tap-to-call
- 🔴 **Project data fabrication risk** — zero client URLs in `projects.ts` (no outbound links, no screenshots); testimonials unverified; Miller's claims "0 leads → 190% increase" (`:70,77` vs `:39,52`) — math meaningless from 0

### `/thank-you` — `app/thank-you/page.tsx`
- ✅ Metadata, canonical, tap-to-call, noindex
- ⚠️ **Contradiction** — in sitemap (`sitemap.ts:25`) but robots-disallowed (`robots.ts:9`) AND noindex. Google ignores canonicals on noindex pages

### `/free-website-audit` — `app/free-website-audit/page.tsx`
- ✅ Metadata, canonical, tap-to-call in form footer
- ⚠️ **Trailing space in title** (`:6`) — "...Getting Leads " before template suffix
- ⚠️ **Missing from sitemap** entirely
- ⚠️ Unverifiable claim "We review 5-8 sites per week" (`:55`)

### `/free-seo-audit` — `app/free-seo-audit/page.tsx`
- ✅ Metadata, canonical, tap-to-call
- ⚠️ **Missing from sitemap** entirely

### `/pricing` — `app/pricing/page.tsx`
- ✅ Clean 5-line redirect to `/contact`, no orphaned code
- ⚠️ **Stale inbound CTAs** — FAQ "View Pricing →" (`faq/page.tsx:125`) and blog `relatedService` (`posts.ts:322`) both land on `/contact` with no pricing shown
- ⚠️ Dead assets `pricing-bg.webp/jpg` unused

### `/not-found` — `app/not-found.tsx`
- ✅ noindex, 1 H1, links to real pages
- 🔴 **Likely doubled title** — hardcoded "...| NXT Level Builds" (`:5`) + root template appends suffix again
- ⚠️ No tap-to-call

### `/services` — `app/services/page.tsx` (hub)
- ✅ Metadata, canonical, 1 H1
- ⚠️ **Title 90 chars post-template** — oversized, keyword-stuffed
- ⚠️ **No CTA above the fold** — hero is text-only, first action is "View Details" links
- ⚠️ h1→h3→h2 heading order violation (`:50,:66,:103`)
- ⚠️ No ItemList/Service schema

### `/services/web-design` — `app/services/web-design/page.tsx`
- ✅ Metadata, canonical, hero CTA, $599/$150 pricing
- ⚠️ Title 78 chars; h2→h4 skips
- ⚠️ No `Service` schema (fix pending from FIXES.md H3)
- ⚠️ "190% organic leads" labeled vs "tripled inbound calls within 60 days" — same client, different story
- ⚠️ Hero stat labels `white/40` ≈ 2.4:1 fail AA

### `/services/seo` — `app/services/seo/page.tsx`
- ✅ Metadata, canonical, hero CTA
- ⚠️ Description 161 chars (over 160); title 76 chars; h2→h4
- ⚠️ No `Service` schema
- ⚠️ Timeframe conflict with web-design: same client "190% within 90 days" here vs "60 days" there

### `/services/google-ads` — `app/services/google-ads/page.tsx`
- ✅ Metadata, canonical, hero CTA
- ⚠️ No `Service` schema
- ⚠️ **"$500K+ Ad Spend Managed" orphaned claim** — appears only here, no corroborating project
- ⚠️ Title 70 chars; h2→h4 skips

### `/services/ai-automation` — `app/services/ai-automation/page.tsx`
- ✅ Metadata, canonical, hero CTA
- ⚠️ No `Service` schema
- ⚠️ Only page titled "Florida" (not Daytona) — geo-inconsistent with siblings
- ⚠️ "+82 New Clients/mo **Record**" — odd phrasing, "record" implies one-time
- ⚠️ Title 80 chars; h2→h4 skips

### City pages ×5 — `web-design-{deland,nsb,ormond,palm-coast,port-orange}`
- ✅ All now have canonical, unique titles/descriptions, LocalBusiness schema, breadcrumbs (except Port Orange), ogImage()
- ✅ DeLand/NSB/Ormond/Palm Coast: rich local content, real neighborhoods, city-specific FAQ
- 🔴 **Port Orange is the weak link** — 135 lines (~242 words, 36% of avg), no FAQ/neighborhoods/industries, no breadcrumbs, no outbound city links, "100 PageSpeed" contradiction, wrong client attribution (Miller's/Elevate aren't Port Orange), missing `tel:`
- ⚠️ Duplicate LocalBusiness entity vs layout (S3)
- ⚠️ No FAQPage schema despite FAQ content (S9)
- ⚠️ No `tel:` despite advertising click-to-call (S2)
- ⚠️ DeLand: Stetson University zip "32723" is a PO-box zip, not campus area (`:136`)
- ⚠️ Palm Coast: "Hammock" mapped to 32137, likely 32136 band (`:139`)
- ⚠️ Ormond: FAQ asks "need a website in **2025**?" — stale year (`:190`)
- ⚠️ NSB: "20-30% commission" unsourced claim (`:188`); Palm Coast "50+ directories" unverifiable (`:200`)

### `/services/web-design-for-contractors` — 124 lines (~304 words)
- ✅ Metadata, canonical, Service schema
- ⚠️ **Zero local geography** — no cities/neighborhoods; "Volusia County" only in copy
- ⚠️ **No phone rendered** despite "Click-to-Call CTAs" being the #1 advertised feature (`:36`)
- ⚠️ No BreadcrumbList (no Breadcrumb component); back-link only
- ⚠️ "190% More Organic Leads" mislabels Miller's case study (calls, not leads)
- ⚠️ "7 Days Average Launch Time" presented as client result (`:44`)

### `/services/web-design-for-home-services` — 142 lines (~273 words)
- ✅ Metadata, canonical, Service schema
- ⚠️ Zero local geography
- ⚠️ **Duplicated results verbatim** across this page / Port Orange / Contractors (Elevate "3×", Miller's "190%")
- ⚠️ Two H2s inside the same section (`:89,:103`)
- ⚠️ No FAQ, no tel, no links to city pages

---

## Priority Fix List (by impact-to-effort)

1. 🔴 **Fix `/work` SEO** — convert to server component (or add layout metadata) so it has title/description/canonical. Removes biggest crawl gap. ~15 min
2. 🔴 **Fix empty video cell on `/work`** — guard `featured.videoUrl` or remove the 2-col layout when no video. ~5 min
3. 🔴 **Fix FAQ title double-suffix** (`faq/layout.tsx:5`) — remove "| NXT Level Builds" from the title string. ~1 min
4. 🔴 **Fix 404 doubled title** (`not-found.tsx:5`) — use `{ absolute }` or drop the suffix. ~1 min
5. 🔴 **Fix schema image 404** — blog/work `[slug]` pages reference `images/og-image.jpg`; point to real asset or `/opengraph-image`. ~5 min
6. 🔴 **Resolve pricing contradiction** — update FAQ JSON-LD + blog pricing references to match $599/$150. ~10 min
7. 🔴 **Add `tel:` links to all service/city pages** that advertise click-to-call. ~15 min
8. 🟠 **Remove `/thank-you` from sitemap** (it's noindex/robots-disallowed). ~1 min
9. 🟠 **Add `/free-website-audit` + `/free-seo-audit` to sitemap** + fix title trailing space. ~2 min
10. 🟠 **Standardize PageSpeed stat** — pick 90+ everywhere (web-design, home, Port Orange). ~5 min
11. 🟠 **Fix stale pricing CTAs** — FAQ "View Pricing" and blog relatedService. ~5 min
12. 🟠 **Fix Port Orange** — add neighborhoods/industries/FAQ/breadcrumbs/outbound links; fix wrong client attribution. ~30 min (copy)
13. 🟡 **Form label association** (`ContactForm.tsx`) — add `htmlFor`/`id`. ~10 min
14. 🟡 **Contrast** — change `text-white/70` on accent CTA copy to solid white; bump `white/40` labels. ~10 min
15. 🟡 **About page CTA above the fold**. ~5 min
16. 🟡 **h2→h4 skips** on service pages + about. ~10 min
17. 🟡 **Reconcile client stats** — one truth per client (Miller's 190%, Summit 85%) across all pages. ~15 min
18. 🟡 **Add FAQPage schema** to the 4 city pages with FAQ blocks. ~10 min
19. ⚪ **Stale copy** — Ormond "2025" question, "+82 ... Record", "5-8 sites/week", DeLand zip, Palm Coast zip. ~10 min
