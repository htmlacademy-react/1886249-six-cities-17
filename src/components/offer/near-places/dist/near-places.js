"use strict";
exports.__esModule = true;
var offer_list_1 = require("../../offer-list/offer-list");
var const_1 = require("../../../libs/const");
var near_places_1 = require("../../../libs/mocks/near-places");
function NearPlaces() {
    return (React.createElement("section", { className: "near-places places" },
        React.createElement("h2", { className: "near-places__title" }, "Other places in the neighbourhood"),
        React.createElement(offer_list_1["default"], { offers: near_places_1.nearPlaces, offerCardType: const_1.CardType.NearCard })));
}
exports["default"] = NearPlaces;
