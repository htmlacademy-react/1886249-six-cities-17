import AddToBookmarks from '@/components/add-to-bookmarks-btn/add-to-bookmarks-btn';
import { OfferFull } from '../../../libs/types/types';
import HostInfo from '../host-info/host-info';
import OfferReviews from '../reviews/offer-reviews/offer-reviews';
import { BookmarkOfferFull, OfferType } from '@/libs/const';

type OfferDescription = {
  currentOffer: OfferFull | undefined;
}

function OfferDescription({currentOffer}: OfferDescription) {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {currentOffer?.isPremium
        &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {currentOffer?.title}
          </h1>
          <AddToBookmarks offerType={OfferType.OfferFull} bookmarkSizeType={BookmarkOfferFull}/>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: '80%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{currentOffer?.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {currentOffer?.type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {currentOffer?.bedrooms}
          </li>
          <li className="offer__feature offer__feature--adults">
            {currentOffer?.maxAdults}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">€{currentOffer?.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {currentOffer?.goods.map((item) => (
              <li key={item} className="offer__inside-item">
                {item}
              </li>))}
          </ul>
        </div>
        <HostInfo currentOffer={currentOffer}/>
        <OfferReviews />
      </div>
    </div>
  );
}

export default OfferDescription;
