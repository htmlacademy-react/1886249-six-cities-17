import MainCitiesLocations from '@/components/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main-cities-container/main-cities-container';
import { CITIES_LOCATIONS, DEFAULT_CITY } from '@/libs/mocks/cities-locations';
import { useAppSelector } from '@/hooks';


export default function MainPage (): JSX.Element {

  const activeCity = useAppSelector((state) => state.activeCity);

  const offers = useAppSelector((state) => state.offers);
  const particularCityOffers = offers.filter((offer) => offer.city.name === activeCity.toString());

  const placesToStay = particularCityOffers.length;

  const cityForOffers = CITIES_LOCATIONS.find((city) => {
    if (city.name === activeCity.toString()) {
      return city;
    }
  });


  const safeCityForOffers = cityForOffers !== undefined ? cityForOffers : DEFAULT_CITY;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainCitiesLocations activeCity={activeCity} />
      <MainCitiesContainer placesToStay={placesToStay} activeCity={activeCity} offers={particularCityOffers} city={safeCityForOffers}/>
    </main>
  );
}


