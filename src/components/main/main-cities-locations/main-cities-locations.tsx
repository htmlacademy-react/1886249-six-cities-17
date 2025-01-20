import { Cities } from '@/libs/const';
import type { AppDispatch } from '@/storage';
import { offersActions } from '@/storage/slices/offers';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type MainCitiesLocationsProps = {
	activeCity: Cities;
};
function MainCitiesLocations({ activeCity }: MainCitiesLocationsProps) {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city: Cities) => (
            <li
              key={city}
              className="locations__item"
              onClick={() => {
                dispatch(offersActions.setActiveCity(city));
              }}
            >
              <Link
                className={
                  activeCity === city
                    ? 'locations__item-link tabs__item tabs__item--active'
                    : 'locations__item-link tabs__item'
                }
                //FIXME: обновление URL опаздывает на 1 город
                to={''}
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
