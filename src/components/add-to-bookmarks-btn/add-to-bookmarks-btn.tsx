import { useAppSelector } from '@/hooks';
import { AppRoutes, AuthorisationStatus, BookmarkOfferCard, BookmarkOfferFull, OfferType } from '../../libs/const';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { useNavigate } from 'react-router-dom';

type AddToBookmarksProps = {
  bookmarkSizeType: typeof BookmarkOfferCard | typeof BookmarkOfferFull;
  offerType: OfferType;
  isFavourite: boolean;
}

function AddToBookmarks({ bookmarkSizeType, offerType, isFavourite}: AddToBookmarksProps) {

  const navigate = useNavigate();

  const getBookmarkClass = () => {
    if (isFavourite) {
      return `${offerType}__bookmark-button ${offerType}__bookmark-button--active button`;
    } return `${offerType}__bookmark-button button`;
  };

  const authStatus = useAppSelector(authorisationSelectors.selectAuthorisationStatus);

  const handleBookmarkClick = () => {
    if (authStatus !== AuthorisationStatus.Auth) {
      navigate(AppRoutes.Login);
    }
  };

  return (
    <button className={getBookmarkClass()} type="button" onClick={handleBookmarkClick}>
      <svg className={`${offerType}__bookmark-icon`} width={bookmarkSizeType.Width} height={bookmarkSizeType.Height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}

export default AddToBookmarks;
