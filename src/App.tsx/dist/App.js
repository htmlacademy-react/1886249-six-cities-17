"use strict";
exports.__esModule = true;
var favourites_page_1 = require("../pages/favourites-page/favourites-page");
var login_page_1 = require("../pages/login-page/login-page");
var main_page_1 = require("../pages/main-page/main-page");
var react_router_dom_1 = require("react-router-dom");
var not_found_page_1 = require("../pages/not-found-page/not-found-page");
var offer_page_1 = require("../pages/offer-page/offer-page");
var const_1 = require("../libs/const");
var private_route_1 = require("../components/private-route/private-route");
var layout_1 = require("../layout/layout");
var offers_1 = require("@/storage/slices/offers");
var offers_2 = require("@/thunk/offers");
var react_1 = require("react");
var hooks_1 = require("@/hooks");
var authorisation_1 = require("@/thunk/authorisation");
var react_toastify_1 = require("react-toastify");
function App() {
    var dispatch = hooks_1.useAppDispatch();
    var offers = hooks_1.useAppSelector(offers_1.offersSelectors.selectOffers);
    var activeCity = hooks_1.useAppSelector(offers_1.offersSelectors.selectActiveCity);
    react_1.useEffect(function () {
        dispatch(offers_2.fetchOffers());
        dispatch(authorisation_1.checkAuthorisation());
    }, [dispatch]);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_toastify_1.ToastContainer, null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Main, element: React.createElement(layout_1["default"], null) },
                React.createElement(react_router_dom_1.Route, { index: true, path: "" + const_1.AppRoutes.Main, element: React.createElement(main_page_1["default"], { activeCity: activeCity, offers: offers }) }),
                React.createElement(react_router_dom_1.Route, { index: true, path: const_1.AppRoutes.Main + ":city", element: React.createElement(main_page_1["default"], { activeCity: activeCity, offers: offers }) }),
                React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Favourites, element: React.createElement(private_route_1["default"], null,
                        React.createElement(favourites_page_1["default"], null)) }),
                React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Offers, element: React.createElement(offer_page_1["default"], { offers: offers }) })),
            React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Login, element: React.createElement(login_page_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: const_1.AppRoutes.Error, element: React.createElement(not_found_page_1["default"], null) }))));
}
exports["default"] = App;
