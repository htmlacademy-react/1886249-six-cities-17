import { useAppDispatch, useAppSelector } from '@/hooks';
import { AppRoutes, AuthorisationStatus, BookmarkOfferCard, BookmarkOfferFull, OfferType } from '../../libs/const';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { useNavigate } from 'react-router-dom';
import { changeFavouriteStatus } from '@/thunk/favourites';


type AddToBookmarksProps = {
  bookmarkSizeType: typeof BookmarkOfferCard | typeof BookmarkOfferFull;
  offerType: OfferType;
  isFavourite: boolean;
  id: string;
}

function AddToBookmarks({ bookmarkSizeType, offerType, isFavourite, id}: AddToBookmarksProps) {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const getBookmarkClass = () => {
    if (isFavourite) {
      return `${offerType}__bookmark-button ${offerType}__bookmark-button--active button`;
    } return `${offerType}__bookmark-button button`;
  };

  // TODO: нужно заставить сразу же обновляться offers, они обновляются только после обновления страницы
  const authStatus = useAppSelector(authorisationSelectors.selectAuthorisationStatus);

  const changeFavouriteStatusTo = () => {
    if (isFavourite === true) {
      return 0;
    } else {
      return 1;
    }
  };

  const handleBookmarkClick = () => {
    if (authStatus !== AuthorisationStatus.Auth) {
      navigate(AppRoutes.Login);
    } else {
      dispatch(changeFavouriteStatus({id: id, favouriteStatus: changeFavouriteStatusTo()}));
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
