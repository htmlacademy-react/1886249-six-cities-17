import './styles.css';
import { AuthorisationStatus } from '../../libs/const';
import Logo from '../logo/Logo';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { useAppSelector } from '@/hooks';
import { AuthorisedUserMenu } from './authorised-user-menu/authorised-user-menu';
import { NotAuthorisedUserMenu } from './not-authorised-user-menu/not-authorised-user-menu';

function Header() {

  const authState = useAppSelector(authorisationSelectors.selectAuthorisationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {authState === AuthorisationStatus.Auth
            ? <AuthorisedUserMenu/>
            : <NotAuthorisedUserMenu/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
