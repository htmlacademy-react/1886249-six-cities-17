import Header from '../../components/header/Header';
import NearPlaces from '../../components/offer/near-places/NearPlaces';
import Offer from '../../components/offer/offer/Offer';

function OfferPage() {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <Offer/>
        <div className="container">
          <NearPlaces/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
