"use strict";
exports.__esModule = true;
var logo_1 = require("@/components/logo/logo");
var hooks_1 = require("@/hooks");
var const_1 = require("@/libs/const");
var authorisation_1 = require("@/thunk/authorisation");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function LoginPage() {
    var emailRef = react_1.useRef(null);
    var passwordRef = react_1.useRef(null);
    var dispatch = hooks_1.useAppDispatch();
    var navigate = react_router_dom_1.useNavigate();
    var handleSubmit = function (evt) {
        evt.preventDefault();
        if (emailRef.current && passwordRef.current) {
            var loginData = { email: emailRef.current.value, password: passwordRef.current.value };
            dispatch(authorisation_1.login(loginData))
                .then(function (response) {
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate(const_1.AppRoutes.Main);
                }
            });
        }
    };
    return (React.createElement("div", { className: "page page--gray page--login" },
        React.createElement("header", { className: "header" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "header__wrapper" },
                    React.createElement("div", { className: "header__left" },
                        React.createElement(logo_1["default"], null))))),
        React.createElement("main", { className: "page__main page__main--login" },
            React.createElement("div", { className: "page__login-container container" },
                React.createElement("section", { className: "login" },
                    React.createElement("h1", { className: "login__title" }, "Sign in"),
                    React.createElement("form", { className: "login__form form", method: "get", onSubmit: handleSubmit },
                        React.createElement("div", { className: "login__input-wrapper form__input-wrapper" },
                            React.createElement("label", { className: "visually-hidden" }),
                            "E-mail",
                            React.createElement("input", { ref: emailRef, className: "login__input form__input", type: "email", name: "email", placeholder: "Email", required: true })),
                        React.createElement("div", { className: "login__input-wrapper form__input-wrapper" },
                            React.createElement("label", { className: "visually-hidden" }),
                            "Password",
                            React.createElement("input", { ref: passwordRef, className: "login__input form__input", type: "password", name: "password", placeholder: "Password", required: true, pattern: '^(?=.*[a-zA-Z])(?=.*\\d)(?!.*^\\s+$).+$' })),
                        React.createElement("button", { className: "login__submit form__submit button", type: "submit" }, "Sign in"))),
                React.createElement("section", { className: "locations locations--login locations--current" },
                    React.createElement("div", { className: "locations__item" },
                        React.createElement("a", { className: "locations__item-link", href: "#" },
                            React.createElement("span", null, "Amsterdam"))))))));
}
exports["default"] = LoginPage;
