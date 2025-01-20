import { useAppDispatch, useAppSelector } from '@/hooks';
import { AppRoutes } from '@/libs/const';
import { userSelector } from '@/storage/slices/user';
import { logout } from '@/thunk/authorisation';
import { Link } from 'react-router-dom';


export const AuthorisedUserMenu = () => {

  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector.selectUser);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoutes.Favourites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {/* FIXME почта юзера отрисовывается не сразу */}
            <span className="header__user-name user__name">{user?.email}</span>
            <span className="header__favorite-count">3</span>
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
