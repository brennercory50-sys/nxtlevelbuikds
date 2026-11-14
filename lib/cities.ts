// Content for the city landing pages (/services/web-design-<city>).
// Keep every local fact here verifiable: neighborhoods, ZIP codes and landmarks
// that a resident would recognize, and no statistics or results we can't back up.

export type CityIndustry = {
  name: string;
  /** One sentence on why sites in this trade matter here. */
  note: string;
  /** Optional guide on the blog for this trade. */
  guide?: { label: string; href: string };
};

export type CityFaq = { q: string; a: string };

export type City = {
  slug: string;
  name: string;
  county: 'Volusia' | 'Flagler';
  metaTitle: string;
  metaDescription: string;
  geo: { latitude: number; longitude: number };
  zips: string[];
  heroTitle: [string, string];
  heroIntro: string;
  /** Two or three paragraphs specific to doing business in this city. */
  local: string[];
  areas: string[];
  industries: CityIndustry[];
  faqs: CityFaq[];
  /** The city's guide post on the blog. */
  guide: { title: string; href: string };
};

const guides = {
  homeServices: { label: 'Home service website checklist', href: '/blog/home-services-website-checklist' },
  contractors: { label: 'Contractor website checklist', href: '/blog/contractor-website-checklist' },
  roofing: { label: 'Roofing website guide', href: '/blog/roofing-website-design' },
  pool: { label: 'Pool service website guide', href: '/blog/pool-service-website-design' },
  landscaping: { label: 'Landscaping website guide', href: '/blog/landscaping-website-design' },
  salon: { label: 'Salon website guide', href: '/blog/salon-website-design' },
  detailing: { label: 'Auto detailing website guide', href: '/blog/auto-detailing-website-design' },
  cleaning: { label: 'Cleaning service website guide', href: '/blog/cleaning-service-website-design' },
  pressure: { label: 'Pressure washing website guide', href: '/blog/pressure-washing-website-design' },
  gbp: { label: 'Google Business Profile checklist', href: '/blog/google-business-profile-checklist-florida' },
};

export const cities: Record<string, City> = {
  'port-orange': {
    slug: 'port-orange',
    name: 'Port Orange',
    county: 'Volusia',
    metaTitle: 'Web Design Port Orange FL | Custom Websites',
    metaDescription: 'Custom web design in Port Orange, FL. Fast, mobile-first websites built to show up in local search and turn visitors into calls. Serving ZIP codes 32127, 32128 & 32129.',
    geo: { latitude: 29.1383, longitude: -80.9956 },
    zips: ['32127', '32128', '32129'],
    heroTitle: ['Web Design for', 'Port Orange'],
    heroIntro: "Port Orange is mostly neighborhoods, which makes it a home-services town. When something breaks, people search on their phone and call whoever looks trustworthy first. I build sites that make that you.",
    local: [
      "Port Orange sits on the Halifax River between Daytona Beach and New Smyrna Beach. Dunlawton Avenue is the main business corridor, running from US-1 out past I-95, with Clyde Morris Boulevard and Taylor Road carrying a lot of the city's retail and medical offices.",
      "Most customers here are homeowners: established riverside streets near Allandale and Riverwalk, golf and gated communities like Cypress Head, and newer development west of I-95. That means plumbers, roofers, pool companies, lawn crews and cleaners compete for the same nearby searches, and the ones with a fast, clear site and a solid Google Business Profile get the calls.",
      "A Port Orange business also pulls from next door. Someone in South Daytona or Daytona Beach Shores is often minutes away, so a good site says plainly which areas you cover instead of pretending to be everywhere.",
    ],
    areas: ['Dunlawton Ave', 'Clyde Morris Blvd', 'Taylor Rd', 'Allandale', 'Riverwalk & Riverside Dr', 'Sugar Mill', 'Rose Bay', 'Cypress Head', 'Spruce Creek', 'West of I-95'],
    industries: [
      { name: 'Plumbing, HVAC & Electrical', note: 'Emergency searches happen on phones. Tap-to-call and clear service areas win them.', guide: guides.homeServices },
      { name: 'Pool Service', note: 'Weekly routes are the business. A site should sign people up for one.', guide: guides.pool },
      { name: 'Roofing & Exteriors', note: 'Homeowners compare roofers carefully. Licensing, photos and process build trust.', guide: guides.roofing },
      { name: 'Lawn & Landscaping', note: 'Separate maintenance from design-and-install so the right customers find you.', guide: guides.landscaping },
      { name: 'Cleaning Services', note: 'Recurring cleans come from clear pricing and visible trust signals.', guide: guides.cleaning },
      { name: 'Medical & Dental', note: 'Patients check hours, insurance and location before they call.' },
    ],
    faqs: [
      { q: 'Do you work with businesses in Port Orange, or only Daytona Beach?', a: "Port Orange is right next door, so yes. I'm based in Daytona Beach and work with businesses across Volusia County. Most of the process happens by phone and email anyway, and I can meet in person when that helps." },
      { q: 'How long until my Port Orange business shows up on Google?', a: "It depends on your trade and how many competitors are already well set up nearby. A new site can be indexed within days, but ranking well in the map results usually takes steady work over months, not weeks. Before you spend anything, I'll show you where you stand today and what it would take." },
      { q: 'What does a website cost?', a: 'Simple sites start at $599 plus $150 a month, which covers hosting, updates and support. Bigger custom builds and web apps are quoted individually after a free call, so you know the price before any work starts.' },
    ],
    guide: { title: 'Web design in Port Orange: what local businesses need', href: '/blog/web-design-port-orange-what-local-businesses-need' },
  },

  'ormond-beach': {
    slug: 'ormond-beach',
    name: 'Ormond Beach',
    county: 'Volusia',
    metaTitle: 'Web Design Ormond Beach FL | Custom Websites',
    metaDescription: 'Custom web design in Ormond Beach, FL. Polished, fast websites built to show up in local search and turn visitors into customers. Serving ZIP codes 32174 & 32176.',
    geo: { latitude: 29.2858, longitude: -81.0559 },
    zips: ['32174', '32176'],
    heroTitle: ['Web Design for', 'Ormond Beach'],
    heroIntro: "Ormond Beach customers notice quality. A dated or clumsy website quietly sends them to the next result. I build polished, fast sites that look like the business behind them.",
    local: [
      "Ormond Beach splits into two sides of the Halifax River. Beachside, east of the river along A1A, is homes, condos and visitors. The mainland runs west along Granada Boulevard toward I-95, through neighborhoods like The Trails and, further west, Hunter's Ridge.",
      "Granada Boulevard is the main business street on both sides, and a lot of local businesses serve established homeowners and retirees who expect a professional experience and will research before they call. Clear information, real photos and honest pricing matter more here than flashy design.",
      "Ormond also borders Daytona Beach to the south and Ormond-by-the-Sea to the north, so a good site makes your service area obvious. That's one of the easiest ways to stop wasting calls on people you can't serve.",
    ],
    areas: ['Granada Blvd', 'Beachside / A1A', 'Downtown Ormond', 'The Trails', "Hunter's Ridge", 'Tomoka area', 'Ormond-by-the-Sea', 'Plantation Bay area'],
    industries: [
      { name: 'Home Services', note: 'Homeowners here compare carefully. Reviews, licensing and clear pricing do the selling.', guide: guides.homeServices },
      { name: 'Salons & Spas', note: 'Booking in one tap and a real service menu fill chairs.', guide: guides.salon },
      { name: 'Medical & Dental', note: 'Patients want hours, insurance and directions in seconds.' },
      { name: 'Real Estate', note: 'Beachside and mainland buyers search very differently. Your site should speak to both.' },
      { name: 'Boutique Retail & Restaurants', note: 'Up-to-date hours, menus and photos keep local regulars and visitors coming.' },
      { name: 'Pressure Washing & Exteriors', note: 'Salt air and humidity keep this work steady. Before-and-afters sell it.', guide: guides.pressure },
    ],
    faqs: [
      { q: 'Do you work with Ormond Beach businesses?', a: "Yes. I'm based in Daytona Beach, a few minutes south, and work with businesses on both the beachside and the mainland." },
      { q: 'My business gets most of its work from referrals. Do I still need a better website?', a: "Referrals still check you out online before they call. If your site is slow, out of date or hard to use on a phone, some of them won't call. A good site turns referrals into booked work and helps new people find you too." },
      { q: 'What does a website cost?', a: 'Simple sites start at $599 plus $150 a month, which covers hosting, updates and support. Bigger custom builds are quoted individually after a free call, so you know the price before any work starts.' },
    ],
    guide: { title: 'Web design in Ormond Beach: what local businesses need', href: '/blog/web-design-ormond-beach-what-local-businesses-need' },
  },

  'new-smyrna-beach': {
    slug: 'new-smyrna-beach',
    name: 'New Smyrna Beach',
    county: 'Volusia',
    metaTitle: 'Web Design New Smyrna Beach FL | Custom Websites',
    metaDescription: 'Custom web design in New Smyrna Beach, FL for vacation rentals, restaurants, shops and local services. Fast, mobile-first sites built for locals and visitors. ZIP codes 32168 & 32169.',
    geo: { latitude: 29.0258, longitude: -80.927 },
    zips: ['32168', '32169'],
    heroTitle: ['Web Design for', 'New Smyrna Beach'],
    heroIntro: "New Smyrna Beach businesses serve two audiences at once: locals who know the town and visitors searching from somewhere else. Your website has to work for both.",
    local: [
      "New Smyrna has two business districts with very different feels. Flagler Avenue on the beachside is restaurants, surf shops and shops a few blocks from the sand. Canal Street on the mainland is the historic downtown, with galleries, dining and local services.",
      "Visitors usually find you before they arrive, searching from home for somewhere to stay, eat or rent a board. That means your site has to load fast on a phone, show up-to-date hours and photos, and make booking or ordering obvious. Locals want the same things, plus proof you'll still be here next season.",
      "Vacation rentals are a big part of the local economy. A rental's own website, alongside the listing platforms, gives repeat guests a way to book directly and gives you a place to tell your property's story your way.",
    ],
    areas: ['Flagler Ave', 'Canal St Historic District', 'Beachside', 'Coronado Beach', 'Bethune Beach', 'Riverside Dr', 'Turnbull Bay', 'Venetian Bay'],
    industries: [
      { name: 'Vacation Rentals', note: 'A direct-booking site gives repeat guests a way to book with you, not just the platforms.' },
      { name: 'Restaurants & Bars', note: 'Menus, hours and directions are what visitors search for. Make them instant.' },
      { name: 'Surf, Fishing & Water Sports', note: 'Rentals, lessons and charters need clear booking and real photos.' },
      { name: 'Galleries & Boutiques', note: 'Show the work beautifully and make visiting or buying easy.' },
      { name: 'Cleaning & Turnovers', note: 'Hosts need reliable turnover crews and search for them.', guide: guides.cleaning },
      { name: 'Home Services', note: 'Salt air is hard on homes. Locals need contractors they can trust.', guide: guides.homeServices },
    ],
    faqs: [
      { q: 'Can a website help my vacation rental get direct bookings?', a: "It can give repeat guests and referrals a way to book with you directly, which avoids some platform fees, and it lets you present the property your own way. Most owners keep their listings too; the site works alongside them. I'll be honest about whether it's worth it for your property before you spend anything." },
      { q: 'Do you work with shops and restaurants on Flagler Ave and Canal St?', a: "Yes. For shops and restaurants the essentials are simple: fast on a phone, current hours, a real menu or product photos, and directions. I'll tell you plainly whether you need a custom site or whether a simpler setup will do." },
      { q: 'What does a website cost?', a: 'Simple sites start at $599 plus $150 a month, which covers hosting, updates and support. Booking systems and bigger custom builds are quoted individually after a free call, so you know the price before any work starts.' },
    ],
    guide: { title: 'Web design in New Smyrna Beach: what local businesses need', href: '/blog/web-design-new-smyrna-beach-what-local-businesses-need' },
  },

  deland: {
    slug: 'deland',
    name: 'DeLand',
    county: 'Volusia',
    metaTitle: 'Web Design DeLand FL | Custom Websites',
    metaDescription: 'Custom web design in DeLand, FL for downtown shops, professional offices, contractors and service businesses across West Volusia. Serving ZIP codes 32720 & 32724.',
    geo: { latitude: 29.0283, longitude: -81.3031 },
    zips: ['32720', '32724'],
    heroTitle: ['Web Design for', 'DeLand'],
    heroIntro: "DeLand is the county seat of Volusia County, with a busy historic downtown and Stetson University. It runs on local reputation, and your website is now where that reputation gets checked.",
    local: [
      "DeLand's historic downtown along Woodland Boulevard is full of independent restaurants, shops and offices, and as the county seat it's home to the courthouse and government buildings that bring attorneys, title companies and professional services with them.",
      "Stetson University adds students, faculty and visiting families to the mix, and DeLand also serves much of West Volusia: Lake Helen, Orange City, DeLeon Springs and the surrounding rural areas. A lot of those customers drive in, so a site that makes your location, hours and service area clear does real work.",
      "Professional services here, like law, accounting, insurance and real estate, live on trust. A clean site that explains what you do, who you help and how to reach you often matters more than any ad.",
    ],
    areas: ['Downtown / Woodland Blvd', 'Stetson University area', 'Spring Hill', 'Glenwood', 'DeLeon Springs', 'Lake Helen', 'Orange City', 'West Volusia'],
    industries: [
      { name: 'Attorneys & Professional Services', note: 'Clear practice areas and an easy way to reach you build trust before the first call.' },
      { name: 'Contractors & Trades', note: 'West Volusia homeowners search by service and town. Pages for both win the call.', guide: guides.contractors },
      { name: 'Downtown Shops & Restaurants', note: 'Current hours, menus and photos turn searches into visits.' },
      { name: 'Healthcare', note: 'Patients want services, insurance and directions without digging.' },
      { name: 'Lawn & Landscaping', note: 'Bigger lots and rural properties make this steady local work.', guide: guides.landscaping },
      { name: 'Auto Services & Detailing', note: 'Before-and-afters and clear packages do the selling.', guide: guides.detailing },
    ],
    faqs: [
      { q: 'Do you work with DeLand and West Volusia businesses?', a: "Yes. I'm based in Daytona Beach and work with businesses across Volusia County, including DeLand, Lake Helen and Orange City. Most of the process happens by phone and email, and I can meet in person when that helps." },
      { q: 'I mostly get customers from word of mouth. Why invest in a website?', a: "People who hear about you still look you up before they call. A clear, fast site turns that word of mouth into booked work, and it helps people outside your circle find you too." },
      { q: 'What does a website cost?', a: 'Simple sites start at $599 plus $150 a month, which covers hosting, updates and support. Bigger custom builds are quoted individually after a free call, so you know the price before any work starts.' },
    ],
    guide: { title: 'Web design in DeLand: what local businesses need', href: '/blog/web-design-deland-what-local-businesses-need' },
  },

  'palm-coast': {
    slug: 'palm-coast',
    name: 'Palm Coast',
    county: 'Flagler',
    metaTitle: 'Web Design Palm Coast FL | Custom Websites',
    metaDescription: 'Custom web design in Palm Coast, FL for contractors, home services and local businesses across Flagler County. Fast, mobile-first sites. Serving ZIP codes 32137 & 32164.',
    geo: { latitude: 29.5845, longitude: -81.2079 },
    zips: ['32137', '32164'],
    heroTitle: ['Web Design for', 'Palm Coast'],
    heroIntro: "Palm Coast keeps growing, and new residents don't have a go-to plumber, dentist or landscaper yet. They search for one. A fast, clear website is how you become their first call.",
    local: [
      "Palm Coast is the largest city in Flagler County, just north of Volusia. It's mostly residential, with neighborhoods spread across a wide area, from Palm Harbor and the Hammock near the coast to Matanzas Woods in the north and the newer areas around Town Center.",
      "New construction and new residents keep demand high for contractors, home services, healthcare and real estate. People who just moved here search for everything, so being easy to find and easy to trust on a phone is worth a lot.",
      "Because the city is spread out, service area matters. A good site makes it obvious which neighborhoods you cover, and whether you also serve Flagler Beach or Bunnell, so the calls you get are calls you can take.",
    ],
    areas: ['Town Center', 'Palm Harbor', 'Hammock', 'Grand Haven', 'Matanzas Woods', 'European Village', 'Flagler Beach', 'Bunnell'],
    industries: [
      { name: 'Builders & Contractors', note: 'Show your projects, licensing and process. New homeowners compare carefully.', guide: guides.contractors },
      { name: 'Home Services', note: 'New residents search for every service. Be easy to find and easy to call.', guide: guides.homeServices },
      { name: 'Pool Service', note: 'New pools need weekly service. Make signing up simple.', guide: guides.pool },
      { name: 'Lawn & Landscaping', note: 'New builds need landscaping. Separate installs from maintenance.', guide: guides.landscaping },
      { name: 'Real Estate', note: 'Relocating buyers research neighborhoods online long before they visit.' },
      { name: 'Medical & Dental', note: 'Newcomers need a new doctor. Hours, insurance and booking win them.' },
    ],
    faqs: [
      { q: 'Do you work with Palm Coast businesses?', a: "Yes. I'm based in Daytona Beach and work with businesses up the coast in Flagler County, including Palm Coast and Flagler Beach. Most of the process happens by phone and email." },
      { q: 'How do I get my Palm Coast business to show up on Google Maps?', a: "It comes down to a complete, accurate Google Business Profile, a website that clearly says what you do and where, consistent business details across the web, and real reviews. I set up the website and profile side properly and show you how to keep the reviews coming." },
      { q: 'What does a website cost?', a: 'Simple sites start at $599 plus $150 a month, which covers hosting, updates and support. Bigger custom builds are quoted individually after a free call, so you know the price before any work starts.' },
    ],
    guide: { title: 'Web design in Palm Coast: what local businesses need', href: '/blog/web-design-palm-coast-what-local-businesses-need' },
  },
};

export const cityLinks = [
  { label: 'Port Orange', href: '/services/web-design-port-orange' },
  { label: 'Ormond Beach', href: '/services/web-design-ormond-beach' },
  { label: 'New Smyrna Beach', href: '/services/web-design-new-smyrna-beach' },
  { label: 'DeLand', href: '/services/web-design-deland' },
  { label: 'Palm Coast', href: '/services/web-design-palm-coast' },
  { label: 'All of Volusia County', href: '/services/web-design-volusia-county' },
];
