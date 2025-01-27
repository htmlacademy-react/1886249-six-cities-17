import { SortItem } from './const';
import type { OfferCardPrew, Review } from './types/types';


export const sortOffers = (offers: OfferCardPrew[], currentSort: SortItem):OfferCardPrew[] => {
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

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'});
  const formattedDate = dateFormatter.format(date);
  return formattedDate;
};

export const formatReviewList = (reviewList: Review[]) => [...reviewList].sort((reviewA, reviewB) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime()).slice(0,10);
