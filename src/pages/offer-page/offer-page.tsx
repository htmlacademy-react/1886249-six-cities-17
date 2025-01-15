import Offer from '@/components/offer/offer/Offer';
import NearPlaces from '../../components/offer/near-places/near-places';
import { useEffect, useState } from 'react';
import { OfferCardPrew } from '@/libs/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { getOffer } from '@/thunk/fullOffer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


type OfferPageProps = {
  offers: OfferCardPrew[];
}

function OfferPage({offers}: OfferPageProps) {

  const dispatch = useAppDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getOffer(id));
    }
  }, [id, dispatch]);

  const [selectedPoint, setSelectedPoint] = useState<OfferCardPrew | undefined>(undefined);

  const currentOffer = useSelector(offerFullSElectors.selectFullOffer);

  if (!currentOffer) {
    return null;
  }


  const nearOffers = offers.filter((offer) => currentOffer?.city.name === offer.city.name && offer.id !== currentOffer.id).slice(0,4);


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
