import ActivePin from '../assets/icons/pin-active.svg';
import DefaultPin from '../assets/icons/pin.svg';

export enum Cities {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoutes {
  Main = '/',
  Favourites = '/favourites',
  Offers = '/offers/:id',
  Login = '/log-in',
  Error = '*'
}

export enum ImgSettings {
  OfferCardWidth= 260,
  OfferCardHeight = 200,
  FavouriteCardWidth = 150,
  FavouriteCardHeight = 100,
}

export enum CardType {
  FavoritesCard = 'favorites',
  CitiesCard = 'cities',
  NearCard = 'near-places'
}

export enum MapType {
  MainMap = 'cities',
  OfferMap = 'offer'
}

export enum OfferType {
  OfferFull = 'offer',
  OfferCard = 'place-card'
}

export enum BookmarkOfferFull {
  Width = 31,
  Height = 33,

}
export enum BookmarkOfferCard {
  Width = 18,
  Height = 19
}

export const Leaflet = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS:
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};

export const UrlMarker = {
  DEFAULT: DefaultPin,
  CURRENT: ActivePin
};

export enum SortItem {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum APIRouts {
  Offers = '/offers',
  Authorisation = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favourite = '/favorite',
}

export enum ReviewLength {
  Max = 300,
  Min = 50,
}

export enum RequestStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed'
}

export const RateValues: {[index: string]: string } = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect',
};

export const LOGO_WIDTH = 81;
export const LOGO_HEIGHT = 41;

