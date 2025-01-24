import { Cities } from '@/libs/const';
import { DEFAULT_CITY } from '@/libs/mocks/cities-locations';
import type { AppDispatch } from '@/storage';
import { offersActions } from '@/storage/slices/offers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

type MainCitiesLocationsProps = {
	activeCity: Cities;
};
function MainCitiesLocations({ activeCity }: MainCitiesLocationsProps) {

  const [searchParam, setSearchParam] = useSearchParams();


  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(offersActions.setActiveCity(searchParam.get('city') || Cities.PARIS));
  },[searchParam, dispatch]);

  const handleCityClick = () => {
    setSearchParam({city});
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city: Cities) => (
            <li
              key={city}
              className="locations__item"
            >
              <Link onClick={() => handleCityClick} className={
                activeCity === city
                  ? 'locations__item-link tabs__item tabs__item--active'
                  : 'locations__item-link tabs__item'
              }
              to={`?city=${city}`}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainCitiesLocations;
