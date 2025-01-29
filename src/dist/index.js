"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var storage_1 = require("./storage");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var app_1 = require("./app.tsx/app");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: storage_1["default"] },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(app_1["default"], null)))));
