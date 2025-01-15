import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, RequestStatus, Review } from '@/libs/types/types';
import { getNearPlaces, getOffer, getReviews, sendReview } from '@/thunk/fullOffer';


type OfferInitialState = {
  offer: OfferFull | null;
  reviews: Review[];
  nearPlaces: OfferCardPrew[];
  offerRequestStatus: RequestStatus;
  nearPlacesRequestStatus: RequestStatus;
  reviewsRequestStatus: RequestStatus;
  PostReviewRequestStatus: RequestStatus;
  isOfferError: boolean;
  isPostReviewError: boolean;
  isFormDisabled: boolean;
}

const initialState: OfferInitialState = {
  offer: null,
  reviews: [],
  nearPlaces: [],
  offerRequestStatus: RequestStatus.Idle,
  nearPlacesRequestStatus: RequestStatus.Idle,
  reviewsRequestStatus: RequestStatus.Idle,
  PostReviewRequestStatus: RequestStatus.Idle,
  isOfferError: false,
  isPostReviewError: false,
  isFormDisabled: false,
};


const offerFullSlice = createSlice({
  name: FULL_OFFER_SLICE_NAME,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.pending, (state) => {
        state.offerRequestStatus = RequestStatus.Loading;
      })
      .addCase(getOffer.fulfilled, (state, action: PayloadAction<OfferFull>) => {
        state.offer = action.payload;
        state.offerRequestStatus = RequestStatus.Success;
      })
      .addCase(getOffer.rejected, (state) => {
        state.offerRequestStatus = RequestStatus.Failed;
      })
      .addCase(getNearPlaces.pending, (state) => {
        state.nearPlacesRequestStatus = RequestStatus.Loading;
      })
      .addCase(getNearPlaces.fulfilled, (state, action) => {
        state.nearPlacesRequestStatus = RequestStatus.Success;
        state.nearPlaces = action.payload;
      })
      .addCase(getNearPlaces.rejected, (state) => {
        state.nearPlacesRequestStatus = RequestStatus.Success;
      })
      .addCase(getReviews.pending, (state) => {
        state.reviewsRequestStatus = RequestStatus.Loading;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviewsRequestStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state) => {
        state.reviewsRequestStatus = RequestStatus.Success;
      })
      .addCase(sendReview.pending, (state) => {
        state.PostReviewRequestStatus = RequestStatus.Loading;
        state.isFormDisabled = true;
      })
      .addCase(sendReview.fulfilled, (state) => {
        state.PostReviewRequestStatus = RequestStatus.Success;
        state.isFormDisabled = false;
      })
      .addCase(sendReview.rejected, (state, action) => {
        state.PostReviewRequestStatus = RequestStatus.Failed;
        state.isFormDisabled = false;
        if (action.error.code === 404) {
          state.isPostReviewError = true;
        }

      });
  },
  selectors: {
    selectFullOffer: (state) => state.offer,
    selectRequestStatus: (state) => state.offerRequestStatus,
    selectNearPlaces: (state) => state.nearPlaces,
    selectReviews: (state) => state.reviews,
    selectIsOfferError: (state) => state.isOfferError,
    selectIsFormDisabled: (state) => state.isFormDisabled,
  }
});

export const offerFullActions = offerFullSlice.actions;
export const offerFullSElectors = offerFullSlice.selectors;
export default offerFullSlice;

