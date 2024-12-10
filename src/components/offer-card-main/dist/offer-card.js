"use strict";
exports.__esModule = true;
var clsx_1 = require("clsx");
var react_router_dom_1 = require("react-router-dom");
var const_1 = require("../../libs/const");
function OfferCard(_a) {
    var offer = _a.offer, onHandleActiveOfferChange = _a.onHandleActiveOfferChange;
    var id = offer.id, previewImage = offer.previewImage, isPremium = offer.isPremium, price = offer.price, title = offer.title, isFavorite = offer.isFavorite;
    var typeCard = isFavorite ? 'favorites' : 'cities';
    return (React.createElement("article", { onMouseEnter: function () { return onHandleActiveOfferChange && onHandleActiveOfferChange(id); }, onMouseLeave: function () { return onHandleActiveOfferChange && onHandleActiveOfferChange(null); }, className: clsx_1.clsx('place-card', typeCard && typeCard + "__card") },
        isPremium ?
            React.createElement("div", { className: "place-card__mark" },
                React.createElement("span", null, "Premium"))
            : null,
        React.createElement("div", { className: clsx_1.clsx(typeCard + "__image-wrapper", 'place-card__image-wrapper') },
            React.createElement(react_router_dom_1.Link, { to: "offer/:" + id },
                React.createElement("img", { className: "place-card__image", src: previewImage, width: isFavorite ? const_1.ImgSettings.FavouriteCardWidth : const_1.ImgSettings.OfferCardWidth, height: isFavorite ? const_1.ImgSettings.FavouriteCardHeight : const_1.ImgSettings.OfferCardHeight, alt: "Place image" }))),
        React.createElement("div", { className: (isFavorite ? 'favorites__card-info' : '') + " place-card__info" },
            React.createElement("div", { className: "place-card__price-wrapper" },
                React.createElement("div", { className: "place-card__price" },
                    React.createElement("b", { className: "place-card__price-value" },
                        "\u20AC",
                        price),
                    React.createElement("span", { className: "place-card__price-text" }, "/\u00A0night")),
                React.createElement("button", { className: "place-card__bookmark-button " + (isFavorite ? 'place-card__bookmark-button--active' : '') + " button", type: "button" },
                    React.createElement("svg", { className: "place-card__bookmark-icon", width: 18, height: 19 },
                        React.createElement("use", { xlinkHref: "#icon-bookmark" })),
                    React.createElement("span", { className: "visually-hidden" }, "To bookmarks"))),
            React.createElement("div", { className: "place-card__rating rating" },
                React.createElement("div", { className: "place-card__stars rating__stars" },
                    React.createElement("span", { style: isFavorite ? { width: '100%' } : { width: '80%' } }),
                    React.createElement("span", { className: "visually-hidden" }, "Rating"))),
            React.createElement("h2", { className: "place-card__name" },
                React.createElement(react_router_dom_1.Link, { to: "offer/:" + id }, title)),
            React.createElement("p", { className: "place-card__type" }, "Apartment"))));
}
exports["default"] = OfferCard;
