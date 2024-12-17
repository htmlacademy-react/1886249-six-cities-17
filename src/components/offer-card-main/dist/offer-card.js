"use strict";
exports.__esModule = true;
var clsx_1 = require("clsx");
var react_router_dom_1 = require("react-router-dom");
var const_1 = require("../../libs/const");
var rating_1 = require("../offer/rating/rating");
var add_to_bookmarks_btn_1 = require("../offer/add-to-bookmarks-btn/add-to-bookmarks-btn");
function OfferCard(_a) {
    var offer = _a.offer, onHandleActiveOfferChange = _a.onHandleActiveOfferChange, offerCardType = _a.offerCardType;
    var id = offer.id, previewImage = offer.previewImage, isPremium = offer.isPremium, price = offer.price, title = offer.title;
    return (React.createElement("article", { onMouseEnter: function () { return onHandleActiveOfferChange && onHandleActiveOfferChange(id); }, onMouseLeave: function () { return onHandleActiveOfferChange && onHandleActiveOfferChange(null); }, className: clsx_1.clsx('place-card', offerCardType + "__card") },
        isPremium ?
            React.createElement("div", { className: "place-card__mark" },
                React.createElement("span", null, "Premium"))
            : null,
        React.createElement("div", { className: clsx_1.clsx(offerCardType + "__image-wrapper", 'place-card__image-wrapper') },
            React.createElement(react_router_dom_1.Link, { to: "offer/:" + id },
                React.createElement("img", { className: "place-card__image", src: previewImage, width: offerCardType === const_1.CardType.FavoritesCard ? const_1.ImgSettings.FavouriteCardWidth : const_1.ImgSettings.OfferCardWidth, height: const_1.CardType.FavoritesCard ? const_1.ImgSettings.FavouriteCardHeight : const_1.ImgSettings.OfferCardHeight, alt: "Place image" }))),
        React.createElement("div", { className: (const_1.CardType.FavoritesCard && 'favorites__card-info') + " place-card__info" },
            React.createElement("div", { className: "place-card__price-wrapper" },
                React.createElement("div", { className: "place-card__price" },
                    React.createElement("b", { className: "place-card__price-value" },
                        "\u20AC",
                        price),
                    React.createElement("span", { className: "place-card__price-text" }, "/\u00A0night")),
                React.createElement(add_to_bookmarks_btn_1["default"], { offerCardType: offerCardType })),
            React.createElement(rating_1["default"], { offerCardType: offerCardType }),
            React.createElement("h2", { className: "place-card__name" },
                React.createElement(react_router_dom_1.Link, { to: "offer/:" + id }, title)),
            React.createElement("p", { className: "place-card__type" }, "Apartment"))));
}
exports["default"] = OfferCard;
