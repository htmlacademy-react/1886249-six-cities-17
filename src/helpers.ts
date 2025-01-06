import { SortItem } from './libs/const';
import { OfferCardPrew } from './libs/types/types';

export const sortOffers = (offers: OfferCardPrew[], currentSort: SortItem) => {
  switch (currentSort) {
    case SortItem.PriceHigh:
      return offers.sort((a,b) => b.price - a.price);
    case SortItem.PriceLow:
      return offers.sort((a,b) => a.price - b.price);
    case SortItem.Rating:
      return offers.sort((a,b) => b.rating - a.rating);
    default:
      return offers;
  }
};