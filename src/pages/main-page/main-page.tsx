/* eslint-disable react/jsx-closing-tag-location */
import { NavLink } from 'react-router-dom';
import { Cities } from '../../libs/const';
import { Offer } from '../../libs/types';
import OfferList from '../../components/offer-list/offer-list';

type MainPageProps = {
  placesToStay: number;
  offers: Offer[];
}

export default function MainPage ({placesToStay, offers}: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(Cities).map((city: Cities) => (<li key={city} className="locations__item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}><span>{city}</span></NavLink>
            </li>))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
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
            <OfferList offers={offers}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
}


