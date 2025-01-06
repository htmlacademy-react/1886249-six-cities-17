import { Review } from '@/libs/types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 10)
        .map((review) => <ReviewItem review={review} key={review.id}/>)}
    </ul>
  );
}

export default ReviewsList;
