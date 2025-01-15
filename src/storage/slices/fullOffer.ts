import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, RequestStatus, Review } from '@/libs/types/types';
import { getOffer } from '@/thunk/fullOffer';


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
        console.log(state.offer); // есть оффер
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(getOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
  selectors: {
    selectFullOffer: (state) => state.offer,
  }
});

export const offerFullActions = offerFullSlice.actions;
export const offerFullSElectors = offerFullSlice.selectors;
export default offerFullSlice;

