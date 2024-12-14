import { OfferCardPrew } from '@/libs/types';
import { Cities} from '@/libs/const';
import MainCitiesLocations from '@/components/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main-cities-container/main-cities-container';

export type MainPageProps = {
  placesToStay: number;
  offers: OfferCardPrew[];
  activeCity: Cities;
}

export default function MainPage ({placesToStay, offers, activeCity}: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainCitiesLocations activeCity={Cities.AMSTERDAM}/>
      <MainCitiesContainer placesToStay={placesToStay} offers={offers} activeCity={Cities.AMSTERDAM} />
    </main>
  );
}


