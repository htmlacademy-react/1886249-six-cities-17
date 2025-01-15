import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, RequestStatus, Review } from '@/libs/types/types';
import { getNearPlaces, getOffer, getReviews, sendReview } from '@/thunk/fullOffer';


type OfferInitialState = {
  offer: OfferFull | null;
  reviews: Review[];
  nearPlaces: OfferCardPrew[];
  requestStatus: RequestStatus;
  isError: boolean;
  isFormDisabled: boolean;
}

const initialState: OfferInitialState = {
  offer: null,
  reviews: [],
  nearPlaces: [],
  requestStatus: RequestStatus.Idle,
  isError: false,
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
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(getOffer.fulfilled, (state, action: PayloadAction<OfferFull>) => {
        state.offer = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(getOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      })
      .addCase(getNearPlaces.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(getNearPlaces.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.nearPlaces = action.payload;
      })
      .addCase(getNearPlaces.rejected, (state) => {
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(sendReview.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.isFormDisabled = true;
      })
      .addCase(sendReview.fulfilled, (state) => {
        state.requestStatus = RequestStatus.Success;
        state.isFormDisabled = false;
      })
      .addCase(sendReview.rejected, (state, action) => {
        state.requestStatus = RequestStatus.Failed;
        state.isFormDisabled = false;
        if (action.error.code === 404) {
          state.isError = true;
        }

      });
  },
  selectors: {
    selectFullOffer: (state) => state.offer,
    selectRequestStatus: (state) => state.requestStatus,
    selectNearPlaces: (state) => state.nearPlaces,
    selectReviews: (state) => state.reviews,
    selectIsError: (state) => state.isError,
    selectIsFormDisabled: (state) => state.isFormDisabled,
  }
});

export const offerFullActions = offerFullSlice.actions;
export const offerFullSElectors = offerFullSlice.selectors;
export default offerFullSlice;

