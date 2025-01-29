"use strict";
exports.__esModule = true;
require("./main-page.css");
var main_cities_locations_1 = require("@/components/main/main-cities-locations/main-cities-locations");
var main_cities_container_1 = require("@/components/main/main-cities-container/main-cities-container");
var cities_locations_1 = require("@/libs/cities-locations");
var const_1 = require("@/libs/const");
var spinner_1 = require("@/components/spinner/spinner");
var main_empty_1 = require("../main-empty/main-empty");
var offers_1 = require("@/storage/slices/offers");
var hooks_1 = require("@/hooks");
function MainPage(_a) {
    var activeCity = _a.activeCity, offers = _a.offers;
    var particularCityOffers = offers.filter(function (offer) { return offer.city.name === activeCity.toString(); });
    var isLoading = hooks_1.useAppSelector(offers_1.offersSelectors.selectOffersRequestStatus);
    var placesToStay = particularCityOffers.length;
    var cityForOffers = cities_locations_1.CITIES_LOCATIONS.find(function (city) {
        if (city.name === activeCity.toString()) {
            return city;
        }
    });
    var safeCityForOffers = cityForOffers !== undefined ? cityForOffers : cities_locations_1.DEFAULT_CITY;
    if (isLoading === const_1.RequestStatus.Loading) {
        return React.createElement(spinner_1["default"], null);
    }
    if (isLoading === const_1.RequestStatus.Failed) {
        return (React.createElement("p", { className: 'fail-message' }, "Oooooops... something went wrong, try one more time"));
    }
    if (isLoading === const_1.RequestStatus.Success && !offers.length) {
        return React.createElement(main_empty_1["default"], { activeCity: activeCity });
    }
    return (React.createElement("main", { className: 'page__main page__main--index' },
        React.createElement("h1", { className: 'visually-hidden' }, "Cities"),
        React.createElement(main_cities_locations_1["default"], { activeCity: activeCity }),
        React.createElement(main_cities_container_1["default"], { placesToStay: placesToStay, activeCity: activeCity, offers: particularCityOffers, city: safeCityForOffers })));
}
exports["default"] = MainPage;
