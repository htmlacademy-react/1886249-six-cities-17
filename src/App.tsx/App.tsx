import FavouritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import {Routes, Route} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import OfferPage from '../pages/offer-page/offer-page';
import { AppRoutes } from '../libs/const';
import PrivateRoute from '../components/private-route/private-route';
import Layout from '../layout/Layout';
import { useSelector } from 'react-redux';
import { offersSelectors } from '@/storage/slices/offers';
import { fetchOffers } from '@/thunk/offers';
import { useEffect } from 'react';
import { authorisationSelectors } from '@/storage/slices/authorization';

import { useAppDispatch } from '@/hooks';
import { checkAuthorisation } from '@/thunk/authorisation';

function App() {

  const dispatch = useAppDispatch();

  const offers = useSelector(offersSelectors.selectOffers);

  const activeCity = useSelector(offersSelectors.selectActiveCity);

  const authState = useSelector(authorisationSelectors.selectAuthorisationStatus);


  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuthorisation());
  }, [dispatch]);


  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<Layout />} >
        <Route index element={<MainPage activeCity={activeCity} offers={offers}/>} />
        <Route path={AppRoutes.Favourites} element={
          <PrivateRoute authorisationStatus={authState}><FavouritesPage /></PrivateRoute>
        }
        />
        <Route path={AppRoutes.Offer} element={<OfferPage offers={offers} />} />
      </Route>
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route path={AppRoutes.Error} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
