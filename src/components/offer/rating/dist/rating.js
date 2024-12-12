"use strict";
exports.__esModule = true;
var const_1 = require("../../../libs/const");
function Rating(_a) {
    var offerCardType = _a.offerCardType;
    return (React.createElement("div", { className: "place-card__rating rating" },
        React.createElement("div", { className: "place-card__stars rating__stars" },
            React.createElement("span", { style: offerCardType === const_1.CardType.FavoritesCard && { width: '100%' } || { width: '80%' } }),
            React.createElement("span", { className: "visually-hidden" }, "Rating"))));
}
exports["default"] = Rating;
