import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['ormond-beach'];

export const metadata = cityMetadata(city);

export default function WebDesignOrmondBeach() {
  return <CityLanding city={city} />;
}
