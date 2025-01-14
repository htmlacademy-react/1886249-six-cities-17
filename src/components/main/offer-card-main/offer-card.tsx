import { clsx } from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppRoutes,
  BookmarkOfferCard,
  CardType,
  ImgSettings,
  OfferType,
} from '../../../libs/const';
import Rating from '../../offer/rating/rating';
import AddToBookmarks from '../../add-to-bookmarks-btn/add-to-bookmarks-btn';
import type { OfferCardPrew } from '@/libs/types/types';
import { useAppDispatch } from '@/hooks';
import { offerFullActions } from '@/storage/slices/fullOffer';
import { getOffer } from '@/thunk/fullOffer';

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

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const cardPath = `${AppRoutes.Offers}/${id}`;
  console.log(cardPath);

  const handleCardClick = () => {
    dispatch(offerFullActions.setFullOfferID(id));
    dispatch(getOffer(id));
    navigate(cardPath);
  };

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
        <div onClick={handleCardClick}>
          <img
            className="place-card__image"
            src={previewImage}
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
        </div>
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
