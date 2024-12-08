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
  OfferCardWidth = 260,
  OfferCardHeight = 200,
  FavouriteCardWidth = 150,
  FavouriteCardHeight = 100,
}


