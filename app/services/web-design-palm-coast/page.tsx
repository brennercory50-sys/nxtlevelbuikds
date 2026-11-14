import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['palm-coast'];

export const metadata = cityMetadata(city);

export default function WebDesignPalmCoast() {
  return <CityLanding city={city} />;
}
