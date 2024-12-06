import { Offer } from '../../libs/types';
import OfferCard from '../offer-card-main/offer-card';

type OfferListProps = {
  offers: Offer[];
}


function OfferList({offers}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard id={offer.id} previewImage={offer.previewImage} isPremium={offer.isPremium} price={offer.price} title={offer.title} key={offer.id}/>)}
    </div>
  );
}

export default OfferList;
