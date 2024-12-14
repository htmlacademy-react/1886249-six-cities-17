import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { CardType, ImgSettings } from '../../libs/const';
import Rating from '../offer/rating/rating';
import AddToBookmarks from '../offer/add-to-bookmarks-btn/add-to-bookmarks-btn';
import { OfferCardPrew } from '@/libs/types';


type OfferCardProps = {
  offer: OfferCardPrew;
  onHandleActiveOfferChange?: (id: string | null) => void;
  offerCardType: CardType;
}

export default function OfferCard ({offer, onHandleActiveOfferChange, offerCardType}: OfferCardProps) {
  const {id, previewImage, isPremium, price, title} = offer;

  return (
    <article onMouseEnter={() => onHandleActiveOfferChange && onHandleActiveOfferChange(id)} onMouseLeave={() => onHandleActiveOfferChange && onHandleActiveOfferChange(null)} className={clsx('place-card', `${offerCardType}__card`)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div
        className={clsx(`${offerCardType}__image-wrapper`, 'place-card__image-wrapper')}
      >
        <Link to={`offer/:${id}`}>
          <img className="place-card__image" src={previewImage}
            width={offerCardType === CardType.FavoritesCard ? ImgSettings.FavouriteCardWidth : ImgSettings.OfferCardWidth} height={CardType.FavoritesCard ? ImgSettings.FavouriteCardHeight : ImgSettings.OfferCardHeight} alt="Place image"
          />
        </Link>
      </div>
      <div className={`${CardType.FavoritesCard && 'favorites__card-info'} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <AddToBookmarks offerCardType={offerCardType}/>
        </div>
        <Rating offerCardType={offerCardType}/>
        <h2 className="place-card__name">
          <Link to={`offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
