import { AppRoutes } from '@/libs/const';
import { Link } from 'react-router-dom';


export const NotAuthorisedUserMenu = () => (
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
);


