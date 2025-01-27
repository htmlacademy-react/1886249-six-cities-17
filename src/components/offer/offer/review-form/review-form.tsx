import './review-form.css';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { RateValues, RequestStatus, ReviewLength } from '@/libs/const';
import { ReviewToSend } from '@/libs/types/types';
import { offerFullActions, offerFullSElectors } from '@/storage/slices/fullOffer';
import { sendReview } from '@/thunk/fullOffer';
import { ChangeEvent, useRef, useState } from 'react';
import { ReviewRate } from '../../reviews/review-rate/review-rate';


function ReviewForm() {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(offerFullSElectors.selectFullOffer);

  const isDisable = useAppSelector(offerFullSElectors.selectIsFormDisabled);

  const postStatus = useAppSelector(offerFullSElectors.selectPostReviewRequestStatus);

  const [review, setReview] = useState<ReviewToSend>({
    comment: '',
    rating: 0
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      comment: evt.target.value,
      rating: review.rating});
  };

  const handleSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (currentOffer) {
      const id = currentOffer.id;
      dispatch(sendReview({id, review}));
      setReview({
        comment: '',
        rating: 0,
      });
    }

    if (formRef.current) {
      formRef.current.reset();
    }
  };


  if (review.comment.length > 49 && review.rating !== 0) {
    dispatch(offerFullActions.setFormDisabled(false)); //FIXME: АНТИПАТТЕРН???
  } else {
    dispatch(offerFullActions.setFormDisabled(true)); //FIXME: АНТИПАТТЕРН??? (вызов dispatch для изменения состояния кнопки)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RateValues)
          .sort(([ratingA], [ratingB]) => (Number(ratingB) - Number(ratingA)))
          .map(([rating, title]) => <ReviewRate review={review} key={title} setReview={setReview} defaultValue={Number(rating)} valueDescription={title}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" name="review" minLength={ReviewLength.Min} maxLength={ReviewLength.Max} value={review.comment} id="review" placeholder="Tell how was your stay, what you like and what can be improved" required onChange={handleTextChange}/>
      {postStatus === RequestStatus.Failed && <p className='reviews__error'>Sorry, an error occured. Try one more time.</p>}
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
