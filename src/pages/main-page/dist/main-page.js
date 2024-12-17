"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var map_1 = require("@/components/map/map");
var offer_list_1 = require("@/components/offer-list/offer-list");
var const_1 = require("@/libs/const");
function MainPage(_a) {
    var placesToStay = _a.placesToStay, offers = _a.offers;
    var _b = react_1.useState(null), isActiveOffer = _b[0], setIsActiveOffer = _b[1];
    var handleActiveOfferChange = function (id) {
        setIsActiveOffer(id);
    };
    return (React.createElement("main", { className: "page__main page__main--index" },
        React.createElement("h1", { className: "visually-hidden" }, "Cities"),
        React.createElement("div", { className: "tabs" },
            React.createElement("section", { className: "locations container" },
                React.createElement("ul", { className: "locations__list tabs__list" }, Object.values(const_1.Cities).map(function (city) { return (React.createElement("li", { key: city, className: "locations__item" },
                    React.createElement(react_router_dom_1.NavLink, { to: "/", className: function (_a) {
                            var isActive = _a.isActive;
                            return isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
                        } },
                        React.createElement("span", null, city)))); })))),
        React.createElement("div", { className: "cities" },
            React.createElement("div", { className: "cities__places-container container" },
                React.createElement("section", { className: "cities__places places" },
                    React.createElement("h2", { className: "visually-hidden" }, "Places"),
                    React.createElement("b", { className: "places__found" },
                        placesToStay,
                        " places to stay in Amsterdam"),
                    React.createElement("form", { className: "places__sorting", action: "#", method: "get" },
                        React.createElement("span", { className: "places__sorting-caption" }, "Sort by"),
                        React.createElement("span", { className: "places__sorting-type", tabIndex: 0 },
                            "Popular",
                            React.createElement("svg", { className: "places__sorting-arrow", width: 7, height: 4 },
                                React.createElement("use", { xlinkHref: "#icon-arrow-select" }))),
                        React.createElement("ul", { className: "places__options places__options--custom places__options--opened" },
                            React.createElement("li", { className: "places__option places__option--active", tabIndex: 0 }, "Popular"),
                            React.createElement("li", { className: "places__option", tabIndex: 0 }, "Price: low to high"),
                            React.createElement("li", { className: "places__option", tabIndex: 0 }, "Price: high to low"),
                            React.createElement("li", { className: "places__option", tabIndex: 0 }, "Top rated first"))),
                    React.createElement(offer_list_1["default"], { onHandleActiveOfferChange: handleActiveOfferChange, offers: offers, offerCardType: const_1.CardType.CitiesCard })),
                React.createElement("div", { className: "cities__right-section" },
                    React.createElement(map_1["default"], { mapType: const_1.MapType.MainMap }))))));
}
exports["default"] = MainPage;
