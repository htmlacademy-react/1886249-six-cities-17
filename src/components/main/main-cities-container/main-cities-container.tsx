import { CardType, Cities, MapType } from '@/libs/const';
import OfferList from '../offer-list/offer-list';
import { useState } from 'react';
import MapComponent from '../../map-component/map-component';
import SortingCities from '../../sorting-cities/sorting-cities';
import { OfferCardPrew, OfferCity,} from '@/libs/types/types';
import CitiesEmpty from '../main-cities-empty/main-cities-empty';


type MainCitiesContainerProps = {
  placesToStay: number;
  offers: OfferCardPrew[];
  activeCity: Cities;
  city: OfferCity;
}

function MainCitiesContainer({placesToStay, offers, city, activeCity }: MainCitiesContainerProps) {

  const [selectedPoint, setSelectedPoint] = useState<OfferCardPrew | undefined>(
    undefined
  );

  const handleListItemHover = (listItemId: string | null) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="cities">
      {offers.length > 0 ?
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesToStay} places to stay in {activeCity}</b>
            <SortingCities/>
            <OfferList offers={offers} onListItemHover={handleListItemHover} offerCardType={CardType.CitiesCard}/>
          </section>
          <div className="cities__right-section">
            <MapComponent mapType={MapType.MainMap} city={city} offers={offers} selectedOffer={selectedPoint}/>
          </div>
        </div>
        : <CitiesEmpty/>}
    </div>
  );
}

export default MainCitiesContainer;
