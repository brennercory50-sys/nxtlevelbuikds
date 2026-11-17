import { permanentRedirect } from 'next/navigation';

// Pricing lives on the contact page. Permanent (308), so search engines move
// any signals from /pricing to /contact instead of treating it as temporary.
export default function PricingPage() {
  permanentRedirect('/contact');
}
