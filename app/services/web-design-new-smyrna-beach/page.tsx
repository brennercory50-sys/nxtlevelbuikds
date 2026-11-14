import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['new-smyrna-beach'];

export const metadata = cityMetadata(city);

export default function WebDesignNewSmyrnaBeach() {
  return <CityLanding city={city} />;
}
