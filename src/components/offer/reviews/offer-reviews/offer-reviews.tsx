import { useAppSelector } from '@/hooks';
import ReviewForm from '../../offer/review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { authorisationSelectors } from '@/storage/slices/authorization';
import { AuthorisationStatus } from '@/libs/const';


function OfferReviews() {
  const isUserAuthorised = useAppSelector(authorisationSelectors.selectAuthorisationStatus);
  const reviews = useAppSelector(offerFullSElectors.selectReviews);
  const reviewsAmount = reviews.length;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ReviewsList reviews={reviews} />
      {isUserAuthorised === AuthorisationStatus.Auth && <ReviewForm/>}
    </section>
  );
}

export default OfferReviews;
