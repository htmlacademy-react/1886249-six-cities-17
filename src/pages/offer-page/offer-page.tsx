import Offer from '@/components/offer/offer/Offer';
import NearPlaces from '../../components/offer/near-places/near-places';
import { useEffect, useState } from 'react';
import { OfferCardPrew } from '@/libs/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { getNearPlaces, getOffer, getReviews } from '@/thunk/fullOffer';
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
      dispatch(getNearPlaces(id));
      dispatch(getReviews(id));
    }
  }, [id, dispatch]);

  const [selectedPoint, setSelectedPoint] = useState<OfferCardPrew | undefined>(undefined);

  const currentOffer = useSelector(offerFullSElectors.selectFullOffer);

  const nearOffers = useAppSelector(offerFullSElectors.selectNearPlaces).slice(0,3);

  if (!currentOffer) {
    return null;
  }

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
