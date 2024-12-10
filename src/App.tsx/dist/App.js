"use strict";
exports.__esModule = true;
var favorites_page_1 = require("../pages/favorites-page/favorites-page");
var login_page_1 = require("../pages/login-page/login-page");
var main_page_1 = require("../pages/main-page/main-page");
var react_router_dom_1 = require("react-router-dom");
var not_found_page_1 = require("../pages/not-found-page/not-found-page");
var offer_page_1 = require("../pages/offer-page/offer-page");
var const_1 = require("../libs/const");
var private_route_1 = require("../components/private-route/private-route");
function App(_a) {
    var offers = _a.offers;
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Main, element: React.createElement(Layout, null) },
            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(main_page_1["default"], { offers: offers, placesToStay: const_1.placesToStay }) }),
            React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Favourites, element: React.createElement(private_route_1["default"], { authorisationStatus: const_1.AuthorisationStatus.Auth },
                    React.createElement(favorites_page_1["default"], null)) }),
            React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Offer, element: React.createElement(offer_page_1["default"], null) })),
        React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Login, element: React.createElement(login_page_1["default"], null) }),
        React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Error, element: React.createElement(not_found_page_1["default"], null) })));
}
exports["default"] = App;
