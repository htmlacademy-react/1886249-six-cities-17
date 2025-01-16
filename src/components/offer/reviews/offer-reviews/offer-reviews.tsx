import { useAppSelector } from '@/hooks';
import ReviewForm from '../../offer/review-form/review-form';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { AuthorisationStatus } from '@/libs/const';
import { formatReviewList } from '@/libs/helpers';
import ReviewItem from '../review-item/review-item';


function OfferReviews() {
  const isUserAuthorised = useAppSelector(authorisationSelectors.selectAuthorisationStatus);
  const reviews = useAppSelector(offerFullSElectors.selectReviews);
  const reviewsAmount = reviews.length;
  const formattetReviews = formatReviewList(reviews);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {formattetReviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
      </ul>
      {isUserAuthorised === AuthorisationStatus.Auth && <ReviewForm/>}
    </section>
  );
}

export default OfferReviews;
