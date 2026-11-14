import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['deland'];

export const metadata = cityMetadata(city);

export default function WebDesignDeland() {
  return <CityLanding city={city} />;
}
