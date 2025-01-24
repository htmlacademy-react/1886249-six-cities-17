import { ReviewToSend } from '@/libs/types/types';
import { ChangeEvent, Dispatch } from 'react';

type RaviewRateProps = {
  review: ReviewToSend;
  setReview: Dispatch<React.SetStateAction<ReviewToSend>>;
  defaultValue: number;
  valueDescription: string;
};

export const ReviewRate = ({ setReview, defaultValue, valueDescription, review }: RaviewRateProps) => {

  const handleStarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReview(
      {
        comment: review.comment,
        rating: Number(e.target.value),
      }
    );
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={defaultValue} id={`${defaultValue}-stars`} type="radio" onChange={handleStarChange}/>
      <label htmlFor={`${defaultValue}-stars`} className="reviews__rating-label form__rating-label" title={valueDescription}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

