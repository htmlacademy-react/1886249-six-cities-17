type RaviewRateProps = {
  isDisable: boolean;
  handleStarClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  defaultValue: number;
  valueDescription: string;
};

export const ReviewRate = ({isDisable, handleStarClick, defaultValue, valueDescription}: RaviewRateProps) => (
  <>
    <input className="form__rating-input visually-hidden" name="rating" defaultValue={defaultValue} id={`${defaultValue}-stars`} type="radio" disabled={isDisable} onClick={handleStarClick}/>
    <label htmlFor={`${defaultValue}-stars`} className="reviews__rating-label form__rating-label" title={valueDescription}>
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>
);
