import { CardType } from '../../libs/const';
import { OfferCardPrew } from '../../libs/types/types';
import OfferCard from '../offer-card-main/offer-card';
import clsx from 'clsx';

type OfferListProps = {
  offers: OfferCardPrew[];
  onListItemHover: (listItemName: string) => void;
  offerCardType: CardType;
}


function OfferList({offers, onListItemHover, offerCardType}: OfferListProps) {

  const handleListItemHover = (event: React.MouseEvent<HTMLLIElement>) => {
    onListItemHover(event);
  };
  return (
    <div className={clsx(`${offerCardType}__places-list places__list`, offerCardType === CardType.CitiesCard && 'tabs__content')}>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} handleListItemHover={handleListItemHover} offerCardType={offerCardType} />)}
    </div>
  );
}

export default OfferList;
