export interface Project {
  slug: string;
  cat: string;
  title: string;
  type: string;
  location: string;
  result: string;
  bg: string;
  accent: string;
  desc: string;
  tags: string[];
  stat: { number: string; label: string };
  // Case study fields
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  tools: string[];
  metrics: { number: string; label: string }[];
}

export const projects: Project[] = [
  {
    slug: 'millers-screen-pool',
    cat: 'Websites',
    title: "Miller's Screen & Pool",
    type: 'Website Design',
    location: 'Daytona Beach, FL',
    result: '↑190% organic leads',
    bg: 'from-blue-900 to-slate-900',
    accent: '#60a5fa',
    desc: 'Full rebrand and new website for a local pool screening company. Went from zero online presence to ranking page one for key Volusia County searches in under 60 days.',
    tags: ['Next.js', 'On-Page SEO', 'Google Business'],
    stat: { number: '190%', label: 'More Organic Leads' },
    industry: 'Pool Screening & Screen Enclosures',
    challenge: "Miller's Screen & Pool had been operating in Daytona Beach for over a decade on word-of-mouth alone. They had no website, no Google Business Profile, and zero organic search presence. Competitors were ranking page one for every high-intent search term, and the business was invisible online — even to customers actively looking for screen enclosure companies in Volusia County.",
    solution: "We built a custom 5-page website on Next.js targeting the key service areas across Volusia County: Daytona Beach, Port Orange, Ormond Beach, and New Smyrna Beach. Every page was built around specific search intent — individual service pages for screen enclosures, pool cages, and screen rooms. We set up and fully optimized a Google Business Profile, built out 20+ local citations, and implemented LocalBusiness schema markup with geo-targeted service areas.",
    outcome: "Within 60 days of launch, organic inbound calls increased 190%. The business now ranks on page one for 'screen enclosures Daytona Beach' and holds a top-3 local pack position for several Volusia County search terms. In the first month post-launch, the owner closed 4 new jobs directly from website leads — a channel that previously didn't exist.",
    timeline: '7 days to launch',
    tools: ['Next.js', 'Google Business Profile', 'Schema Markup', 'Local Citations', 'On-Page SEO'],
    metrics: [
      { number: '190%', label: 'Increase in Organic Leads' },
      { number: 'Page 1', label: 'Google Ranking' },
      { number: '60 Days', label: 'Time to Results' },
    ],
  },
  {
    slug: 'elevate-developments',
    cat: 'Websites',
    title: 'Elevate Developments',
    type: 'Website Design',
    location: 'Ormond Beach, FL',
    result: '3× more inquiries',
    bg: 'from-zinc-800 to-zinc-900',
    accent: '#a3a3a3',
    desc: 'Custom 8-page website for a residential developer. Redesigned their site to prioritize conversion with a lead capture funnel that tripled inbound inquiry volume.',
    tags: ['Custom Design', 'Lead Capture', 'CRM Hook'],
    stat: { number: '3×', label: 'Inquiry Volume' },
    industry: 'Residential Real Estate Development',
    challenge: "Elevate Developments had an outdated WordPress site that loaded slowly, looked generic, and offered no clear conversion path for interested buyers. Their old site had a contact page with a basic form — nothing that matched the premium positioning of their homes. Inbound inquiries averaged 8–10 per month, most of which were low-quality or window-shopping.",
    solution: "We rebuilt the site from scratch on Next.js with a focus on high-end design and conversion architecture. A staged lead capture funnel moved visitors from project galleries to a qualification form before showing pricing, filtering for serious buyers. CRM integration with GoHighLevel meant every new inquiry was immediately tagged, scored, and entered into a follow-up sequence. The result was a site that felt as premium as the product it was selling.",
    outcome: "Monthly inbound inquiries tripled within 45 days of launch. More importantly, lead quality improved dramatically — the qualification funnel filtered out unqualified traffic, meaning the sales team spent their time on serious buyers. The new site is now their primary lead generation channel.",
    timeline: '10 days to launch',
    tools: ['Next.js', 'GoHighLevel CRM', 'Lead Capture Funnel', 'Custom Design', 'Mobile-First'],
    metrics: [
      { number: '3×', label: 'Monthly Inquiries' },
      { number: '45 Days', label: 'Time to Results' },
      { number: '10 Days', label: 'Build Time' },
    ],
  },
  {
    slug: 'ironclad-build',
    cat: 'Automations',
    title: 'Ironclad Build',
    type: 'AI Automation',
    location: 'Daytona Beach, FL',
    result: '12 hrs/week saved',
    bg: 'from-indigo-900 to-gray-900',
    accent: '#818cf8',
    desc: 'Built a full lead nurturing and follow-up automation using GoHighLevel + Make. Every new lead gets a personalized sequence — no manual work required.',
    tags: ['GoHighLevel', 'Make', 'Lead Nurturing'],
    stat: { number: '12 hrs', label: 'Saved Per Week' },
    industry: 'Construction & General Contracting',
    challenge: "Ironclad Build was generating solid leads from referrals and a previous Google Ads campaign, but follow-up was entirely manual. New leads sat in an email inbox for 24–48 hours before anyone responded. Estimates were booked over the phone with no automated reminders. The owner was spending 12+ hours a week on tasks that had nothing to do with actual construction — just administrative back-and-forth.",
    solution: "We built a complete automation stack using GoHighLevel and Make.com. Every new lead from any source — web form, Google Ads, referral text — was automatically entered into the CRM, tagged by source, and received an instant text and email response. An appointment booking link went out automatically. Estimate reminders fired 24 hours and 2 hours before scheduled calls. Post-estimate follow-ups ran on a 3-day cadence automatically. Review requests triggered 3 hours after job completion.",
    outcome: "The owner immediately recovered 12 hours per week that had been going to manual follow-up and scheduling. Response time to new leads dropped from 24–48 hours to under 5 minutes. Show rates for estimates improved. The business now runs on autopilot for everything administrative — the owner focuses entirely on scoping and executing jobs.",
    timeline: '2 days to deploy',
    tools: ['GoHighLevel', 'Make.com', 'SMS Automation', 'Email Sequences', 'Calendly Integration'],
    metrics: [
      { number: '12 hrs', label: 'Saved Per Week' },
      { number: '<5 min', label: 'Lead Response Time' },
      { number: '2 Days', label: 'Setup Time' },
    ],
  },
  {
    slug: 'summit-exteriors',
    cat: 'Websites',
    title: 'Summit Exteriors',
    type: 'Website Design',
    location: 'Port Orange, FL',
    result: '+85% form submissions',
    bg: 'from-stone-700 to-stone-900',
    accent: '#d6b896',
    desc: 'Speed-optimized site with a mobile-first design for a roofing and exterior company. Form submission rate nearly doubled after launch.',
    tags: ['Mobile-First', 'Core Web Vitals', 'Contact Forms'],
    stat: { number: '85%', label: 'More Form Submissions' },
    industry: 'Roofing & Exterior Services',
    challenge: "Summit Exteriors had a WordPress site built by a local generalist 3 years prior. It loaded in 9 seconds on mobile, scored 38 on Google PageSpeed, and had a contact form buried three clicks deep. Despite running Google Ads and getting traffic, their form submission rate was under 2% — most visitors were bouncing before they ever reached a CTA.",
    solution: "We rebuilt the site on Next.js with mobile performance as the primary design constraint. Every above-the-fold element was ruthlessly simplified: a clear headline, a photo of completed work, a phone number clickable in one tap, and a 'Get a Free Estimate' button before the scroll. The contact form was simplified to 3 fields and placed on the homepage. Page speed on mobile hit 94 on Google PageSpeed at launch.",
    outcome: "Form submissions jumped 85% in the first 30 days. The site's mobile PageSpeed score went from 38 to 94. Combined with their existing Google Ads campaign driving the same traffic, the cost per conversion dropped by 44% because more of the same traffic was converting.",
    timeline: '7 days to launch',
    tools: ['Next.js', 'Core Web Vitals Optimization', 'Mobile-First Design', 'Conversion Rate Optimization'],
    metrics: [
      { number: '85%', label: 'More Form Submissions' },
      { number: '94', label: 'Mobile PageSpeed Score' },
      { number: '−44%', label: 'Cost Per Conversion' },
    ],
  },
  {
    slug: 'premier-solutions',
    cat: 'Landing Pages',
    title: 'Premier Solutions',
    type: 'Landing Page + Ads',
    location: 'New Smyrna Beach, FL',
    result: '4.2× ROAS',
    bg: 'from-emerald-900 to-neutral-900',
    accent: '#34d399',
    desc: 'High-converting landing page paired with a Google Ads campaign for a home services company. Achieved a 4.2× return on ad spend in the first 30 days.',
    tags: ['Google Ads', 'Landing Page', 'Conversion Tracking'],
    stat: { number: '4.2×', label: 'Return on Ad Spend' },
    industry: 'Home Services',
    challenge: "Premier Solutions had tried Google Ads twice before with two different agencies — both times they spent $1,200–$1,500/month for 60 days and generated 3–5 leads total. The problem was consistent across both runs: traffic was going to their homepage, there was no conversion tracking in place, and the ad copy was generic. They came to us skeptical that Google Ads could work for their business at all.",
    solution: "We started from scratch. First, CallRail was set up to track every phone call from the campaign. A dedicated landing page was built specifically for the campaign's primary keyword group — mobile-optimized, single goal, phone number in the header. Google Ads was rebuilt with phrase and exact match keywords only, a full negative keyword list, and 3 ad copy variations per ad group. The landing page headline matched the primary search query exactly.",
    outcome: "In the first 30 days, the campaign generated a 4.2× return on ad spend — for every $1 spent on ads, $4.20 came back in closed revenue. Cost per lead dropped from the client's previous average of $180 to $43. The client extended the campaign immediately and added a second service line to the account.",
    timeline: '5 days to launch',
    tools: ['Google Search Ads', 'CallRail', 'Custom Landing Page', 'Next.js', 'Conversion Tracking'],
    metrics: [
      { number: '4.2×', label: 'Return on Ad Spend' },
      { number: '$43', label: 'Cost Per Lead' },
      { number: '30 Days', label: 'Time to Results' },
    ],
  },
  {
    slug: 'peak-performance',
    cat: 'Systems',
    title: 'Peak Performance',
    type: 'Systems & CRM',
    location: 'DeLand, FL',
    result: '+82 new clients/mo',
    bg: 'from-violet-900 to-slate-900',
    accent: '#a78bfa',
    desc: 'End-to-end CRM implementation and sales pipeline build for a fitness coaching brand. Automated intake, onboarding, and payment follow-up across all channels.',
    tags: ['CRM Setup', 'Automations', 'Pipeline Build'],
    stat: { number: '82', label: 'New Clients / Month' },
    industry: 'Fitness Coaching & Personal Training',
    challenge: "Peak Performance was growing fast but their backend couldn't keep up. New clients were onboarded manually — contracts sent by email, payment plans tracked in a spreadsheet, welcome emails written one by one. The owner was spending 15–20 hours per week on onboarding, follow-up, and payment collection alone. More seriously, no-show rates for first consultations were running at 35%, and 40% of payment plan clients were going delinquent because follow-ups were inconsistent.",
    solution: "We implemented a full GoHighLevel CRM with a custom pipeline for every stage of the client journey: Lead → Consultation Booked → Consultation Attended → Proposal Sent → Active Client → Alumni. Automation fired at every transition: instant confirmation texts when appointments booked, 3-sequence reminders before consultations, onboarding workflows on contract sign, automated payment reminders at 3 days pre-due and day-of. Every touchpoint was personalized by merge field.",
    outcome: "New client volume increased from 48 to 82 per month — not from more leads, but from converting the same leads at a higher rate and losing fewer through the cracks. No-show rate dropped from 35% to 9%. Payment delinquency dropped to under 5%. The owner reclaimed 15+ hours per week.",
    timeline: '4 days to deploy',
    tools: ['GoHighLevel CRM', 'Sales Pipeline Build', 'SMS + Email Automation', 'Contract Automation', 'Payment Reminders'],
    metrics: [
      { number: '82', label: 'New Clients / Month (+71%)' },
      { number: '9%', label: 'No-Show Rate (was 35%)' },
      { number: '15 hrs', label: 'Reclaimed Per Week' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
