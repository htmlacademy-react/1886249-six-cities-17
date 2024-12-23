import { Link } from 'react-router-dom';
import { AppRoutes } from '../../libs/const';

function Logo() {
  return (
    <Link to={AppRoutes.Main} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
    </Link>
  );
}

export default Logo;
