import './styles.css';
import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AuthorisedUserMenu } from './authorised-user-menu/authorised-user-menu';
import { NotAuthorisedUserMenu } from './not-authorised-user-menu/not-authorised-user-menu';
import { useEffect } from 'react';
import { fetchFavourits } from '@/thunk/favourites';
import { userSelector } from '@/storage/slices/user';

function Header() {

  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector.selectUser);

  useEffect(() => {
    if (user !== null) {
      dispatch(fetchFavourits());
    }
  }, [dispatch, user]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {user
            ? <AuthorisedUserMenu/>
            : <NotAuthorisedUserMenu/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
