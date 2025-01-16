export type OfferBase = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferCardPrew = OfferBase & {
    previewImage: string;
}

export type OfferFull = OfferBase & {
    description: string;
    images: string[];
    goods: string[];
    host: {
      isPro: boolean;
      name: string;
      avatarUrl: string;
    };
    bedrooms: number;
    maxAdults: number;
  };

export type OfferCity = {
    name: string;
    location: OfferLocation;
}

export type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: 4;
}

export type ReviewToSend = {
    comment: string;
    rating: number;
  }

export enum RequestStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed'
}

export type LoginData = {
  email: string;
  password: string;
}
