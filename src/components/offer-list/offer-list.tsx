import { Offer } from '../../libs/types';
import OfferCard from '../offer-card-main/offer-card';

type OfferListProps = {
  offers: Offer[];
  onHandleActiveOfferChange: (id: string | null) => void;
}


function OfferList({offers, onHandleActiveOfferChange}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} onHandleActiveOfferChange={onHandleActiveOfferChange} offer={offer} />)}
    </div>
  );
}

export default OfferList;
