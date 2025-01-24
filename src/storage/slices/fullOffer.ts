import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, Review } from '@/libs/types/types';
import { getNearPlaces, getOffer, getReviews, sendReview } from '@/thunk/fullOffer';
import { RequestStatus } from '@/libs/const';
import { toast } from 'react-toastify';

type OfferInitialState = {
  offer: OfferFull | null;
  reviews: Review[];
  nearPlaces: OfferCardPrew[];
  postReviewRequestStatus: RequestStatus;
  isOfferError: boolean;
  isFormDisabled: boolean;
}

const initialState: OfferInitialState = {
  offer: null,
  reviews: [],
  nearPlaces: [],
  postReviewRequestStatus: RequestStatus.Idle,
  isOfferError: false,
  isFormDisabled: true,
};


const offerFullSlice = createSlice({
  name: FULL_OFFER_SLICE_NAME,
  initialState,
  reducers: {
    setFormDisabled: (state, action: PayloadAction<boolean>) => {
      state.isFormDisabled = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.fulfilled, (state, action: PayloadAction<OfferFull>) => {
        state.offer = action.payload;
      })
      .addCase(getOffer.rejected, () => {
        toast.warn('Error occured while loading an offer');
      })
      .addCase(getNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(getNearPlaces.rejected, () => {
        toast.warn('Error occured while loading near places');
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, () => {
        toast.warn('Error occured while loading reviews');
      })
      .addCase(sendReview.pending, (state) => {
        state.postReviewRequestStatus = RequestStatus.Loading;
        state.isFormDisabled = true;
      })
      .addCase(sendReview.fulfilled, (state, action: PayloadAction<Review>) => {
        state.postReviewRequestStatus = RequestStatus.Success;
        state.isFormDisabled = false;
        state.reviews.push(action.payload);
      })
      .addCase(sendReview.rejected, (state) => {
        state.postReviewRequestStatus = RequestStatus.Failed;
        state.isFormDisabled = false;
      });
  },
  selectors: {
    selectFullOffer: (state) => state.offer,
    selectNearPlaces: (state) => state.nearPlaces,
    selectReviews: (state) => state.reviews,
    selectIsOfferError: (state) => state.isOfferError,
    selectIsFormDisabled: (state) => state.isFormDisabled,
    selectPostReviewRequestStatus: (state) => state.postReviewRequestStatus,
  }
});

export const offerFullActions = offerFullSlice.actions;
export const offerFullSElectors = offerFullSlice.selectors;
export default offerFullSlice;

