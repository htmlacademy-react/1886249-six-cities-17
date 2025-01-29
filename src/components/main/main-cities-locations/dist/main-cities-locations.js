"use strict";
exports.__esModule = true;
var const_1 = require("@/libs/const");
var offers_1 = require("@/storage/slices/offers");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
function MainCitiesLocations(_a) {
    var activeCity = _a.activeCity;
    var _b = react_router_dom_1.useSearchParams(), searchParam = _b[0], setSearchParam = _b[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        var cityParam = searchParam.get('city');
        var city = Object.values(const_1.Cities).includes(cityParam) ? cityParam : const_1.Cities.PARIS;
        dispatch(offers_1.offersActions.setActiveCity(city));
    }, [searchParam, dispatch]);
    var handleCityClick = function () {
        setSearchParam({ city: city });
    };
    return (React.createElement("div", { className: "tabs" },
        React.createElement("section", { className: "locations container" },
            React.createElement("ul", { className: "locations__list tabs__list" }, Object.values(const_1.Cities).map(function (city) { return (React.createElement("li", { key: city, className: "locations__item" },
                React.createElement(react_router_dom_1.Link, { onClick: function () { return handleCityClick; }, className: activeCity === city
                        ? 'locations__item-link tabs__item tabs__item--active'
                        : 'locations__item-link tabs__item', to: "?city=" + city },
                    React.createElement("span", null, city)))); })))));
}
exports["default"] = MainCitiesLocations;
