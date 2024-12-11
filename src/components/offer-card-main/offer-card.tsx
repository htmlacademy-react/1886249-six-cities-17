import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { CardType, ImgSettings } from '../../libs/const';
import { Offer } from 'src/libs/types';

type OfferCardProps = {
  offer: Offer;
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
          <button className={`place-card__bookmark-button ${CardType.FavoritesCard && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={CardType.FavoritesCard && { width: '100%' } || CardType.CitiesCard && { width: '80%' } || CardType.NearCard}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
