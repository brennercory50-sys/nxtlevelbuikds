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
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  tools: string[];
  metrics: { number: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string };
  process?: string[];
  beforeState?: { label: string; value: string }[];
  relatedService?: 'web-design' | 'seo' | 'google-ads' | 'ai-automation';
  videoUrl?: string;
  url?: string;
  processSteps?: { step: string; description: string; duration?: string; deliverables?: string[] }[];
  results?: { label: string; before: string; after: string }[];
  roi?: string;
  starRating?: number;
  comparisons?: { id: string; label: string; description?: string; type: 'image' | 'metric'; before?: string; after?: string; beforeLabel?: string; afterLabel?: string; beforeText?: string; afterText?: string }[];
}

export const projects: Project[] = [
  {
    slug: 'next-level-detailing',
    cat: 'Websites',
    title: 'Next Level Detailing',
    url: 'https://www.nextleveldetailingfl.com/',
    type: 'Website Design',
    location: 'Daytona Beach, FL',
    result: 'Custom website build',
    bg: 'from-red-950 to-zinc-900',
    accent: '#ef4444',
    desc: 'Custom website for a Daytona Beach auto detailing business \u2014 a bold, dark design built to look as sharp as the work itself.',
    tags: ['Custom Design', 'Web Development'],
    stat: { number: 'Live', label: 'Website Launched' },
    industry: 'Auto Detailing',
    challenge: 'Next Level Detailing needed a website that looked as sharp as the cars they finish \u2014 something a Daytona Beach customer would trust at a glance, not a template that looks like every other detailer\u2019s.',
    solution: 'A custom-designed site with a bold, dark visual style, oversized display type, and a clear path from the first screen to getting in touch.',
    outcome: 'The site is live and serving as the business\u2019s online home. Results are being tracked; this entry will be updated with real numbers once there\u2019s enough data to report honestly.',
    timeline: 'Live',
    tools: ['Custom Design', 'Web Development'],
    metrics: [
      { number: 'Custom', label: 'Design & Build' },
      { number: 'Auto', label: 'Detailing Industry' },
      { number: 'Live', label: 'Site Status' },
    ],
    relatedService: 'web-design',
  },
  {
    slug: 'next-level-screening',
    cat: 'Websites',
    title: 'Next Level Screening',
    url: 'https://www.nxtlevelscreening.com/',
    type: 'Website Design',
    location: 'Volusia County, FL',
    result: 'Founder-owned business',
    bg: 'from-sky-950 to-zinc-900',
    accent: '#38bdf8',
    desc: 'Website for Next Level Screening, the screen enclosure company run by NXT Level Builds founder Cory Brenner \u2014 our own business, designed and built in-house.',
    tags: ['Custom Design', 'Founder-Owned'],
    stat: { number: 'Live', label: 'Website Launched' },
    industry: 'Screen Enclosures',
    challenge: 'Full disclosure: this one isn\u2019t a client. Next Level Screening is a screen enclosure company Cory Brenner owns and runs alongside NXT Level Builds. It needed what every local trade business needs online \u2014 a site that makes the company look established and makes it easy for a homeowner to reach out.',
    solution: 'Designed and built in-house, the same way NXT Level Builds builds for clients. Running a site for a business we own gives us a place to try things on real local customers before recommending them to anyone else.',
    outcome: 'The site is live and handles the company\u2019s online presence. We haven\u2019t published its numbers here \u2014 when we do, they\u2019ll be real ones.',
    timeline: 'Live, maintained in-house',
    tools: ['Custom Design', 'Web Development'],
    metrics: [
      { number: 'Owned', label: 'Founder\u2019s Own Business' },
      { number: 'In-House', label: 'Designed & Built' },
      { number: 'Live', label: 'Site Status' },
    ],
    relatedService: 'web-design',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
