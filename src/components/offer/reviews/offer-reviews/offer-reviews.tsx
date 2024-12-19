import ReviewForm from '../../offer/review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

function OfferReviews() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
      <ReviewsList/>
      <ReviewForm/>
    </section>
  );
}

export default OfferReviews;
