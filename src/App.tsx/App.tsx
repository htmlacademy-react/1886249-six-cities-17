import FavouritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import MainPage from '../pages/main-page/main-page';
import { placesToStay } from '../libs/mock-data';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import OfferPage from '../pages/offer-page/offer-page';
import Layout from '../layout/Layout';
import { AppRoutes, AuthorisationStatus } from '../libs/const';
import PrivateRoute from '../components/private-route/private-route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout />} >
          <Route index element={<MainPage placesToStay={placesToStay} />} />
          <Route path={AppRoutes.Favourites} element={
            <PrivateRoute authorisationStatus={AuthorisationStatus.NoAuth}><FavouritesPage /></PrivateRoute>
          }
          />
          <Route path={AppRoutes.Offer} element={<OfferPage />} />
        </Route>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route path={AppRoutes.Error} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
