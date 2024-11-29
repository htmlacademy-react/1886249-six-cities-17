
import NearPlaces from '../../components/offer/near-places/near-places';
import Offer from '../../components/offer/offer/Offer';

function OfferPage() {
  return (
    <main className="page__main page__main--offer">
      <Offer/>
      <div className="container">
        <NearPlaces/>
      </div>
    </main>

  );
}

export default OfferPage;
