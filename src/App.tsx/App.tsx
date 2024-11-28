import FavouritesPage from '../pages/favorites-page/FavoritesPage';
import LoginPage from '../pages/login-page/LoginPage';
import MainPage from '../pages/main-page/MainPage';
import { placesToStay } from '../pages/mock-data';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';
import OfferPage from '../pages/offer-page/OfferPage';
import Layout from '../layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='/' index element={<MainPage placesToStay={placesToStay} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/offer/:id" element={<OfferPage />} />
        </Route>
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
