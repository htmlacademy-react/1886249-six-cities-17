"use strict";
exports.__esModule = true;
exports.MapType = exports.CardType = exports.ImgSettings = exports.placesToStay = exports.AppRoutes = exports.AuthorisationStatus = exports.Cities = void 0;
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
    AppRoutes["Offer"] = "/offer/:id";
    AppRoutes["Login"] = "/log-in";
    AppRoutes["Error"] = "*";
})(AppRoutes = exports.AppRoutes || (exports.AppRoutes = {}));
exports.placesToStay = 312;
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
