import './main-page.css';
import MainCitiesLocations from '@/components/main/main-cities-locations/main-cities-locations';
import MainCitiesContainer from '@/components/main/main-cities-container/main-cities-container';
import { CITIES_LOCATIONS, DEFAULT_CITY } from '@/libs/mocks/cities-locations';
import { Cities, RequestStatus } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import Spinner from '@/components/spinner/spinner';
import MainEmpty from '../main-empty/main-empty';
import { offersSelectors } from '@/storage/slices/offers';
import { useAppSelector } from '@/hooks';


type MainPageProps = {
  activeCity: Cities;
  offers: OfferCardPrew[];
}

export default function MainPage ({activeCity, offers}: MainPageProps): JSX.Element {

  const particularCityOffers = offers.filter((offer) => offer.city.name === activeCity.toString());
  const isLoading = useAppSelector(offersSelectors.selectOffersRequestStatus);

  const placesToStay = particularCityOffers.length;

  const cityForOffers = CITIES_LOCATIONS.find((city) => {
    if (city.name === activeCity.toString()) {
      return city;
    }
  });

  const safeCityForOffers = cityForOffers !== undefined ? cityForOffers : DEFAULT_CITY;

  const getMainContent = () => {
    if (offers.length && isLoading === RequestStatus.Success){
      return <MainCitiesContainer placesToStay={placesToStay} activeCity={activeCity} offers={particularCityOffers} city={safeCityForOffers}/>;
    } else if (isLoading === RequestStatus.Loading){
      return <Spinner />;
    } else if (isLoading === RequestStatus.Success && !offers.length) {
      return <MainEmpty activeCity={activeCity}/>;
    } else if (isLoading === RequestStatus.Failed) {
      return <p className='fail-message'>Oooooops... something went wrong, try one more time</p>;
    }
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainCitiesLocations activeCity={activeCity} />
      {getMainContent()}
    </main>
  );
}


