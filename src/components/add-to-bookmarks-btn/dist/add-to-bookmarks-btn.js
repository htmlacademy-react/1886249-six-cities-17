"use strict";
exports.__esModule = true;
var hooks_1 = require("@/hooks");
var const_1 = require("../../libs/const");
var react_router_dom_1 = require("react-router-dom");
var favourites_1 = require("@/thunk/favourites");
var user_1 = require("@/storage/slices/user");
function AddToBookmarksBtn(_a) {
    var bookmarkSizeType = _a.bookmarkSizeType, offerType = _a.offerType, isFavourite = _a.isFavourite, id = _a.id;
    var navigate = react_router_dom_1.useNavigate();
    var dispatch = hooks_1.useAppDispatch();
    var getBookmarkClass = function () {
        if (isFavourite) {
            return offerType + "__bookmark-button " + offerType + "__bookmark-button--active button";
        }
        return offerType + "__bookmark-button button";
    };
    var isUserExist = hooks_1.useAppSelector(user_1.userSelector.selectUser) !== null;
    var changeFavouriteStatusTo = function () {
        if (isFavourite === true) {
            return 0;
        }
        else {
            return 1;
        }
    };
    var handleBookmarkClick = function () {
        if (!isUserExist) {
            navigate(const_1.AppRoutes.Login);
        }
        else {
            dispatch(favourites_1.changeFavouriteStatus({
                id: id,
                favouriteStatus: changeFavouriteStatusTo()
            }));
        }
    };
    return (React.createElement("button", { className: getBookmarkClass(), type: 'button', onClick: handleBookmarkClick },
        React.createElement("svg", { className: offerType + "__bookmark-icon", width: bookmarkSizeType.Width, height: bookmarkSizeType.Height },
            React.createElement("use", { xlinkHref: '#icon-bookmark' })),
        React.createElement("span", { className: 'visually-hidden' }, "To bookmarks")));
}
exports["default"] = AddToBookmarksBtn;
