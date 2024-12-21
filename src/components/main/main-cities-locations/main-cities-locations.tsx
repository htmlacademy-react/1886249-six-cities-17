import { useAppDispatch } from '@/hooks';
import { Cities } from '@/libs/const';
import { changeActiveCity } from '@/store/action';
import { Link } from 'react-router-dom';

type MainCitiesLocationsProps = {
  activeCity: Cities;
}
function MainCitiesLocations({ activeCity } : MainCitiesLocationsProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city: Cities) => (
            <li key={city} className="locations__item"
              onClick={() => {
                dispatch(changeActiveCity(city));
              }}
            >
              <Link className={activeCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} to={''}><span>{city}</span></Link>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default MainCitiesLocations;
