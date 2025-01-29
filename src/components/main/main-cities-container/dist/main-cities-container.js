"use strict";
exports.__esModule = true;
var const_1 = require("@/libs/const");
var offer_list_1 = require("../offer-list/offer-list");
var react_1 = require("react");
var map_component_1 = require("../../map-component/map-component");
var sorting_cities_1 = require("../../sorting-cities/sorting-cities");
var main_cities_empty_1 = require("../main-cities-empty/main-cities-empty");
function MainCitiesContainer(_a) {
    var placesToStay = _a.placesToStay, offers = _a.offers, city = _a.city, activeCity = _a.activeCity;
    var _b = react_1.useState(undefined), selectedPoint = _b[0], setSelectedPoint = _b[1];
    var handleListItemHover = function (listItemId) {
        var currentPoint = offers.find(function (offer) { return offer.id === listItemId; });
        if (currentPoint) {
            return setSelectedPoint(currentPoint);
        }
    };
    return (React.createElement("div", { className: "cities" }, offers.length > 0 ?
        React.createElement("div", { className: "cities__places-container container" },
            React.createElement("section", { className: "cities__places places" },
                React.createElement("h2", { className: "visually-hidden" }, "Places"),
                React.createElement("b", { className: "places__found" },
                    placesToStay,
                    " places to stay in ",
                    activeCity),
                React.createElement(sorting_cities_1["default"], null),
                React.createElement(offer_list_1["default"], { offers: offers, onListItemHover: handleListItemHover, offerCardType: const_1.CardType.CitiesCard })),
            React.createElement("div", { className: "cities__right-section" },
                React.createElement(map_component_1["default"], { mapType: const_1.MapType.MainMap, city: city, offers: offers, selectedOffer: selectedPoint })))
        : React.createElement(main_cities_empty_1["default"], { activeCity: activeCity })));
}
exports["default"] = MainCitiesContainer;
