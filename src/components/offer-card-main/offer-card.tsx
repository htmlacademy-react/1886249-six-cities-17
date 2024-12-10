import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { ImgSettings } from '../../libs/const';
import { Offer } from 'src/libs/types';

type OfferCardProps = {
  offer: Offer;
  onHandleActiveOfferChange?: (id: string | null) => void;
}

export default function OfferCard ({offer, onHandleActiveOfferChange}: OfferCardProps) {
  const {id, previewImage, isPremium, price, title, isFavorite} = offer;
  const typeCard = isFavorite ? 'favorites' : 'cities';

  return (
    <article onMouseEnter={() => onHandleActiveOfferChange && onHandleActiveOfferChange(id)} className={clsx('place-card', typeCard && `${typeCard}__card`)} onMouseLeave={() => onHandleActiveOfferChange && onHandleActiveOfferChange(null)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div
        className={ `${isFavorite ? 'favorites__image-wrapper' : 'cities__image-wrapper' } place-card__image-wrapper`}
      >
        <Link to={`offer/:${id}`}>
          <img className="place-card__image" src={previewImage}
            width={isFavorite ? ImgSettings.FavouriteCardWidth : ImgSettings.OfferCardWidth} height={isFavorite ? ImgSettings.FavouriteCardHeight : ImgSettings.OfferCardHeight} alt="Place image"
          />
        </Link>
      </div>
      <div className={ `${isFavorite ? 'favorites__card-info' : '' } place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={` place-card__bookmark-button${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={isFavorite ? { width: '100%' } : { width: '80%' }}/>
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
