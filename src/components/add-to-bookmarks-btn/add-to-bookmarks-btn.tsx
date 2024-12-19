import { BookmarkOfferCard, BookmarkOfferFull, CardType, OfferType } from '../../libs/const';

type AddToBookmarksProps = {
  offerCardType?: CardType;
  bookmarkSizeType: typeof BookmarkOfferCard | typeof BookmarkOfferFull;
  offerType: OfferType;
}

function AddToBookmarks({offerCardType, bookmarkSizeType, offerType}: AddToBookmarksProps) {
  return (
    <button className={`${offerType}__bookmark-button ${offerCardType === CardType.FavoritesCard && `${offerType}__bookmark-button--active`} button`} type="button">
      <svg className={`${offerType}__bookmark-icon`} width={bookmarkSizeType.Width} height={bookmarkSizeType.Height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}

export default AddToBookmarks;
