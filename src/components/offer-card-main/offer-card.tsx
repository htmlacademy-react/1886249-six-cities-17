import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImgSettings } from '../../libs/const';

type OfferCardProps = {
  id: string;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  isFavourite?: boolean;
}

export default function OfferCard (props: OfferCardProps) {
  const [isActive, setIsActive] = useState(false);
  function handleOnMouseOver () {
    setIsActive(true);
  }

  return (
    <article onMouseOver={handleOnMouseOver} className={ `${props.isFavourite ? 'favorites__card' : 'cities__card' } place-card`}>
      {props.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div
        className={ `${props.isFavourite ? 'favorites__image-wrapper' : 'cities__image-wrapper' } place-card__image-wrapper`}
      >
        <Link to={`offer/:${props.id}`}>
          <img className="place-card__image" src={props.previewImage}
            width={props.isFavourite ? ImgSettings.FavouriteCardWidth : ImgSettings.OfferCardWidth} height={props.isFavourite ? ImgSettings.FavouriteCardHeight : ImgSettings.OfferCardHeight} alt="Place image"
          />
        </Link>
      </div>
      <div className={ `${props.isFavourite ? 'favorites__card-info' : '' } place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={` place-card__bookmark-button${props.isFavourite ? 'place-card__bookmark-button--active' : ''} button`}type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={props.isFavourite ? { width: '100%' } : { width: '80%' }}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/:${props.id}`}>{props.title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
