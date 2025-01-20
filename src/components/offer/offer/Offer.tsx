import OfferGalary from '../offer-gallery/offer-gallery';
import OfferDescription from '../offer-description/offer-description';
import { MapType } from '../../../libs/const';
import MapComponent from '@/components/map-component/map-component';
import { OfferCardPrew, OfferFull } from '@/libs/types/types';
import { CITIES_LOCATIONS } from '@/libs/mocks/cities-locations';

type OfferProps = {
  nearOffers: OfferCardPrew[];
  currentOffer: OfferFull;
  selectedPoint: OfferCardPrew | undefined;
}

function Offer({nearOffers, currentOffer, selectedPoint}: OfferProps) {

  const cityForOffers = CITIES_LOCATIONS.find((city) => city.name === currentOffer.city.name);

  if (!cityForOffers) {
    return null;
  }

  return (
    <section className="offer">
      <OfferGalary images={currentOffer.images}/>
      <OfferDescription currentOffer={currentOffer}/>
      <MapComponent mapType={MapType.OfferMap} offers={nearOffers} selectedOffer={selectedPoint} city={cityForOffers}/>
    </section>
  );
}

export default Offer;
