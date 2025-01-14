import './styles.css';
import { Link } from 'react-router-dom';
import { AppRoutes, AuthorisationStatus } from '../../libs/const';
import Logo from '../logo/Logo';
import { useSelector } from 'react-redux';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/thunk/authorisation';

function Header() {

  const authState = useSelector(authorisationSelectors.selectAuthorisationStatus);

  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {authState === AuthorisationStatus.Auth
            ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoutes.Favourites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item" onClick={() => dispatch(logout())}>
                    <Link to={AppRoutes.Main} className="header__nav-link" >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )
            : (
              <nav className="header__nav">
                <ul className="header__nav-list signout">
                  <li className="header__nav-item user signout">
                    <Link to={AppRoutes.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to={AppRoutes.Login} className="header__nav-link">
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
        </div>
      </div>
    </header>
  );
}

export default Header;
