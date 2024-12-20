import { Review } from '@/libs/types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
