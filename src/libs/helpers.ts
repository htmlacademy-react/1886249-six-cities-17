import { SortItem } from './const';
import { OfferCardPrew } from './types/types';


export const sortOffers = (offers: OfferCardPrew[], currentSort: SortItem):OfferCardPrew[]  => {
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


export const mapOffers = (offers: OfferCardPrew[]) => offers.map((item) => ({
  location: item.location,
  isFavorite: item.isFavorite,
  isPremium: item.isPremium,
  rating: item.rating,
  id: item.id,
  title: item.title,
  type: item.type,
  price: item.price,
  city: item.city,
  previewImage: item.previewImage
}));

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const dateFormatter = new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'});
  const formattedDate = dateFormatter.format(date);
  return formattedDate;
};

