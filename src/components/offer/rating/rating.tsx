import { CardType } from '../../../libs/const';

type RatingProps = {
  offerCardType: CardType;
}

function Rating({offerCardType}: RatingProps) {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={offerCardType === CardType.FavoritesCard && { width: '100%' } || { width: '80%' }}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>);
}

export default Rating;
