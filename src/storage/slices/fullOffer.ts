import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, RequestStatus, Review } from '@/libs/types/types';
import { getNearPlaces, getOffer } from '@/thunk/fullOffer';


type OfferInitialState = {
  offer: OfferFull | null;
  reviews: Review[];
  nearPlaces: OfferCardPrew[];
  requestStatus: RequestStatus;
}

const initialState: OfferInitialState = {
  offer: null,
  reviews: [],
  nearPlaces: [],
  requestStatus: RequestStatus.Idle,
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
      });
  },
  selectors: {
    selectFullOffer: (state) => state.offer,
    selectRequestStatus: (state) => state.requestStatus,
    selectNearPlaces: (state) => state.nearPlaces,
  }
});

export const offerFullActions = offerFullSlice.actions;
export const offerFullSElectors = offerFullSlice.selectors;
export default offerFullSlice;

