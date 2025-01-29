"use strict";
exports.__esModule = true;
exports.LOGO_HEIGHT = exports.LOGO_WIDTH = exports.RateValues = exports.RequestStatus = exports.ReviewLength = exports.APIRouts = exports.SortItem = exports.UrlMarker = exports.Leaflet = exports.BookmarkOfferCard = exports.BookmarkOfferFull = exports.OfferType = exports.MapType = exports.CardType = exports.ImgSettings = exports.AppRoutes = exports.AuthorisationStatus = exports.Cities = void 0;
var pin_active_svg_1 = require("../assets/icons/pin-active.svg");
var pin_svg_1 = require("../assets/icons/pin.svg");
var Cities;
(function (Cities) {
    Cities["PARIS"] = "Paris";
    Cities["COLOGNE"] = "Cologne";
    Cities["BRUSSELS"] = "Brussels";
    Cities["AMSTERDAM"] = "Amsterdam";
    Cities["HAMBURG"] = "Hamburg";
    Cities["DUSSELDORF"] = "Dusseldorf";
})(Cities = exports.Cities || (exports.Cities = {}));
var AuthorisationStatus;
(function (AuthorisationStatus) {
    AuthorisationStatus["Auth"] = "AUTH";
    AuthorisationStatus["NoAuth"] = "NO_AUTH";
    AuthorisationStatus["Unknown"] = "UNKNOWN";
})(AuthorisationStatus = exports.AuthorisationStatus || (exports.AuthorisationStatus = {}));
var AppRoutes;
(function (AppRoutes) {
    AppRoutes["Main"] = "/";
    AppRoutes["Favourites"] = "/favourites";
    AppRoutes["Offers"] = "/offers/:id";
    AppRoutes["Login"] = "/log-in";
    AppRoutes["Error"] = "*";
})(AppRoutes = exports.AppRoutes || (exports.AppRoutes = {}));
var ImgSettings;
(function (ImgSettings) {
    ImgSettings[ImgSettings["OfferCardWidth"] = 260] = "OfferCardWidth";
    ImgSettings[ImgSettings["OfferCardHeight"] = 200] = "OfferCardHeight";
    ImgSettings[ImgSettings["FavouriteCardWidth"] = 150] = "FavouriteCardWidth";
    ImgSettings[ImgSettings["FavouriteCardHeight"] = 100] = "FavouriteCardHeight";
})(ImgSettings = exports.ImgSettings || (exports.ImgSettings = {}));
var CardType;
(function (CardType) {
    CardType["FavoritesCard"] = "favorites";
    CardType["CitiesCard"] = "cities";
    CardType["NearCard"] = "near-places";
})(CardType = exports.CardType || (exports.CardType = {}));
var MapType;
(function (MapType) {
    MapType["MainMap"] = "cities";
    MapType["OfferMap"] = "offer";
})(MapType = exports.MapType || (exports.MapType = {}));
var OfferType;
(function (OfferType) {
    OfferType["OfferFull"] = "offer";
    OfferType["OfferCard"] = "place-card";
})(OfferType = exports.OfferType || (exports.OfferType = {}));
var BookmarkOfferFull;
(function (BookmarkOfferFull) {
    BookmarkOfferFull[BookmarkOfferFull["Width"] = 31] = "Width";
    BookmarkOfferFull[BookmarkOfferFull["Height"] = 33] = "Height";
})(BookmarkOfferFull = exports.BookmarkOfferFull || (exports.BookmarkOfferFull = {}));
var BookmarkOfferCard;
(function (BookmarkOfferCard) {
    BookmarkOfferCard[BookmarkOfferCard["Width"] = 18] = "Width";
    BookmarkOfferCard[BookmarkOfferCard["Height"] = 19] = "Height";
})(BookmarkOfferCard = exports.BookmarkOfferCard || (exports.BookmarkOfferCard = {}));
exports.Leaflet = {
    URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    OPTIONS: {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }
};
exports.UrlMarker = {
    DEFAULT: pin_svg_1["default"],
    CURRENT: pin_active_svg_1["default"]
};
var SortItem;
(function (SortItem) {
    SortItem["Popular"] = "Popular";
    SortItem["PriceLow"] = "Price: low to high";
    SortItem["PriceHigh"] = "Price: high to low";
    SortItem["Rating"] = "Top rated first";
})(SortItem = exports.SortItem || (exports.SortItem = {}));
var APIRouts;
(function (APIRouts) {
    APIRouts["Offers"] = "/offers";
    APIRouts["Authorisation"] = "/login";
    APIRouts["Logout"] = "/logout";
    APIRouts["Reviews"] = "/comments";
    APIRouts["Favourite"] = "/favorite";
})(APIRouts = exports.APIRouts || (exports.APIRouts = {}));
var ReviewLength;
(function (ReviewLength) {
    ReviewLength[ReviewLength["Max"] = 300] = "Max";
    ReviewLength[ReviewLength["Min"] = 50] = "Min";
})(ReviewLength = exports.ReviewLength || (exports.ReviewLength = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["Idle"] = "Idle";
    RequestStatus["Loading"] = "Loading";
    RequestStatus["Success"] = "Success";
    RequestStatus["Failed"] = "Failed";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
exports.RateValues = {
    '1': 'terribly',
    '2': 'badly',
    '3': 'not bad',
    '4': 'good',
    '5': 'perfect'
};
exports.LOGO_WIDTH = 81;
exports.LOGO_HEIGHT = 41;
