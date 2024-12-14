import { CardType, MapType } from '@/libs/const';
import OfferList from '../offer-list/offer-list';
import { useState } from 'react';
import MapComponent from '../map-component/map-component';
import { MainPageProps } from '@/pages/main-page/main-page';


function MainCitiesContainer({placesToStay, offers, activeCity}: MainPageProps) {

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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <OfferList onHandleActiveOfferChange={handleActiveOfferChange} offers={offers} offerCardType={CardType.CitiesCard}/>
        </section>
        <div className="cities__right-section">
          <MapComponent mapType={MapType.MainMap}/>
        </div>
      </div>
    </div>
  );
}

export default MainCitiesContainer;
