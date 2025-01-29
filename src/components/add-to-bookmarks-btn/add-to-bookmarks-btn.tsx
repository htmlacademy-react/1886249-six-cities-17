import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  AppRoutes,
  BookmarkOfferCard,
  BookmarkOfferFull,
  OfferType,
} from '../../libs/const';
import { useNavigate } from 'react-router-dom';
import { changeFavouriteStatus } from '@/thunk/favourites';
import { userSelector } from '@/storage/slices/user';

type AddToBookmarksProps = {
	bookmarkSizeType: typeof BookmarkOfferCard | typeof BookmarkOfferFull;
	offerType: OfferType;
	isFavourite: boolean;
	id: string;
};

function AddToBookmarksBtn({
  bookmarkSizeType,
  offerType,
  isFavourite,
  id,
}: AddToBookmarksProps) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const getBookmarkClass = () => {
    if (isFavourite) {
      return `${offerType}__bookmark-button ${offerType}__bookmark-button--active button`;
    }
    return `${offerType}__bookmark-button button`;
  };

  const isUserExist = useAppSelector(userSelector.selectUser) !== null;

  const changeFavouriteStatusTo = () => {
    if (isFavourite === true) {
      return 0;
    } else {
      return 1;
    }
  };

  const handleBookmarkClick = () => {
    if (!isUserExist) {
      navigate(AppRoutes.Login);
    } else {
      dispatch(
        changeFavouriteStatus({
          id: id,
          favouriteStatus: changeFavouriteStatusTo(),
        }),
      );
    }
  };

  return (
    <button
      className={getBookmarkClass()}
      type='button'
      onClick={handleBookmarkClick}
    >
      <svg
        className={`${offerType}__bookmark-icon`}
        width={bookmarkSizeType.Width}
        height={bookmarkSizeType.Height}
      >
        <use xlinkHref='#icon-bookmark' />
      </svg>
      <span className='visually-hidden'>To bookmarks</span>
    </button>
  );
}

export default AddToBookmarksBtn;
