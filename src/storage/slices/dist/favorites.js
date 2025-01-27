"use strict";
exports.__esModule = true;
exports.favouritesSelectors = exports.favouritesActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sliceNames_1 = require("./sliceNames");
var favourites_1 = require("@/thunk/favourites");
var react_toastify_1 = require("react-toastify");
var const_1 = require("@/libs/const");
var initialState = {
    favouritesCards: [],
    fetchFavouritsStatus: const_1.RequestStatus.Idle
};
var favouriteSlice = toolkit_1.createSlice({
    name: sliceNames_1.FAVOURITES_SLICE_NAME,
    initialState: initialState,
    reducers: {
        setFavourites: function (state, action) {
            state.favouritesCards = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(favourites_1.fetchFavourits.pending, function (state) {
            state.fetchFavouritsStatus = const_1.RequestStatus.Loading;
        })
            .addCase(favourites_1.fetchFavourits.fulfilled, function (state, action) {
            if (action.payload) {
                state.favouritesCards = action.payload;
            }
        })
            .addCase(favourites_1.fetchFavourits.rejected, function (state) {
            state.fetchFavouritsStatus = const_1.RequestStatus.Failed;
            react_toastify_1.toast.warn('Error while loading Favourites, try again');
        })
            .addCase(favourites_1.changeFavouriteStatus.fulfilled, function (state, _a) {
            var payload = _a.payload;
            if (payload.isFavorite) {
                state.favouritesCards.push(payload);
            }
            else {
                state.favouritesCards = state.favouritesCards.filter(function (offer) { return offer.id !== payload.id; });
            }
        });
    },
    selectors: {
        selectFavourites: function (state) { return state.favouritesCards; },
        selectFavouritesNumber: function (state) { return state.favouritesCards.length; }
    }
});
exports.favouritesActions = favouriteSlice.actions;
exports.favouritesSelectors = favouriteSlice.selectors;
exports["default"] = favouriteSlice;
