import MainCitiesLocations from '@/components/main/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main/main-cities-container/main-cities-container';
import { CITIES_LOCATIONS, DEFAULT_CITY } from '@/libs/mocks/cities-locations';
import { Cities } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import Spinner from '@/components/spinner/spinner';
import MainEmpty from '../main-empty/main-empty';
import { useSelector } from 'react-redux';
import { offersSelectors } from '@/storage/slices/offers';


type MainPageProps = {
  activeCity: Cities;
  offers: OfferCardPrew[];
}

export default function MainPage ({activeCity, offers}: MainPageProps): JSX.Element {

  const particularCityOffers = offers.filter((offer) => offer.city.name === activeCity.toString());

  const isLoading = useSelector(offersSelectors.selectLoadingStatus);

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
      {offers.length > 0 && (!isLoading ? <MainCitiesContainer placesToStay={placesToStay} activeCity={activeCity} offers={particularCityOffers} city={safeCityForOffers}/> : <Spinner />)}
      {!offers.length && <MainEmpty activeCity={activeCity}/>}
    </main>
  );
}


