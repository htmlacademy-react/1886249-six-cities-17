"use strict";
exports.__esModule = true;
var const_1 = require("../../libs/const");
var footer_1 = require("../../components/footer/footer");
var offer_card_1 = require("../../components/offer-card-main/offer-card");
var favourites_1 = require("../../libs/mocks/favourites");
function FavouritesPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: "page__main page__main--favorites" },
            React.createElement("div", { className: "page__favorites-container container" },
                React.createElement("section", { className: "favorites" },
                    React.createElement("h1", { className: "favorites__title" }, "Saved listing"),
                    React.createElement("ul", { className: "favorites__list" },
                        React.createElement("li", { className: "favorites__locations-items" },
                            React.createElement("div", { className: "favorites__locations locations locations--current" },
                                React.createElement("div", { className: "locations__item" },
                                    React.createElement("a", { className: "locations__item-link", href: "#" },
                                        React.createElement("span", null, "Amsterdam")))),
                            React.createElement("div", { className: "favorites__places" }, favourites_1.favourites.map(function (favOffer) { return React.createElement(offer_card_1["default"], { offer: favOffer, key: favOffer.id, offerCardType: const_1.CardType.FavoritesCard }); }))))))),
        React.createElement(footer_1["default"], null)));
}
exports["default"] = FavouritesPage;
