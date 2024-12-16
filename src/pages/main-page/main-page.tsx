import { OfferCardPrew } from '@/libs/types/types';
import { Cities} from '@/libs/const';
import MainCitiesLocations from '@/components/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main-cities-container/main-cities-container';
import { useState } from 'react';
import { CITY } from '@/libs/mocks/city';

export type MainPageProps = {
  placesToStay: number;
  offers: OfferCardPrew[];
}

export default function MainPage ({placesToStay, offers}: MainPageProps): JSX.Element {

  const [activeCity, setActiveCity] = useState(Cities.AMSTERDAM);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainCitiesLocations activeCity={activeCity} setActiveCity={setActiveCity}/>
      <MainCitiesContainer placesToStay={placesToStay} activeCity={activeCity} offers={offers} city={CITY}/>
    </main>
  );
}


