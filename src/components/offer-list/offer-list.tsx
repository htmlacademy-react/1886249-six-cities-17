import { CardType } from '../../libs/const';
import { Offer } from '../../libs/types';
import OfferCard from '../offer-card-main/offer-card';
import clsx from 'clsx';

type OfferListProps = {
  offers: Offer[];
  onHandleActiveOfferChange?: (id: string | null) => void;
  offerCardType: CardType;
}


function OfferList({offers, onHandleActiveOfferChange, offerCardType}: OfferListProps) {
  return (
    <div className={clsx(`${offerCardType}__places-list places__list`, offerCardType === CardType.CitiesCard && 'tabs__content')}>
      {offers.map((offer) => <OfferCard key={offer.id} onHandleActiveOfferChange={onHandleActiveOfferChange} offer={offer} offerCardType={offerCardType} />)}
    </div>
  );
}

export default OfferList;
