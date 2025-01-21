import { useAppDispatch, useAppSelector } from '@/hooks';
import { AppRoutes } from '@/libs/const';
import { favouritesSelectors } from '@/storage/slices/favorites';
import { userSelector } from '@/storage/slices/user';
import { logout } from '@/thunk/authorisation';
import { Link } from 'react-router-dom';


export const AuthorisedUserMenu = () => {

  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector.selectUser);

  const favouritesNumber = useAppSelector(favouritesSelectors.selectFavouritesNumber);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoutes.Favourites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{user?.email}</span>
            <span className="header__favorite-count">{favouritesNumber}</span>
          </Link>
        </li>
        <li className="header__nav-item" onClick={() => {
          dispatch(logout());
        }}
        >
          <Link to={AppRoutes.Main} className="header__nav-link" >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
