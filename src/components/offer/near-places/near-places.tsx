import './near-places.css';
import OfferList from '@/components/main/offer-list/offer-list';
import { CardType } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';

type NearPlacesProps = {
  offers: OfferCardPrew[];
  onListItemHover: (listItemID: string | null) => void;
}

function NearPlaces({offers, onListItemHover}: NearPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {/* FIXME: ЛИСТ  ДОЛЖЕН БЫТЬ ROW А НЕ COLUMN */}
      <OfferList offers={offers} offerCardType={CardType.NearCard} onListItemHover={onListItemHover}/>
    </section>
  );
}

export default NearPlaces;
