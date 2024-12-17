"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App.tsx/App");
var offers_1 = require("./libs/mocks/offers");
var react_router_dom_1 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(App_1["default"], { offers: offers_1.offers }))));
