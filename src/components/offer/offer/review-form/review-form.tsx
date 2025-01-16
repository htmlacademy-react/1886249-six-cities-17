import { useAppDispatch, useAppSelector } from '@/hooks';
import { RateValues, RequestStatus, ReviewLength } from '@/libs/const';
import { ReviewToSend } from '@/libs/types/types';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { sendReview } from '@/thunk/fullOffer';
import { ChangeEvent, useState } from 'react';
import { ReviewRate } from '../../reviews/review-rate/review-rate';


function ReviewForm() {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(offerFullSElectors.selectFullOffer);

  const isDisable = useAppSelector(offerFullSElectors.selectIsFormDisabled);

  const postStatus = useAppSelector(offerFullSElectors.selectPostReviewRequestStatus);

  const [reviewText, setReviewText] = useState('');

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(evt.target.value);
  };

  let rate = 0;

  const handleSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const review: ReviewToSend = {
      comment: reviewText,
      rating: rate,
    };

    if (currentOffer) {
      const id = currentOffer.id;
      dispatch(sendReview({id, review}));
    }

    if (postStatus === RequestStatus.Success) {
      setReviewText('');
    }
  };

  const handleStarClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    rate = Number(target.defaultValue);
  };

  return (
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RateValues).map(([rating, title]) => <ReviewRate key={title} isDisable={isDisable} handleStarClick={handleStarClick} defaultValue={Number(rating)} valueDescription={title}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" name="review" minLength={ReviewLength.Min} maxLength={ReviewLength.Max} value={reviewText} id="review" placeholder="Tell how was your stay, what you like and what can be improved" required onChange={handleTextChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.Min} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisable}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
