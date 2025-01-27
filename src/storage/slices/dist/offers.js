"use strict";
exports.__esModule = true;
exports.offersSelectors = exports.offersActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sliceNames_1 = require("./sliceNames");
var const_1 = require("@/libs/const");
var offers_1 = require("@/thunk/offers");
var react_toastify_1 = require("react-toastify");
var initialState = {
    activeCity: const_1.Cities.PARIS,
    offers: [],
    currentSort: const_1.SortItem.Popular,
    requestStatus: const_1.RequestStatus.Idle,
    loadingError: null
};
var offersSlice = toolkit_1.createSlice({
    name: sliceNames_1.OFFERS_SLICE_NAME,
    initialState: initialState,
    reducers: {
        setActiveCity: function (state, action) {
            state.activeCity = action.payload;
        },
        setCurrentSort: function (state, action) {
            state.currentSort = action.payload;
        },
        updateOffers: function (state, action) {
            state.offers = action.payload;
        },
        updateOffer: function (state, action) {
            state.offers = state.offers.map(function (offer) { return offer.id === action.payload.id ? action.payload : offer; });
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(offers_1.fetchOffers.pending, function (state) {
            state.requestStatus = const_1.RequestStatus.Loading;
        })
            .addCase(offers_1.fetchOffers.fulfilled, function (state, action) {
            if (action.payload) {
                state.offers = action.payload;
            }
            state.requestStatus = const_1.RequestStatus.Success;
        })
            .addCase(offers_1.fetchOffers.rejected, function (state) {
            state.requestStatus = const_1.RequestStatus.Failed;
            react_toastify_1.toast.warn('Error while loading offers');
        });
    },
    selectors: {
        selectActiveCity: function (state) { return state.activeCity; },
        selectCurrentSort: function (state) { return state.currentSort; },
        selectOffers: function (state) { return state.offers; },
        selectOffersRequestStatus: function (state) { return state.requestStatus; }
    }
});
exports.offersActions = offersSlice.actions;
exports.offersSelectors = offersSlice.selectors;
exports["default"] = offersSlice;
