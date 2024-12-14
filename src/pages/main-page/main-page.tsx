import { OfferCardPrew } from '@/libs/types';
import { Cities} from '@/libs/const';
import MainCitiesLocations from '@/components/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main-cities-container/main-cities-container';
import { useState } from 'react';

export type MainPageProps = {
  placesToStay: number;
  offers: OfferCardPrew[];
  selectedPoint: OfferCardPrew;
}

export default function MainPage ({placesToStay, offers, selectedPoint}: MainPageProps): JSX.Element {

  const [activeCity, setActiveCity] = useState(Cities.PARIS);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainCitiesLocations activeCity={activeCity} setActiveCity={setActiveCity}/>
      <MainCitiesContainer selectedPoint={selectedPoint} placesToStay={placesToStay} offers={offers} activeCity={activeCity} />
    </main>
  );
}


