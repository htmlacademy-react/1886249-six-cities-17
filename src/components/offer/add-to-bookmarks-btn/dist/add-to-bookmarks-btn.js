"use strict";
exports.__esModule = true;
var const_1 = require("../../../libs/const");
function AddToBookmarks(_a) {
    var offerCardType = _a.offerCardType;
    return (React.createElement("button", { className: "place-card__bookmark-button " + (offerCardType === const_1.CardType.FavoritesCard && 'place-card__bookmark-button--active') + " button", type: "button" },
        React.createElement("svg", { className: "place-card__bookmark-icon", width: 18, height: 19 },
            React.createElement("use", { xlinkHref: "#icon-bookmark" })),
        React.createElement("span", { className: "visually-hidden" }, "To bookmarks")));
}
exports["default"] = AddToBookmarks;
