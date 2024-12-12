"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var offers_full_1 = require("../../../libs/mocks/offers-full");
var offer_gallery_1 = require("../offer-gallery/offer-gallery");
// import { OfferFull } from '../../../libs/types';
var offer_description_1 = require("../offer-description/offer-description");
var const_1 = require("../../../libs/const");
var _components_1 = require("@components");
function Offer() {
    var idParams = react_router_dom_1.useParams();
    var currentOffer = offers_full_1.offersFull.find(function (offer) {
        var _a;
        if (offer.id === ((_a = idParams.id) === null || _a === void 0 ? void 0 : _a.slice(1))) {
            return offer;
        }
    });
    return (React.createElement("section", { className: "offer" },
        React.createElement(offer_gallery_1["default"], { images: currentOffer === null || currentOffer === void 0 ? void 0 : currentOffer.images }),
        React.createElement(offer_description_1["default"], { currentOffer: currentOffer }),
        React.createElement(_components_1["default"], { mapType: const_1.MapType.OfferMap })));
}
exports["default"] = Offer;
