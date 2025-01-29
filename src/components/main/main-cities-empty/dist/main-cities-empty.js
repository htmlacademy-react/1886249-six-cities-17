"use strict";
exports.__esModule = true;
function MainCitiesEmpty(_a) {
    var activeCity = _a.activeCity;
    return (React.createElement("div", { className: "cities__places-container cities__places-container--empty container" },
        React.createElement("section", { className: "cities__no-places" },
            React.createElement("div", { className: "cities__status-wrapper tabs__content" },
                React.createElement("b", { className: "cities__status" }, "No places to stay available"),
                React.createElement("p", { className: "cities__status-description" },
                    "We could not find any property available at the moment in ",
                    activeCity))),
        React.createElement("div", { className: "cities__right-section" })));
}
exports["default"] = MainCitiesEmpty;
