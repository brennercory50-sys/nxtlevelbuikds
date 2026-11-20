import CityLanding, { cityMetadata } from '@/components/CityLanding';
import { cities } from '@/lib/cities';

const city = cities['edgewater'];

export const metadata = cityMetadata(city);

export default function WebDesignEdgewater() {
  return <CityLanding city={city} />;
}
