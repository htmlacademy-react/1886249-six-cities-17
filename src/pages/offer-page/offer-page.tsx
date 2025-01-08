import Offer from '@/components/offer/offer/Offer';
import NearPlaces from '../../components/offer/near-places/near-places';
import { useParams } from 'react-router-dom';
import { offersFull } from '@/libs/mocks/offers-full';
import { useState } from 'react';
import { OfferCardPrew } from '@/libs/types/types';

type OfferPageProps = {
  offers: OfferCardPrew[];
}

function OfferPage({offers}: OfferPageProps) {
  const {id} = useParams();
  const trimmedId = id?.slice(1);

  const currentOffer = offersFull.find((offer) => offer.id === trimmedId);

  const nearOffers = offers.filter((offer) => currentOffer?.city.name === offer.city.name && offer.id !== currentOffer.id).slice(0,4);

  const [selectedPoint, setSelectedPoint] = useState<OfferCardPrew | undefined>(undefined);

  const handleListItemHover = (listItemID: string| null) => {
    const currentPoint = offers.find((offer) => offer.id === listItemID);
    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--offer">
      <Offer currentOffer={currentOffer} nearOffers={nearOffers} selectedPoint={selectedPoint}/>
      <div className="container">
        <NearPlaces onListItemHover={handleListItemHover} offers={nearOffers} />
      </div>
    </main>
  );
}

export default OfferPage;
