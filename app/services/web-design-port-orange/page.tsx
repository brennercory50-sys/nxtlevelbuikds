import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['port-orange'];

export const metadata = cityMetadata(city);

export default function WebDesignPortOrange() {
  return <CityLanding city={city} />;
}
