import { CardType } from '../../libs/const';
import Footer from '../../components/footer/footer';
import OfferCard from '../../components/main/offer-card-main/offer-card';
import { FavouritesEmpty } from '../favourites-empty/favorites-empty';
import { OfferCardPrew } from '@/libs/types/types';
import { useAppSelector } from '@/hooks';
import { favouritesSelectors } from '@/storage/slices/favorites';


export default function FavouritesPage() {

  const favourites = useAppSelector(favouritesSelectors.selectFavourites);

  return (
    <>
      {favourites.length
        ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favourites.map((favOffer: OfferCardPrew) => <OfferCard offer={favOffer} key={favOffer.id} offerCardType={CardType.FavoritesCard}/>)}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
        :
        <FavouritesEmpty/>}
      <Footer/>
    </>
  );
}
