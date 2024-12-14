import { CardType, Cities, MapType } from '@/libs/const';
import OfferList from '../offer-list/offer-list';
import { useState } from 'react';
import MapComponent from '../map-component/map-component';
import { MainPageProps } from '@/pages/main-page/main-page';
import SortingCities from '../sorting-cities/sorting-cities';


type MainCitiesContainerProps = MainPageProps & {
  activeCity: Cities;
}

function MainCitiesContainer({placesToStay, offers, activeCity, selectedPoint}: MainCitiesContainerProps) {

  const [isActiveOffer, setIsActiveOffer] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) => {
    setIsActiveOffer(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesToStay} places to stay in {activeCity}</b>
          <SortingCities/>
          <OfferList onHandleActiveOfferChange={handleActiveOfferChange} offers={offers} offerCardType={CardType.CitiesCard}/>
        </section>
        <div className="cities__right-section">
          <MapComponent mapType={MapType.MainMap} offers={offers} selectedPoint={selectedPoint} activeCity={activeCity}/>
        </div>
      </div>
    </div>
  );
}

export default MainCitiesContainer;
