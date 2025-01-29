"use strict";
exports.__esModule = true;
require("./styles.css");
var logo_1 = require("../logo/logo");
var hooks_1 = require("@/hooks");
var authorised_user_menu_1 = require("./authorised-user-menu/authorised-user-menu");
var not_authorised_user_menu_1 = require("./not-authorised-user-menu/not-authorised-user-menu");
var react_1 = require("react");
var favourites_1 = require("@/thunk/favourites");
var user_1 = require("@/storage/slices/user");
function Header() {
    var dispatch = hooks_1.useAppDispatch();
    var user = hooks_1.useAppSelector(user_1.userSelector.selectUser);
    react_1.useEffect(function () {
        if (user !== null) {
            dispatch(favourites_1.fetchFavourits());
        }
    }, [dispatch, user]);
    return (React.createElement("header", { className: "header" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "header__wrapper" },
                React.createElement("div", { className: "header__left" },
                    React.createElement(logo_1["default"], null)),
                user
                    ? React.createElement(authorised_user_menu_1.AuthorisedUserMenu, null)
                    : React.createElement(not_authorised_user_menu_1.NotAuthorisedUserMenu, null)))));
}
exports["default"] = Header;
