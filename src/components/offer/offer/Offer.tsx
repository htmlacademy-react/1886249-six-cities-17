import { useParams } from 'react-router-dom';
import { offersFull } from '../../../libs/mocks/offers-full';
import OfferGalary from '../offer-gallery/offer-gallery';
// import { OfferFull } from '../../../libs/types';
import OfferDescription from '../offer-description/offer-description';
import { MapType } from '../../../libs/const';
import Map from '@components';

function Offer() {
  const idParams = useParams();

  const currentOffer = offersFull.find((offer) => {
    if (offer.id === idParams.id?.slice(1)) {
      return offer;
    }
  });

  return (
    <section className="offer">
      <OfferGalary images={currentOffer?.images}/>
      <OfferDescription currentOffer={currentOffer}/>
      <Map mapType={MapType.OfferMap}/>
    </section>
  );
}

export default Offer;
