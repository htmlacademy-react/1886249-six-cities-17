import { Cities } from '@/libs/const';
import { Link } from 'react-router-dom';

type MainCitiesLocationsProps = {
  activeCity: Cities;
}
function MainCitiesLocations({ activeCity } : MainCitiesLocationsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Cities).map((city: Cities) => (
            <li key={city} className="locations__item">
              <Link to={`/${city}`} className={activeCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}><span>{city}</span></Link>
            </li>))}
        </ul>
      </section>
    </div>
  );
}

export default MainCitiesLocations;
