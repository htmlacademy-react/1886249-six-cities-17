"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var const_1 = require("../../libs/const");
function Logo() {
    return (React.createElement(react_router_dom_1.Link, { to: const_1.AppRoutes.Main, className: "header__logo-link header__logo-link--active" },
        React.createElement("img", { className: "header__logo", src: "img/logo.svg", alt: "6 cities logo", width: const_1.LOGO_WIDTH, height: const_1.LOGO_HEIGHT })));
}
exports["default"] = Logo;
