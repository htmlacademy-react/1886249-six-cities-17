import { Review } from '@/libs/types/types';
import ReviewForm from '../../offer/review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviews = {
  reviews: Review[];
}

function OfferReviews({reviews}: OfferReviews) {
  const reviewsAmount = reviews.length;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ReviewsList reviews={reviews} />
      <ReviewForm/>
    </section>
  );
}

export default OfferReviews;
