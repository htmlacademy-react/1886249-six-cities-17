
import OfferList from '@/components/offer-list/offer-list';
import { CardType } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';

type NearPlacesProps = {
  nearOffers: OfferCardPrew[];
  onListItemHover: (listItemName: string) => void;
}

function NearPlaces({nearOffers}: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {/* FIXME: ЛИСТ  ДОЛЖЕН БЫТЬ ROW А НЕ COLUMN */}
      <OfferList offers={nearOffers} offerCardType={CardType.NearCard} onListItemHover={onListItemHover}/>
    </section>
  );
}

export default NearPlaces;
