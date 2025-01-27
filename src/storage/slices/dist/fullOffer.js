"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.offerFullSElectors = exports.offerFullActions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var sliceNames_1 = require("./sliceNames");
var fullOffer_1 = require("@/thunk/fullOffer");
var const_1 = require("@/libs/const");
var react_toastify_1 = require("react-toastify");
var initialState = {
    offer: null,
    reviews: [],
    nearPlaces: [],
    postReviewRequestStatus: const_1.RequestStatus.Idle,
    isOfferError: false,
    isFormDisabled: true
};
var offerFullSlice = toolkit_1.createSlice({
    name: sliceNames_1.FULL_OFFER_SLICE_NAME,
    initialState: initialState,
    reducers: {
        setFormDisabled: function (state, action) {
            state.isFormDisabled = action.payload;
        },
        updateFavouriteOffer: function (state, action) {
            if (state.offer) {
                state.offer = __assign(__assign({}, state.offer), { isFavorite: action.payload });
            }
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(fullOffer_1.getOffer.fulfilled, function (state, action) {
            state.offer = action.payload;
        })
            .addCase(fullOffer_1.getOffer.rejected, function () {
            react_toastify_1.toast.warn('Error occured while loading an offer');
        })
            .addCase(fullOffer_1.getNearPlaces.fulfilled, function (state, action) {
            if (action.payload) {
                state.nearPlaces = action.payload;
            }
        })
            .addCase(fullOffer_1.getNearPlaces.rejected, function () {
            react_toastify_1.toast.warn('Error occured while loading near places');
        })
            .addCase(fullOffer_1.getReviews.fulfilled, function (state, action) {
            state.reviews = action.payload;
        })
            .addCase(fullOffer_1.getReviews.rejected, function () {
            react_toastify_1.toast.warn('Error occured while loading reviews');
        })
            .addCase(fullOffer_1.sendReview.pending, function (state) {
            state.postReviewRequestStatus = const_1.RequestStatus.Loading;
            state.isFormDisabled = true;
        })
            .addCase(fullOffer_1.sendReview.fulfilled, function (state, action) {
            state.postReviewRequestStatus = const_1.RequestStatus.Success;
            state.isFormDisabled = false;
            state.reviews.push(action.payload);
        })
            .addCase(fullOffer_1.sendReview.rejected, function (state) {
            state.postReviewRequestStatus = const_1.RequestStatus.Failed;
            state.isFormDisabled = false;
        });
    },
    selectors: {
        selectFullOffer: function (state) { return state.offer; },
        selectNearPlaces: function (state) { return state.nearPlaces; },
        selectReviews: function (state) { return state.reviews; },
        selectIsOfferError: function (state) { return state.isOfferError; },
        selectIsFormDisabled: function (state) { return state.isFormDisabled; },
        selectPostReviewRequestStatus: function (state) { return state.postReviewRequestStatus; }
    }
});
exports.offerFullActions = offerFullSlice.actions;
exports.offerFullSElectors = offerFullSlice.selectors;
exports["default"] = offerFullSlice;
