import { CardType } from '../../../libs/const';

type AddToBookmarksProps = {
  offerCardType: CardType;
}

function AddToBookmarks({offerCardType}: AddToBookmarksProps) {
  return (
    <button className={`place-card__bookmark-button ${offerCardType === CardType.FavoritesCard && 'place-card__bookmark-button--active'} button`} type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}

export default AddToBookmarks;
