"use strict";
exports.__esModule = true;
var add_to_bookmarks_btn_1 = require("@/components/add-to-bookmarks-btn/add-to-bookmarks-btn");
var host_info_1 = require("../host-info/host-info");
var offer_reviews_1 = require("../reviews/offer-reviews/offer-reviews");
var const_1 = require("@/libs/const");
function OfferDescription(_a) {
    var currentOffer = _a.currentOffer;
    return (React.createElement("div", { className: "offer__container container" },
        React.createElement("div", { className: "offer__wrapper" },
            (currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.isPremium) &&
                React.createElement("div", { className: "offer__mark" },
                    React.createElement("span", null, "Premium")),
            React.createElement("div", { className: "offer__name-wrapper" },
                React.createElement("h1", { className: "offer__name" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.title),
                React.createElement(add_to_bookmarks_btn_1["default"], { isFavourite: currentOffer.isFavorite, id: currentOffer.id, offerType: const_1.OfferType.OfferFull, bookmarkSizeType: const_1.BookmarkOfferFull })),
            React.createElement("div", { className: "offer__rating rating" },
                React.createElement("div", { className: "offer__stars rating__stars" },
                    React.createElement("span", { style: { width: '80%' } }),
                    React.createElement("span", { className: "visually-hidden" }, "Rating")),
                React.createElement("span", { className: "offer__rating-value rating__value" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.rating)),
            React.createElement("ul", { className: "offer__features" },
                React.createElement("li", { className: "offer__feature offer__feature--entire" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.type),
                React.createElement("li", { className: "offer__feature offer__feature--bedrooms" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.bedrooms),
                React.createElement("li", { className: "offer__feature offer__feature--adults" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.maxAdults)),
            React.createElement("div", { className: "offer__price" },
                React.createElement("b", { className: "offer__price-value" },
                    "\u20AC", currentOffer === null || currentOffer === void 0 ? void 0 :
                    currentOffer.price),
                React.createElement("span", { className: "offer__price-text" }, "\u00A0night")),
            React.createElement("div", { className: "offer__inside" },
                React.createElement("h2", { className: "offer__inside-title" }, "What's inside"),
                React.createElement("ul", { className: "offer__inside-list" }, currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.goods.map(function (item) { return (React.createElement("li", { key: item, className: "offer__inside-item" }, item)); }))),
            React.createElement(host_info_1["default"], { currentOffer: currentOffer }),
            React.createElement(offer_reviews_1["default"], null))));
}
exports["default"] = OfferDescription;
