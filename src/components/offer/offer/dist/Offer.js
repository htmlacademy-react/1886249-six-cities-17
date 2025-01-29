"use strict";
exports.__esModule = true;
var offer_gallery_1 = require("../offer-gallery/offer-gallery");
var offer_description_1 = require("../offer-description/offer-description");
var const_1 = require("../../../libs/const");
var map_component_1 = require("@/components/map-component/map-component");
var cities_locations_1 = require("@/libs/cities-locations");
function Offer(_a) {
    var nearOffers = _a.nearOffers, currentOffer = _a.currentOffer, selectedPoint = _a.selectedPoint;
    var cityForOffers = cities_locations_1.CITIES_LOCATIONS.find(function (city) { return city.name === currentOffer.city.name; });
    if (!cityForOffers) {
        return null;
    }
    return (React.createElement("section", { className: "offer" },
        React.createElement(offer_gallery_1["default"], { images: currentOffer.images }),
        React.createElement(offer_description_1["default"], { currentOffer: currentOffer }),
        React.createElement(map_component_1["default"], { mapType: const_1.MapType.OfferMap, offers: nearOffers, selectedOffer: selectedPoint, city: cityForOffers })));
}
exports["default"] = Offer;
