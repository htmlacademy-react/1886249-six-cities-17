export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferFull = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    images: string[];
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    goods: string[];
    host: {
      isPro: boolean;
      name: string;
      avatarUrl: string;
    };
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    bedrooms: number;
    maxAdults: number;
  };
