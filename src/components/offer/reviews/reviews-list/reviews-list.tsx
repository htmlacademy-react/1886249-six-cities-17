import { Review } from '@/libs/types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.slice(0,10)
        .sort((reviewA, reviewB) => new Date(reviewA.date) - new Date(reviewB.date))
        .map((review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
