import { ChatMessage, ChatResponse, Conversation, KnowledgeEntry, LeadData, LeadScore } from './types';
import { escapeHtml, sanitizeUrl } from '@/lib/escape';

function uid(): string {
  return typeof crypto?.randomUUID === 'function'
    ? crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

export const CHAT_CONFIG = {
  botName: 'NXT AI',
  welcomeMessage: "Hey! I'm the NXTLEVELBUILDS AI assistant. I can help you with web design, SEO, Google Ads, AI automation, and more. What's on your mind?",
  primaryColor: '#1a6eff',
  bookingUrl: 'https://calendly.com/nxtlevelbuilds/consultation',
  leadFormDelay: 3,
};

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // ─── Web Design ───
  {
    id: 'wd-cost',
    category: 'web-design',
    triggers: ['how much', 'how much does a website cost', 'website pricing', 'web design cost', 'how much for a website', 'price of a website', 'what does a website cost', 'website package', 'pricing website', 'cost to build a website'],
    priority: 5,
    response: "Great question! Simple sites start at **$599** with a **$150/mo** growth plan — or you can pay upfront for a one-time build. Custom builds are quoted individually based on scope.\n\nMost of our clients invest in a site that starts paying for itself right away. What kind of business do you run?",
    service: 'web-design',
    qualifyingQuestion: 'What industry is your business in?',
  },
  {
    id: 'wd-timeline',
    category: 'web-design',
    triggers: ['how long', 'timeline', 'how fast', 'when can', 'how soon', 'how quickly', 'turnaround', 'delivery time', 'how many days', 'how many weeks'],
    priority: 4,
    response: "We're known for speed. Our Starter package launches in **7 days**. Growth sites typically take **2-3 weeks**, and custom builds range from **4-8 weeks** depending on complexity.\n\nWe use a streamlined process: strategy → design → develop → launch. What timeline are you working with?",
    service: 'web-design',
  },
  {
    id: 'wd-process',
    category: 'web-design',
    triggers: ['process', 'how does it work', 'how do you build', 'what is the process', 'steps', 'workflow', 'how do you start', 'what happens after'],
    priority: 3,
    response: "Here's our web design process:\n\n1. **Discovery Call** — We learn about your business, goals, and audience\n2. **Strategy & Wireframing** — Map out structure and content\n3. **Design** — Create a custom design tailored to your brand\n4. **Development** — Build with clean, fast code\n5. **Launch** — Deploy and optimize\n\nWe keep you involved throughout so the result matches your vision. Ready to get started?",
    service: 'web-design',
  },
  {
    id: 'wd-platform',
    category: 'web-design',
    triggers: ['what platform', 'what technology', 'what cms', 'wordpress', 'what do you build with', 'what framework', 'next.js', 'react', 'what do you use'],
    priority: 3,
    response: "We build on **Next.js** — a modern, lightning-fast React framework. It gives us:\n\n• Blazing load times (great for SEO)\n• Rock-solid security\n• Easy content management\n• Mobile-first responsive design\n\nFor clients who need it, we integrate a CMS so you can update content yourself. We focus on performance because speed = conversions.",
    service: 'web-design',
  },
  {
    id: 'wd-ecommerce',
    category: 'web-design',
    triggers: ['ecommerce', 'e-commerce', 'online store', 'shop', 'sell online', 'shopping cart', 'products online', 'storefront'],
    priority: 4,
    response: "Yes, we build e-commerce sites! We create custom online stores with:\n\n• Product catalogs & inventory management\n• Secure checkout & payment processing\n• Shipping & tax automation\n• Mobile-optimized shopping experience\n\nE-commerce projects are typically in the **$5,000 - $15,000+** range depending on features. What kind of products do you sell?",
    service: 'web-design',
  },
  {
    id: 'wd-redesign',
    category: 'web-design',
    triggers: ['redesign', 'redesign my website', 'update my site', 'refresh', 'new look', 'modernize', 'rebuild'],
    priority: 3,
    response: "We do website redesigns! Many of our clients come to us with outdated sites that aren't converting. We'll audit your current site, identify what's not working, and build a modern, high-converting replacement.\n\nRedesigns often see **40-80% improvement** in conversion rates. What's not working with your current site?",
    service: 'web-design',
  },
  {
    id: 'wd-maintenance',
    category: 'web-design',
    triggers: ['maintenance', 'upkeep', 'support', 'update my site', 'who maintains', 'after launch', 'ongoing'],
    priority: 2,
    response: "We offer maintenance plans starting at **$97/mo** that include:\n\n• Security updates & monitoring\n• Content updates\n• Performance optimization\n• Monthly analytics reports\n• Priority support\n\nOr you can manage it yourself — we build with easy-to-use CMS tools. Would you like to hear about our maintenance options?",
    service: 'web-design',
  },
  {
    id: 'wd-examples',
    category: 'web-design',
    triggers: ['examples', 'portfolio', 'show me', 'samples', 'past work', 'case studies', 'what have you done', 'previous work'],
    priority: 3,
    response: "You can see our work on our portfolio page: **nxtlevelbuilds.com/work** — we've built sites for contractors, home services, professional services, and more. Each case study includes the challenge, solution, and real results.\n\nIs there a specific industry you'd like to see examples from?",
    service: 'web-design',
  },

  // ─── SEO ───
  {
    id: 'seo-cost',
    category: 'seo',
    triggers: ['how much does seo cost', 'seo pricing', 'seo cost', 'how much for seo', 'price of seo', 'seo package', 'what does seo cost', 'seo investment'],
    priority: 5,
    response: "Our SEO services are month-to-month with no long-term contracts:\n\n• **Local SEO ($497/mo)** — Google Business optimization, local citations, review management\n• **Growth SEO (quoted individually)** — Full technical SEO, content strategy, link building, monthly reporting\n• **Enterprise (Custom)** — Multi-location, national campaigns, advanced analytics\n\nMost local businesses see meaningful results within **3-6 months**. What's your primary goal — more local customers or broader reach?",
    service: 'seo',
    qualifyingQuestion: 'Are you looking for local customers or nationwide reach?',
  },
  {
    id: 'seo-local',
    category: 'seo',
    triggers: ['local seo', 'local search', 'near me', 'google business', 'google maps', 'local customers', 'local ranking', 'daytona beach seo'],
    priority: 5,
    response: "Local SEO is our sweet spot. We help businesses rank in the **Google Local Pack** (the map results) and organic search for their area. Our approach:\n\n• Google Business Profile optimization\n• Local citation building & cleanup\n• Review generation & management\n• Location-specific landing pages\n• Local keyword targeting\n\nWe serve Daytona Beach, Port Orange, Ormond Beach, New Smyrna Beach, DeLand, and Palm Coast. What city are you targeting?",
    service: 'seo',
  },
  {
    id: 'seo-timeline',
    category: 'seo',
    triggers: ['how long does seo take', 'seo results timeline', 'when will i see results', 'how long until', 'seo time frame', 'seo months'],
    priority: 4,
    response: "SEO is a long-term investment, but you'll see progress along the way:\n\n• **Month 1-2**: Technical fixes, Google Business optimization, initial content\n• **Month 3-4**: Rankings start improving, traffic increases\n• **Month 5-6**: Consistent growth, lead volume increases\n\nWe provide monthly reports so you can track progress. Some clients see results sooner — it depends on your market and competition.",
    service: 'seo',
  },
  {
    id: 'seo-guarantee',
    category: 'seo',
    triggers: ['guarantee', 'guaranteed results', 'do you guarantee', 'guaranteed rankings', 'rankings guarantee', 'promise'],
    priority: 4,
    response: "We don't promise specific rankings (anyone who does is selling snake oil). What we guarantee is:\n\n• **100% ethical, white-hat SEO** — no risk of penalties\n• **Monthly progress reports** — full transparency\n• **Dedicated strategy** tailored to your business\n• **Proven process** that's worked for 20+ businesses\n\nThe results speak for themselves — check our case studies at nxtlevelbuilds.com/work.",
    service: 'seo',
  },
  {
    id: 'seo-content',
    category: 'seo',
    triggers: ['content', 'blog', 'articles', 'content writing', 'content strategy', 'blog posts', 'writing'],
    priority: 3,
    response: "Content is a huge part of SEO success. We create:\n\n• SEO-optimized blog posts targeting your keywords\n• Service pages that convert\n• Location pages for local SEO\n• Meta descriptions & title tags\n\nRegular content publishing signals to Google that your site is active and authoritative. We include content in our Growth SEO package.",
    service: 'seo',
  },
  {
    id: 'seo-technical',
    category: 'seo',
    triggers: ['technical seo', 'site speed', 'core web vitals', 'page speed', 'technical audit', 'site structure'],
    priority: 3,
    response: "Technical SEO is the foundation. We handle:\n\n• Site speed optimization (Core Web Vitals)\n• Mobile-friendliness\n• XML sitemaps & robots.txt\n• Schema markup (structured data)\n• URL structure & redirects\n• Crawl optimization\n\nThis is included in all our SEO packages. A technically sound site is table stakes for ranking.",
    service: 'seo',
  },

  // ─── Google Ads ───
  {
    id: 'ads-cost',
    category: 'google-ads',
    triggers: ['how much does google ads cost', 'google ads pricing', 'ads budget', 'how much for google ads', 'google ads cost', 'ppc cost', 'what should i spend on ads', 'ads investment'],
    priority: 5,
    response: "Google Ads costs break down into two parts:\n\n1. **Ad Spend** — what you pay Google per click (varies by industry, typically $2-$50/click)\n2. **Management Fee** — our fee to run your campaigns\n\nOur management fees:\n• **Starter ($497/mo)** — Up to $2K ad spend, basic targeting\n• **Growth (quoted individually)** — Advanced optimization for higher-spend campaigns\n• **Enterprise (Custom)** — High spend, full funnel strategy\n\nMost local businesses start with **$1,000-$3,000/mo** total (ad spend + management). What industry are you in?",
    service: 'google-ads',
    qualifyingQuestion: 'What industry is your business in?',
  },
  {
    id: 'ads-how',
    category: 'google-ads',
    triggers: ['how do google ads work', 'how does it work google ads', 'what is google ads', 'ppc explain', 'how does ppc work', 'google ads explained'],
    priority: 3,
    response: "Google Ads puts your business at the top of Google search results when people search for your services. You only pay when someone clicks.\n\nHere's our process:\n1. **Keyword Research** — Find what your customers are searching\n2. **Ad Creation** — Write compelling ads that get clicks\n3. **Targeting** — Set location, schedule, and audience\n4. **Optimization** — Continuously improve performance\n5. **Reporting** — Weekly updates on leads & cost\n\nWe focus on **conversion tracking** so you know exactly what ROI you're getting.",
    service: 'google-ads',
  },
  {
    id: 'ads-roi',
    category: 'google-ads',
    triggers: ['roi', 'return on investment', 'is it worth it', 'worth the money', 'do ads work', 'google ads worth', 'does ppc work', 'conversion rate ads'],
    priority: 4,
    response: "Great question. Google Ads can deliver **3-5x ROI** when set up correctly. Here's the key: we track everything.\n\n• Every lead gets tagged so you know which ads drove it\n• We optimize for **cost per lead**, not just clicks\n• We'll show you exactly what you spent vs. what you earned\n\nOur clients typically see a positive ROI within **30-60 days** of campaign launch. Want to see some examples?",
    service: 'google-ads',
  },
  {
    id: 'ads-targeting',
    category: 'google-ads',
    triggers: ['targeting', 'who sees my ads', 'audience', 'location targeting', 'demographic', 'local ads', 'specific area'],
    priority: 3,
    response: "You have full control over who sees your ads:\n\n• **Location** — Target specific cities, zip codes, or radius around your business\n• **Time** — Show ads only during business hours\n• **Keywords** — Only show for search terms you choose\n• **Device** — Mobile, desktop, or both\n• **Audience** — Target by interests, behaviors, or retarget past visitors\n\nWe're experts at local targeting for Daytona Beach businesses.",
    service: 'google-ads',
  },
  {
    id: 'ads-local-services',
    category: 'google-ads',
    triggers: ['local services ads', 'lss', 'google guaranteed', 'service area', 'home services ads', 'contractor ads'],
    priority: 4,
    response: "If you're a home service or contractor business, **Local Services Ads** are a game-changer. These are the 'Google Guaranteed' ads at the very top of search results. Benefits:\n\n• Pay per lead (not per click)\n• Google's vetting builds trust\n• Shows your business hours, ratings, and service area\n\nWe set up and manage Local Services Ads alongside traditional Google Ads for maximum coverage. Are you in home services or contracting?",
    service: 'google-ads',
  },

  // ─── AI Automation ───
  {
    id: 'ai-what',
    category: 'ai-automation',
    triggers: ['what is ai automation', 'ai automation', 'what can you automate', 'automation services', 'business automation', 'what does ai automation mean'],
    priority: 5,
    response: "AI automation uses artificial intelligence to handle repetitive tasks so your team can focus on growth. We build custom automation for:\n\n• **Lead Generation** — Auto-responders, follow-ups, qualification\n• **CRM Automation** — Contact management, deal tracking, reminders\n• **Customer Support** — AI chatbots that answer common questions\n• **Email & SMS** — Automated campaigns that feel personal\n• **Appointment Booking** — Smart scheduling that learns preferences\n\nWhat repetitive task is eating up most of your team's time?",
    service: 'ai-automation',
    qualifyingQuestion: 'What repetitive task takes up the most time in your business?',
  },
  {
    id: 'ai-crm',
    category: 'ai-automation',
    triggers: ['crm', 'customer relationship', 'contact management', 'hubspot', 'salesforce', 'pipedrive', 'zoho', 'manage contacts', 'track leads'],
    priority: 4,
    response: "We build custom CRM systems that fit your business perfectly — no more force-fitting into generic tools. Features:\n\n• **Automated Lead Capture** — New leads go directly into your CRM\n• **Smart Follow-Ups** — Automated email/SMS sequences\n• **Deal Pipeline** — Visual sales funnel tracking\n• **Analytics Dashboard** — See exactly what's working\n\nWe also integrate with existing CRMs if you already use one. What are you using now?",
    service: 'ai-automation',
  },
  {
    id: 'ai-chatbot',
    category: 'ai-automation',
    triggers: ['chatbot', 'ai chat', 'chat bot', 'virtual assistant', 'automated chat', 'customer service bot', 'live chat bot'],
    priority: 4,
    response: "AI chatbots (like the one you're talking to!) can qualify leads and answer questions 24/7. We build custom chatbots that:\n\n• Answer customer questions instantly\n• Capture lead info (name, email, phone)\n• Book appointments automatically\n• Transfer to humans when needed\n• Learn from conversations to get better\n\nIt's like having a salesperson who never sleeps. Want to see how we built this one?",
    service: 'ai-automation',
  },
  {
    id: 'ai-lead-gen',
    category: 'ai-automation',
    triggers: ['lead generation', 'generate leads', 'more leads', 'get leads', 'lead gen', 'find customers', 'attract clients', 'get more customers'],
    priority: 4,
    response: "Lead generation automation is where AI really shines. We build systems that:\n\n• **Capture** — Forms, chatbots, and landing pages that grab leads\n• **Nurture** — Automated email/SMS sequences that build trust\n• **Score** — AI evaluates lead quality so you focus on the best ones\n• **Route** — Send hot leads straight to your phone or calendar\n\nWe combine automation with your website and ads for a complete lead generation machine. Interested?",
    service: 'ai-automation',
  },
  {
    id: 'ai-cost',
    category: 'ai-automation',
    triggers: ['how much does automation cost', 'ai automation cost', 'automation pricing', 'how much for automation', 'ai automation price', 'cost to automate'],
    priority: 4,
    response: "AI automation projects are custom-built, so pricing varies based on complexity. Typical ranges:\n\n• **Simple Automation** ($1,500-$3,000) — Single workflow, basic chatbot, email sequences\n• **Mid-Scale System** ($3,000-$7,000) — Multi-workflow, CRM integration, lead scoring\n• **Full Automation Stack** ($7,000-$15,000+) — Complete sales & marketing automation\n\nWe start with a discovery call to identify the highest-ROI opportunities. Want to chat about what might work for you?",
    service: 'ai-automation',
  },
  {
    id: 'ai-integration',
    category: 'ai-automation',
    triggers: ['integrate', 'integration', 'connect', 'api', 'existing tools', 'compatible', 'work with', 'sync with'],
    priority: 3,
    response: "We integrate with virtually any tool. Common integrations include:\n\n• **CRMs**: HubSpot, Salesforce, Pipedrive, Zoho\n• **Email**: Gmail, Outlook, Mailchimp, Constant Contact\n• **Calendars**: Calendly, Google Calendar, Outlook Calendar\n• **Payment**: Stripe, Square, PayPal\n• **Marketing**: Meta Ads, Google Ads, LinkedIn\n\nIf your tool has an API, we can connect it. What tools does your business currently use?",
    service: 'ai-automation',
  },

  // ─── Pricing & General ───
  {
    id: 'pricing-overview',
    category: 'pricing',
    triggers: ['pricing', 'how much', 'cost', 'price', 'investment', 'what are your rates', 'packages', 'plans', 'how much do you charge', 'what do you charge', 'fee', 'fees', 'rate'],
    priority: 2,
    response: "Our pricing depends on the service. Here's a quick overview:\n\n**🌐 Web Design** — Simple sites from $599 + $150/mo growth plan; custom builds quoted individually\n**📈 SEO** — $497/mo+\n**📊 Google Ads** — $497/mo + ad spend\n**🤖 AI Automation** — $1,500 to $15,000+\n\nWhich service are you most interested in? I can give you more specific details.",
  },
  {
    id: 'payment-plans',
    category: 'pricing',
    triggers: ['payment plan', 'financing', 'pay monthly', 'installments', 'payment options', 'monthly payment', 'spread the cost'],
    priority: 3,
    response: "Yes! We offer flexible payment options:\n\n• **50/50 Split** — 50% upfront, 50% at launch\n• **Monthly** — Spread payments over 3-6 months\n• **Custom** — We can work out a plan that fits your budget\n\nWe believe in making our services accessible. What budget range are you working with?",
  },
  {
    id: 'about',
    category: 'general',
    triggers: ['who are you', 'about you', 'tell me about yourself', 'who is nxt level', 'what is nxt level builds', 'about the company', 'your background'],
    priority: 4,
    response: "We're **NXTLEVELBUILDS** — a Daytona Beach-based digital agency founded by Cory Brenner. We help local businesses grow with:\n\n• Custom websites that convert\n• Google Ads that generate leads\n• SEO that brings organic traffic\n• AI automation that saves time\n\nWe've worked with 20+ businesses across Florida, from contractors to professional services. Our focus is **results, not fluff** — every strategy is tied to a measurable outcome.\n\nWhat brings you to us today?",
  },
  {
    id: 'location',
    category: 'general',
    triggers: ['where are you', 'location', 'daytona', 'local', 'area', 'florida', 'volusia', 'based'],
    priority: 3,
    response: "We're based in **Daytona Beach, FL** and serve the entire Volusia County area including:\n\n🌊 Daytona Beach\n🌴 Port Orange\n🏖️ Ormond Beach\n🏘️ New Smyrna Beach\n📚 DeLand\n🌅 Palm Coast\n\nWe love working with local businesses — we understand the market and what works here. What city are you in?",
  },
  {
    id: 'industries',
    category: 'general',
    triggers: ['industries', 'what industries', 'who do you work with', 'what type of business', 'niche', 'specialize', 'contractors', 'home services', 'restaurant', 'medical', 'legal', 'professional services'],
    priority: 3,
    response: "We work with a wide range of local businesses, but we especially excel with:\n\n• **Contractors** — Roofers, electricians, plumbers, painters, HVAC\n• **Home Services** — Cleaners, landscapers, pest control, movers\n• **Professional Services** — Lawyers, accountants, realtors, insurance\n• **Healthcare** — Dentists, chiropractors, med spas\n• **E-commerce** — Local retail, specialty products\n\nWe tailor our approach to each industry's unique needs. What industry are you in?",
    qualifyingQuestion: 'What industry is your business in?',
  },
  {
    id: 'why-us',
    category: 'general',
    triggers: ['why you', 'why choose', 'different', 'better than', 'stand out', 'unique', 'what makes you different', 'compared to', 'vs other'],
    priority: 3,
    response: "Great question. Here's what sets us apart:\n\n1. **Speed** — We launch websites in 7 days, not months\n2. **Results Focus** — Every strategy ties to a measurable outcome\n3. **Modern Tech** — We use cutting-edge tools (Next.js, AI, automation)\n4. **Local Expertise** — We know the Daytona Beach market inside out\n5. **Full Service** — Web design, SEO, ads, automation — all in one place\n6. **Transparency** — Monthly reporting, no hidden fees, no long-term contracts\n\nBut don't take our word for it — check our case studies at nxtlevelbuilds.com/work to see real results.",
  },
  {
    id: 'testimonials',
    category: 'general',
    triggers: ['reviews', 'testimonials', 'what do customers say', 'references', 'social proof', 'ratings', 'feedback', 'previous clients'],
    priority: 3,
    response: "We're proud of our track record:\n\n⭐ **5-Star Rating** across all platforms\n✅ **20+ Projects** completed\n🔄 **100% Client Retention** — every client from 2024 is still with us\n\nYou can read detailed case studies with real results at **nxtlevelbuilds.com/work**. Would you like to see examples from your industry?",
  },
  {
    id: 'booking',
    category: 'general',
    triggers: ['book', 'consultation', 'meeting', 'call', 'talk', 'discuss', 'set up a call', 'schedule', 'free consultation', 'strategy call'],
    priority: 5,
    response: "I'd love to set that up! We offer a **free strategy consultation** — no pressure, just a conversation about your goals and how we can help.\n\n👉 **nxtlevelbuilds.com/contact** or you can call us at **(386) 348-3072**\n\nWhat's the best way to reach you?",
  },
  {
    id: 'free-audit',
    category: 'general',
    triggers: ['free audit', 'website audit', 'seo audit', 'audit my site', 'analyze my website', 'check my site', 'site audit'],
    priority: 4,
    response: "Absolutely! We offer two free audits:\n\n**🌐 Free Website Audit** — Get a professional analysis of your site's performance, SEO, mobile-friendliness, and conversion opportunities.\n\n**🔍 Free SEO Audit** — We'll analyze your current search rankings, keyword opportunities, and competitive landscape.\n\nBoth are completely free with no obligation. Which one interests you? (You can grab either at nxtlevelbuilds.com/free-website-audit)",
  },
  {
    id: 'contact',
    category: 'general',
    triggers: ['contact', 'email', 'phone', 'reach you', 'get in touch', 'call', 'message you', 'how to reach'],
    priority: 3,
    response: "You can reach us anytime:\n\n📞 **(386) 348-3072**\n📧 **hello@nxtlevelbuilds.com**\n🌐 **nxtlevelbuilds.com/contact**\n\nOr I can help you right here! What can I assist you with?",
  },
  {
    id: 'services-overview',
    category: 'general',
    triggers: ['what do you do', 'what services', 'services', 'what do you offer', 'what can you help with', 'what do you provide', 'your services', 'capabilities'],
    priority: 3,
    response: "We offer four core services designed to help local businesses grow:\n\n**🌐 Web Design & Development** — Custom, high-performance websites that convert visitors into customers\n**📈 Search Engine Optimization (SEO)** — Get found on Google and attract local customers\n**📊 Google Ads Management** — Targeted ad campaigns that generate leads on demand\n**🤖 AI Automation & CRM** — Automate repetitive tasks, capture leads, and scale efficiently\n\nWhich one sounds most relevant to your business?",
  },
  {
    id: 'guarantee',
    category: 'general',
    triggers: ['guarantee', 'warranty', 'what if im not happy', 'satisfaction', 'money back', 'refund', 'risk free'],
    priority: 3,
    response: "We stand behind our work. Here's our commitment:\n\n• **Web Design** — We iterate until you're thrilled with the result\n• **SEO & Ads** — Full transparency with monthly reporting\n• **No Lock-In** — Month-to-month for ongoing services\n\nWe're not happy unless you're getting results. Our retention rate speaks for itself — **100% of 2024 clients are still with us**.",
  },
  {
    id: 'objection-cost',
    category: 'objections',
    triggers: ['too expensive', 'too much', 'cant afford', 'out of my budget', 'expensive', 'overpriced', 'pricey', 'not cheap', 'budget tight'],
    priority: 5,
    response: "I understand budget is always a consideration. Here's the thing — a professional website and marketing aren't an expense, they're an **investment** that pays for itself.\n\n• A $599 website that brings in 5 new clients = **huge ROI**\n• SEO at $497/mo that doubles your traffic = **pays for itself in one client**\n\nWe also offer **payment plans** to make it manageable. And we start with a free consultation to make sure there's a fit before any investment.\n\nWhat would make the investment work for you?",
  },
  {
    id: 'objection-not-now',
    category: 'objections',
    triggers: ['not now', 'not ready', 'maybe later', 'too busy', 'later', 'not yet', 'sometime', 'future', 'right now', 'not interested'],
    priority: 4,
    response: "Totally understand — running a business is busy. Would it help if we:\n\n1. **Send you a free website audit** so you know what opportunities exist when you're ready?\n2. **Follow up in a few months** when the time is better?\n\nNo pressure at all. I'm here to help whenever you need us. Is a free audit something that would be useful?",
  },
  {
    id: 'objection-current',
    category: 'objections',
    triggers: ['already have someone', 'already have a website', 'already working with', 'existing agency', 'current provider', 'already have a guy', 'have someone'],
    priority: 4,
    response: "That's fair. If you're happy with your current setup, that's great! But if there's anything not working perfectly — slow site, not enough leads, poor ROI on ads — we'd be happy to offer a **free second opinion**.\n\nNo strings attached, no obligation. Sometimes a fresh perspective catches things that are being missed. Worth a quick look?",
  },
  {
    id: 'fallback',
    category: 'general',
    triggers: [],
    priority: 1,
    response: "Great question! I'd be happy to help with that. Could you tell me a bit more about your business so I can give you the most relevant information?\n\nIn the meantime, here's what we specialize in:\n\n• **Web Design** — Custom websites that convert\n• **SEO** — Get found on Google\n• **Google Ads** — Generate leads on demand\n• **AI Automation** — Save time with smart automation\n\nWhich one interests you most?",
  },
];

function findBestMatch(message: string): KnowledgeEntry | null {
  const lower = message.toLowerCase();
  let bestScore = 0;
  let bestMatch: KnowledgeEntry | null = null;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const trigger of entry.triggers) {
      if (lower.includes(trigger.toLowerCase())) {
        score += trigger.split(' ').filter(w => w.length > 2).length;
        score += entry.priority;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch;
}

function extractBusinessInfo(conversation: Conversation): { industry?: string; painPoints: string[] } {
  const painPoints: string[] = [];
  let industry: string | undefined;

  for (const msg of conversation.messages) {
    const lower = msg.content.toLowerCase();
    if (msg.role === 'user') {
      const industries = ['contractor', 'roofing', 'plumbing', 'electrical', 'hvac', 'home services',
        'restaurant', 'medical', 'dental', 'legal', 'lawyer', 'realtor', 'real estate',
        'ecommerce', 'retail', 'professional services', 'cleaning', 'landscaping', 'pest control'];
      for (const ind of industries) {
        if (lower.includes(ind)) {
          industry = ind.charAt(0).toUpperCase() + ind.slice(1);
          break;
        }
      }
      const painKeywords = ['slow', 'no leads', 'not enough', 'outdated', 'old site',
        'bad', 'poor', 'expensive', 'hard', 'complex', 'wasting', 'manual', 'repetitive'];
      for (const kw of painKeywords) {
        if (lower.includes(kw)) painPoints.push(kw);
      }
    }
  }

  return { industry, painPoints };
}

export function generateResponse(message: string, conversation: Conversation): ChatResponse {
  const match = findBestMatch(message);
  const msgCount = conversation.messages.filter(m => m.role === 'user').length;
  const leadCaptured = !!conversation.lead;
  const { industry, painPoints } = extractBusinessInfo(conversation);

  let responseText: string;

  if (match) {
    responseText = match.response;
    if (industry && responseText.includes('What industry')) {
      responseText = responseText.replace('What industry is your business in?', `Great — ${industry}! Let me tailor this for you.`);
    }
    if (match.followUp && msgCount > 2) {
      responseText += '\n\n' + match.followUp;
    }
  } else {
    const entry = KNOWLEDGE_BASE.find(e => e.id === 'fallback')!;
    responseText = entry.response;
  }

  const userMessages = conversation.messages.filter(m => m.role === 'user').length;

  const shouldSuggestLeadForm = !leadCaptured && (
    userMessages >= CHAT_CONFIG.leadFormDelay ||
    message.toLowerCase().includes('pricing') ||
    message.toLowerCase().includes('how much') ||
    message.toLowerCase().includes('cost') ||
    message.toLowerCase().includes('interested') ||
    message.toLowerCase().includes('get started') ||
    message.toLowerCase().includes('sign up') ||
    message.toLowerCase().includes('hire') ||
    message.toLowerCase().includes('start') ||
    message.toLowerCase().includes('yes') ||
    message.toLowerCase().includes('tell me more')
  );

  const shouldSuggestBooking = !leadCaptured && shouldSuggestLeadForm &&
    msgCount >= 4;

  return {
    message: {
      id: uid(),
      role: 'assistant',
      content: responseText,
      timestamp: Date.now(),
    },
    leadFormSuggested: shouldSuggestLeadForm,
    bookingSuggested: shouldSuggestBooking,
  };
}

export function scoreLead(lead: LeadData, conversation: Conversation): LeadScore {
  const budgetScore = lead.budget <= 500 ? 10 : lead.budget <= 1000 ? 30 : lead.budget <= 3000 ? 50 : lead.budget <= 5000 ? 70 : 90;

  const highValueTypes = ['e-commerce', 'ecommerce', 'saas', 'software', 'medical', 'dental', 'legal'];
  const mediumValueTypes = ['contractor', 'home services', 'professional services', 'real estate', 'automotive'];
  const businessTypeScore = highValueTypes.includes(lead.businessType.toLowerCase()) ? 80
    : mediumValueTypes.includes(lead.businessType.toLowerCase()) ? 60 : 40;

  const msgCount = conversation.messages.filter(m => m.role !== 'system').length;
  const engagementScore = msgCount <= 3 ? 20 : msgCount <= 7 ? 40 : 60;

  const serviceKeywords = ['website', 'seo', 'google ads', 'automation', 'crm', 'lead generation', 'chatbot'];
  const mentionedServices = serviceKeywords.filter(kw =>
    conversation.messages.some(m => m.content.toLowerCase().includes(kw))
  );
  const serviceFitScore = Math.min(mentionedServices.length * 15, 100);

  const total = Math.round((budgetScore * 0.35) + (businessTypeScore * 0.2) + (engagementScore * 0.2) + (serviceFitScore * 0.25));

  const tier = total >= 70 ? 'hot' : total >= 40 ? 'warm' : 'cold';

  return { total, budget: budgetScore, businessType: businessTypeScore, engagement: engagementScore, serviceFit: serviceFitScore, tier };
}

export function generateLeadEmailHtml(lead: LeadData, score: LeadScore): string {
  const scoreColor = score.tier === 'hot' ? '#00c47a' : score.tier === 'warm' ? '#f59e0b' : '#6b7280';
  const scoreEmoji = score.tier === 'hot' ? '🔥' : score.tier === 'warm' ? '⭐' : '💤';
  const safe = (s: unknown) => escapeHtml(String(s ?? ''));
  const safeUrl = (s: unknown) => escapeHtml(sanitizeUrl(String(s ?? '')));

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:${scoreColor};padding:20px;border-radius:12px 12px 0 0;text-align:center;">
        <h1 style="color:white;margin:0;font-size:24px;">${scoreEmoji} New Chat Lead — ${score.tier.toUpperCase()}</h1>
        <p style="color:rgba(255,255,255,0.9);margin:8px 0 0 0;">Lead Score: ${score.total}/100</p>
      </div>
      <div style="background:white;border:1px solid #e5e7eb;border-top:0;padding:24px;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;width:140px;">Name:</td><td style="padding:8px 0;color:#111;">${safe(lead.name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Company:</td><td style="padding:8px 0;color:#111;">${safe(lead.company)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Email:</td><td style="padding:8px 0;color:#111;"><a href="mailto:${safe(lead.email)}">${safe(lead.email)}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Phone:</td><td style="padding:8px 0;color:#111;">${safe(lead.phone)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Website:</td><td style="padding:8px 0;color:#111;"><a href="${safe(lead.website)}">${safe(lead.website) || 'Not provided'}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Monthly Budget:</td><td style="padding:8px 0;color:#111;">$${lead.budget.toLocaleString()}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;color:#374151;">Business Type:</td><td style="padding:8px 0;color:#111;">${safe(lead.businessType)}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:8px;">
          <h3 style="margin:0 0 12px 0;font-size:14px;color:#374151;">Lead Score Breakdown</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <span style="background:${scoreColor};color:white;padding:4px 12px;border-radius:20px;font-size:12px;">Budget: ${score.budget}/100</span>
            <span style="background:${scoreColor};color:white;padding:4px 12px;border-radius:20px;font-size:12px;">Business Type: ${score.businessType}/100</span>
            <span style="background:${scoreColor};color:white;padding:4px 12px;border-radius:20px;font-size:12px;">Engagement: ${score.engagement}/100</span>
            <span style="background:${scoreColor};color:white;padding:4px 12px;border-radius:20px;font-size:12px;">Service Fit: ${score.serviceFit}/100</span>
          </div>
        </div>
        <div style="margin-top:16px;padding:12px;background:#eff6ff;border-radius:8px;border-left:4px solid #1a6eff;">
          <p style="margin:0;font-size:13px;color:#374151;">Reply to this email to respond directly to ${safe(lead.name)}.</p>
        </div>
      </div>
    </div>
  `;
}
