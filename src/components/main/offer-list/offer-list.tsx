import { CardType } from '../../../libs/const';
import { OfferCardPrew } from '../../../libs/types/types';
import OfferCard from '../offer-card-main/offer-card';
import clsx from 'clsx';
import {offersSelectors} from '@/storage/slices/offers';
import { sortOffers } from '@/libs/helpers';
import { useAppSelector } from '@/hooks';

type OfferListProps = {
  offers: OfferCardPrew[];
  onListItemHover: (listItemID: string | null) => void;
  offerCardType: CardType;
}

function OfferList({offers, onListItemHover, offerCardType}: OfferListProps) {
  const currentSort = useAppSelector(offersSelectors.selectCurrentSort);
  const sortedOffers = sortOffers(offers, currentSort);

  return (
    <div className={clsx(`${offerCardType}__places-list places__list`, offerCardType === CardType.CitiesCard && 'tabs__content')}>
      {sortedOffers.map((offer: OfferCardPrew) => <OfferCard key={offer.id} offer={offer} onListItemHover={onListItemHover} offerCardType={offerCardType} />)}
    </div>
  );
}

export default OfferList;
