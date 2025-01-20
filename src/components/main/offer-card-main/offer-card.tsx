import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import {
  BookmarkOfferCard,
  CardType,
  ImgSettings,
  OfferType,
} from '../../../libs/const';
import Rating from '../../offer/rating/rating';
import AddToBookmarks from '../../add-to-bookmarks-btn/add-to-bookmarks-btn';
import type { OfferCardPrew } from '@/libs/types/types';

type OfferCardProps = {
	offer: OfferCardPrew;
	onListItemHover?: (listItemId: string | null) => void;
	offerCardType: CardType;
};

export default function OfferCard({
  offer,
  onListItemHover,
  offerCardType,
}: OfferCardProps) {
  const { id, previewImage, isPremium, price, title } = offer;

  return (
    <article
      onMouseEnter={() => onListItemHover?.(id)}
      onMouseLeave={() => onListItemHover?.(null)}
      className={clsx('place-card', `${offerCardType}__card`)}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div
        className={clsx(
          `${offerCardType}__image-wrapper`,
          'place-card__image-wrapper',
        )}
      >
        <Link to={`/offers/${id}`} >
          <img
            className="place-card__image"
            src={previewImage}
            //TODO написать ф-цию для width / height c переданным cardType, кот возвращает объект с полями width и height и деструктурировать его
            width={
              offerCardType === CardType.FavoritesCard
                ? ImgSettings.FavouriteCardWidth
                : ImgSettings.OfferCardWidth
            }
            height={
              CardType.FavoritesCard
                ? ImgSettings.FavouriteCardHeight
                : ImgSettings.OfferCardHeight
            }
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`${CardType.FavoritesCard && 'favorites__card-info'} place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <AddToBookmarks
            bookmarkSizeType={BookmarkOfferCard}
            offerCardType={offerCardType}
            offerType={OfferType.OfferCard}
          />
        </div>
        <Rating offerCardType={offerCardType} />
        <h2 className="place-card__name">
          <Link to={`offers/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
