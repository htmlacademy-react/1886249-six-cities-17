import OfferList from '../../offer-list/offer-list';
import { CardType } from '../../../libs/const';
import { nearPlaces } from '../../../libs/mocks/near-places';

function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      {/* FIXME: ЛИСТ  ДОЛЖЕН БЫТЬ ROW А НЕ COLUMN */}
      <OfferList offers={nearPlaces} offerCardType={CardType.NearCard}/>
    </section>
  );
}

export default NearPlaces;
