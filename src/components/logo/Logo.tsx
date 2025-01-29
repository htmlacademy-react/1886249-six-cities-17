import { Link } from 'react-router-dom';
import { AppRoutes, LOGO_HEIGHT, LOGO_WIDTH } from '../../libs/const';

function Logo() {
  return (
    <Link to={AppRoutes.Main} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
    </Link>
  );
}

export default Logo;
