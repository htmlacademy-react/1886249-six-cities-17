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
  Offer = '/offer/:id',
  Login = '/log-in',
  Error = '*'
}

export const placesToStay = 312;

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
