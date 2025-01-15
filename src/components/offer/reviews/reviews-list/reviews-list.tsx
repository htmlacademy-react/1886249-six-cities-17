import { Review } from '@/libs/types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.slice(0,10)
        .sort((reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime())
        .map((review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
