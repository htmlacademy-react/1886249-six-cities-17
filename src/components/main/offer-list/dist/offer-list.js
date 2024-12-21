"use strict";
exports.__esModule = true;
var const_1 = require("../../libs/const");
var offer_card_1 = require("../offer-card-main/offer-card");
var clsx_1 = require("clsx");
function OfferList(_a) {
    var offers = _a.offers, onHandleActiveOfferChange = _a.onHandleActiveOfferChange, offerCardType = _a.offerCardType;
    return (React.createElement("div", { className: clsx_1["default"](offerCardType + "__places-list places__list", offerCardType === const_1.CardType.CitiesCard && 'tabs__content') }, offers.map(function (offer) { return React.createElement(offer_card_1["default"], { key: offer.id, onHandleActiveOfferChange: onHandleActiveOfferChange, offer: offer, offerCardType: offerCardType }); })));
}
exports["default"] = OfferList;
