import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['deltona'];

export const metadata = cityMetadata(city);

export default function WebDesignDeltona() {
  return <CityLanding city={city} />;
}
