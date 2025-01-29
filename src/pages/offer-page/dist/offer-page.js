"use strict";
exports.__esModule = true;
var near_places_1 = require("../../components/offer/near-places/near-places");
var react_1 = require("react");
var hooks_1 = require("@/hooks");
var fullOffer_1 = require("@/storage/slices/fullOffer");
var fullOffer_2 = require("@/thunk/fullOffer");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var offer_1 = require("@/components/offer/offer/offer");
function OfferPage(_a) {
    var offers = _a.offers;
    var dispatch = hooks_1.useAppDispatch();
    var id = react_router_dom_1.useParams().id;
    var location = react_router_dom_1.useLocation();
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    react_1.useEffect(function () {
        if (id) {
            dispatch(fullOffer_2.getOffer(id));
            dispatch(fullOffer_2.getNearPlaces(id));
            dispatch(fullOffer_2.getReviews(id));
        }
    }, [id, dispatch]);
    var _b = react_1.useState(undefined), selectedPoint = _b[0], setSelectedPoint = _b[1];
    var currentOffer = react_redux_1.useSelector(fullOffer_1.offerFullSElectors.selectFullOffer);
    var nearOffers = hooks_1.useAppSelector(fullOffer_1.offerFullSElectors.selectNearPlaces).slice(0, 3);
    if (!currentOffer) {
        return null;
    }
    var handleListItemHover = function (listItemID) {
        var currentPoint = offers.find(function (offer) { return offer.id === listItemID; });
        setSelectedPoint(currentPoint);
    };
    return (React.createElement("main", { className: "page__main page__main--offer" },
        React.createElement(offer_1["default"], { currentOffer: currentOffer, nearOffers: nearOffers, selectedPoint: selectedPoint }),
        React.createElement("div", { className: "container" },
            React.createElement(near_places_1["default"], { onListItemHover: handleListItemHover, offers: nearOffers }))));
}
exports["default"] = OfferPage;
