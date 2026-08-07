# Staged Fixes — NXT Level Builds Audit

Each fix is grouped by finding ID from `AUDIT.md`. Diffs are against the current working tree.

---

## 🔴 C1 — Add canonical + fix OG images on 10 missing pages

**Rationale:** Every page needs a self-referencing canonical to prevent duplicate content dilution. 9 pages are missing `alternates: { canonical }` and also use hardcoded `'/opengraph-image'` instead of the `ogImage()` helper (which provides width/height/alt).

### Fix 1a: `app/free-website-audit/page.tsx`

```diff
 import type { Metadata } from 'next';
+import { canonical, ogImage } from '@/lib/seo';
 import LeadMagnetForm from '@/components/LeadMagnetForm';
 
 export const metadata: Metadata = {
   title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads ',
   description: 'Get a free custom Loom video audit of your website. We\'ll show you exactly why you\'re not getting leads and what to fix first. Delivered in 48 hours.',
+  alternates: { canonical: canonical('/free-website-audit') },
   openGraph: {
     title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads',
     description: 'Get a free custom Loom video audit of your website. We\'ll show you exactly why you\'re not getting leads and what to fix first.',
-    images: ['/opengraph-image'],
+    images: [ogImage()],
   },
   twitter: {
     card: 'summary_large_image',
     title: 'Free Website Audit — Find Out Why Your Site Isn\'t Getting Leads',
     description: 'Get a free custom Loom video audit of your website. Delivered in 48 hours.',
   },
 };
```

### Fix 1b: `app/free-seo-audit/page.tsx`

```diff
 import type { Metadata } from 'next';
+import { canonical, ogImage } from '@/lib/seo';
 import LeadMagnetForm from '@/components/LeadMagnetForm';
 
 export const metadata: Metadata = {
   title: 'Free SEO Audit — See Where You Rank vs. Your Competitors',
   description: 'Get a free local SEO ranking report for your business. See exactly where you rank vs. competitors in your city and the 3 quick wins to move up fast.',
+  alternates: { canonical: canonical('/free-seo-audit') },
   openGraph: {
     title: 'Free SEO Audit — See Where You Rank vs. Your Competitors',
     description: 'Get a free local SEO ranking report for your business. See exactly where you rank vs. competitors in your city.',
-    images: ['/opengraph-image'],
+    images: [ogImage()],
   },
   twitter: {
     card: 'summary_large_image',
     title: 'Free SEO Audit — See Where You Rank vs. Your Competitors',
     description: 'Get a free local SEO ranking report for your business.',
   },
 };
```

### Fix 1c: `app/thank-you/page.tsx`

```diff
 import type { Metadata } from 'next';
+import { canonical, ogImage } from '@/lib/seo';
 import Link from 'next/link';
 import ThankYouEvent from '@/components/ThankYouEvent';
 
 export const metadata: Metadata = {
   title: "Message Received — We'll Be in Touch",
   description: "Your message has been received. A member of the NXT Level Builds team will reach out within 1 business day.",
   robots: { index: false, follow: false },
+  alternates: { canonical: canonical('/thank-you') },
   openGraph: {
     title: "Message Received — We'll Be in Touch",
     description: "Your message has been received. A member of the NXT Level Builds team will reach out within 1 business day.",
-    images: ['/opengraph-image'],
+    images: [ogImage()],
   },
   twitter: {
     card: 'summary_large_image',
     title: "Message Received — We'll Be in Touch",
     description: "Your message has been received. We'll be in touch within 1 business day.",
   },
 };
```

### Fix 1d–1j: All 5 city pages + 2 niche pages

Each needs the same two-line change. Pattern applied to:

| File | Canonical path |
|------|---------------|
| `app/services/web-design-deland/page.tsx` | `canonical('/services/web-design-deland')` |
| `app/services/web-design-new-smyrna-beach/page.tsx` | `canonical('/services/web-design-new-smyrna-beach')` |
| `app/services/web-design-ormond-beach/page.tsx` | `canonical('/services/web-design-ormond-beach')` |
| `app/services/web-design-palm-coast/page.tsx` | `canonical('/services/web-design-palm-coast')` |
| `app/services/web-design-port-orange/page.tsx` | `canonical('/services/web-design-port-orange')` |
| `app/services/web-design-for-contractors/page.tsx` | `canonical('/services/web-design-for-contractors')` |
| `app/services/web-design-for-home-services/page.tsx` | `canonical('/services/web-design-for-home-services')` |

```diff
 import type { Metadata } from 'next';
+import { canonical, ogImage } from '@/lib/seo';
 import Link from 'next/link';
 import Image from 'next/image';
+import Breadcrumb from '@/components/Breadcrumb';  // only if missing

 export const metadata: Metadata = {
   title: 'Web Design {City} FL | Custom Websites',
   description: '...',
+  alternates: { canonical: canonical('/services/web-design-{city}') },
   openGraph: {
     title: 'Web Design {City} FL | Custom Websites',
     description: '...',
-    images: ['/opengraph-image'],
+    images: [ogImage()],
   },
   twitter: {
     card: 'summary_large_image',
     title: 'Web Design {City} FL | Custom Websites',
     description: '...',
   },
 };
```

**Note:** Port Orange (`web-design-port-orange/page.tsx`) already does NOT import `Breadcrumb` (it uses a simple `<Link>` instead). Leave that import line unchanged — just add the SEO imports and canonical.

---

## 🔴 C2 — Fix homepage title duplication

**Rationale:** The layout has `template: '%s | NXT Level Builds'`. The homepage exports `title:` as a string matching the default → renders as `"... | NXT Level Builds | NXT Level Builds"`. Use `{ absolute: '...' }` to bypass the template.

**File:** `app/page.tsx`

```diff
 export const metadata: Metadata = {
-  title: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL',
+  title: { absolute: 'NXT Level Builds — Web Design & Digital Marketing Agency | Daytona Beach, FL' },
   description: 'Daytona Beach digital agency specializing in custom web design, Google Ads, local SEO, and AI automation. We help local businesses get more leads and scale faster.',
   alternates: { canonical: canonical('') },
   openGraph: {
```

---

## ~~🔴 C3 — BreadcrumbList schema~~ (ALREADY IMPLEMENTED)

**Verdict:** `components/Breadcrumb.tsx` lines 13–29 already emit `application/ld+json` with `@type: 'BreadcrumbList'` on every page that uses the `<Breadcrumb>` component. No fix needed. This finding was a false positive in the recon phase.

---

## 🔴 C4 — Fix contact page phone to tap-to-call

**Rationale:** The contact page hero card renders `(386) 259-0178` as static `<p>` text. Mobile users can't tap to call. Add an `href` field to items that need it and conditionally render `<a>`.

**File:** `app/contact/page.tsx`

```diff
                  {[
-                   { icon: <svg .../>, label:'Phone', val:'(386) 259-0178' },
-                   { icon: <svg .../>, label:'Email', val:'support@nxtlevelbuilds.com' },
+                   { icon: <svg .../>, label:'Phone', val:'(386) 259-0178', href:'tel:+13862590178' },
+                   { icon: <svg .../>, label:'Email', val:'support@nxtlevelbuilds.com', href:'mailto:support@nxtlevelbuilds.com' },
                    { icon: <svg .../>, label:'Location', val:'Daytona Beach, Florida' },
                    { icon: <svg .../>, label:'Business Hours', val:'Mon – Fri, 9AM – 6PM' },
                  ].map(c => (
                    <div key={c.label} className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-white/15 backdrop-blur rounded-xl flex items-center justify-center text-white flex-shrink-0">{c.icon}</div>
                      <div>
                        <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wide">{c.label}</p>
-                       <p className="text-[14px] font-semibold text-white">{c.val}</p>
+                       {c.href ? (
+                         <a href={c.href} className="text-[14px] font-semibold text-white hover:text-accent transition-colors">{c.val}</a>
+                       ) : (
+                         <p className="text-[14px] font-semibold text-white">{c.val}</p>
+                       )}
                      </div>
```

---

## 🟠 H1 — Expand Port Orange city page (content gap)

**Rationale:** Port Orange city page is 133 lines with ~109 unique words — 57% shorter than the average city page. Missing FAQ, Neighborhoods, Industries sections. This requires copywriting, not just code. Flagged for human action.

**Suggested structure to add (copy needed):**
- FAQ section with 3 Q&A pairs specific to Port Orange (Dunlawton corridor, Port Orange vs Daytona, seasonal tourism)
- Neighborhoods list (Port Orange proper, South Daytona, Allandale, Spruce Creek, Sugar Mill)
- Industries list (Healthcare, Home Services, Marine, Real Estate, Retail, Auto)
- Expand "What's Included" from 7 to 9 items (add Schema markup, Citation building)

---

## 🟠 H2 — Convert `/work` from client to server component

**Rationale:** `app/work/page.tsx` uses `'use client'` for a filter dropdown. The entire portfolio listing is client-rendered — bots see an empty shell. Convert to server component with URL-based filtering or a minimal client island.

**Approach A (recommended — minimal JS, indexable):**
- Remove `'use client'`
- Get filter state from URL search params (`useSearchParams` → wrap in Suspense)
- Filter on the server
- This keeps the page server-rendered and indexable

**Approach B (simpler — keep client but add pre-render):**
- Move the filter logic into a small client island
- Pre-render all projects on the server
- Filtering happens client-side but initial HTML has all content

The safest fix for a 15-min change is Approach B:

```diff
-'use client';
-import { useState } from 'react';
+import { Suspense } from 'react';
 import Link from 'next/link';
 import Image from 'next/image';
 import { projects as allProjects } from '@/app/work/projects';
 import { CaseStudyCard, CaseStudyVideo } from '@/components/case-studies';
-import { trackEvent } from '@/lib/gtag';

-const filters = ['All', 'Websites', 'Automations', 'Landing Pages', 'Systems'];

+// Client island for filtering
+import dynamic from 'next/dynamic';
+const WorkFilter = dynamic(() => import('@/components/WorkFilter'), { ssr: false });

 export default function WorkPage() {
-  const [active, setActive] = useState('All');
-  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);
+  // Server-render all projects; filtering happens client-side
+  // The WorkFilter component handles the interactive filter and renders the grid
   return (
     <main>
       ...
-      {/* Filter */}
-      <div className="flex gap-2 flex-wrap">
-        {filters.map(f => (
-          <button key={f} onClick={() => setActive(f)} ...>
-            {f}
-          </button>
-        ))}
-      </div>
-      <div className="grid ...">
-        {filtered.map(p => <CaseStudyCard key={p.slug} project={p} />)}
-      </div>
+      <Suspense fallback={<div className="grid ...">{allProjects.map(p => <CaseStudyCard key={p.slug} project={p} />)}</div>}>
+        <WorkFilter projects={allProjects} />
+      </Suspense>
       ...
```

Requires creating `components/WorkFilter.tsx` as a client component with the filter logic extracted.

---

## 🟠 H3 — Add Service schema to 4 core service pages

**Rationale:** `/services/web-design`, `/services/seo`, `/services/google-ads`, `/services/ai-automation` have no inline service-specific JSON-LD. Add `Service` schema with `offers` reflecting the $599 + $150/mo growth plan.

**Pattern for each page (file: `app/services/web-design/page.tsx`, etc.):**

```diff
+const serviceSchema = {
+  '@context': 'https://schema.org',
+  '@type': 'Service',
+  name: 'Custom Web Design | NXT Level Builds',
+  description: 'High-converting, custom websites for Daytona Beach businesses. Built for speed, SEO, and lead generation.',
+  provider: { '@type': 'Organization', name: 'NXT Level Builds' },
+  areaServed: { '@type': 'City', name: 'Daytona Beach' },
+  serviceType: 'Web Design',
+  offers: {
+    '@type': 'Offer',
+    price: '599',
+    priceCurrency: 'USD',
+    priceSpecification: {
+      '@type': 'UnitPriceSpecification',
+      price: '599',
+      priceCurrency: 'USD',
+      billingDuration: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
+    },
+  },
+};

 export default function WebDesign() {
   return (
     <main>
+      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
```

Repeat for each service page with appropriate `name`, `description`, `serviceType`, and `offers.price`:
- **SEO:** `serviceType: 'Search Engine Optimization'`, price: `497`
- **Google Ads:** `serviceType: 'Google Ads Management'`, price: `997`
- **AI Automation:** `serviceType: 'AI Automation'`, price: `1497`

---

## 🟠 H4 — Fix priceRange in LocalBusiness schema

**Rationale:** `priceRange: '$$'` implies mid-range ($1K–$5K). New $599 + $150/mo positioning is affordable. Change to `'$'`.

**File:** `app/layout.tsx:100`

```diff
-      priceRange: '$$',
+      priceRange: '$',
```

---

## 🟠 H5 — Remove unused dead components

**Rationale:** 4 component files are defined but never imported anywhere. They add unnecessary bytes and confusion.

**Files to delete:**

```
components/FloatingCTA.tsx
components/BudgetMeter.tsx
components/BudgetMeterSmall.tsx
components/Nav.tsx
```

**Tradeoff:** `BudgetMeter` and `BudgetMeterSmall` were originally used on the `/pricing` page (now a redirect). If you want to keep them for a future interactive sales tool, leave them but they're dead today.

---

## 🟠 H6 — Add ISR/revalidate to listing pages

**Rationale:** Blog and work listing pages are fully static. New content requires a full redeploy.

**File:** `app/blog/page.tsx` — add:

```diff
+export const revalidate = 3600; // revalidate every hour
```

**File:** `app/work/page.tsx` — add (if converted to server component):

```diff
+export const revalidate = 3600;
```

**For city service pages**, consider:

```diff
+export const revalidate = 86400; // revalidate daily — content changes infrequently
```

---

## 🟠 H7 — Create `public/llms.txt`

**Rationale:** AI crawlers (GPTBot, Claude, Perplexity) look for `llms.txt` as a structured entry point. This helps them cite the site in answers.

**New file:** `public/llms.txt`

```
# NXT Level Builds — Web Design & Digital Marketing
# Daytona Beach, FL | Serving Volusia County

## About
NXT Level Builds is a web design and digital marketing agency founded by Cory Brenner, based in Daytona Beach, Florida. We build custom websites, manage Google Ads, run local SEO campaigns, and build AI automation systems for local service businesses.

## Key pages
- Homepage: https://nxtlevelbuilds.com/
- Services: https://nxtlevelbuilds.com/services
- Web Design: https://nxtlevelbuilds.com/services/web-design
- SEO: https://nxtlevelbuilds.com/services/seo
- Google Ads: https://nxtlevelbuilds.com/services/google-ads
- AI Automation: https://nxtlevelbuilds.com/services/ai-automation
- Portfolio: https://nxtlevelbuilds.com/work
- Blog: https://nxtlevelbuilds.com/blog
- FAQ: https://nxtlevelbuilds.com/faq

## Service Areas
Daytona Beach, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, Palm Coast — and all of Volusia County, Florida.

## Services
- Custom Web Design: High-converting, mobile-first websites built for speed and SEO. Starting at $599 with $150/mo growth plan.
- Local SEO: On-page optimization, Google Business Profile management, local citation building. $497/mo.
- Google Ads Management: Search, LSA, and Display campaigns built for ROI. Starting at $997/mo.
- AI Automation: CRM integration, AI chatbots, workflow automation. Starting at $1,497.

## Contact
- Phone: (386) 259-0178
- Email: hello@nxtlevelbuilds.com
- Contact page: https://nxtlevelbuilds.com/contact
- Free Website Audit: https://nxtlevelbuilds.com/free-website-audit
- Free SEO Audit: https://nxtlevelbuilds.com/free-seo-audit
```

---

## Summary

| Finding | Effort | Type | Action |
|---------|--------|------|--------|
| C1 — 10 missing canonicals | 15 min | **Code** | Add import + alternates + ogImage() to each page |
| C2 — Homepage title duplicate | 2 min | **Code** | Wrap in `{ absolute: ... }` |
| C3 — BreadcrumbList schema | 0 min | **Already done** | No action |
| C4 — Contact phone tap-to-call | 5 min | **Code** | Add href + conditional a tag |
| H1 — Port Orange thin page | 30 min | **Copy** | Requires human content writing |
| H2 — Convert /work to server | 20 min | **Code** | Extract filter to client island or use URL params |
| H3 — Service schema on 4 pages | 15 min | **Code** | Add JSON-LD block per service page |
| H4 — priceRange fix | 1 min | **Code** | Change `$$` to `$` |
| H5 — Delete dead components | 2 min | **Code** | Delete 4 unused files |
| H6 — Add revalidate | 5 min | **Code** | Add `export const revalidate` |
| H7 — Create llms.txt | 5 min | **Code** | Write public/llms.txt |
