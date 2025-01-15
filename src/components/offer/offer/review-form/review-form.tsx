import { useAppDispatch, useAppSelector } from '@/hooks';
import { ReviewToSend } from '@/libs/types/types';
import { offerFullSElectors } from '@/storage/slices/fullOffer';
import { sendReview } from '@/thunk/fullOffer';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';

function ReviewForm() {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(offerFullSElectors.selectFullOffer);

  const isDisable = useAppSelector(offerFullSElectors.selectIsFormDisabled);

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
  };


  const handleStarClick = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    rate = Number(e.target.defaultValue);
  };

  return (
    <form onSubmit={handleSubmitForm} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" onClick={handleStarClick} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" onClick={handleStarClick}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" onClick={handleStarClick}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" onClick={handleStarClick}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" onClick={handleStarClick}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" name="review" minLength={50} value={reviewText} id="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisable}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
