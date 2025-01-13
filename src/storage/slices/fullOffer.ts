import { createSlice } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { OfferCardPrew, OfferFull, Review } from '@/libs/types/types';


type OfferInitialState = {
  offer: OfferFull | null,
  reviews: Review[],
  nearPlaces: OfferCardPrew[],
}

const initialState: OfferInitialState = {
  offer: null,
  reviews: [],
  nearPlaces: []
};


const offer = createSlice({
  name: FULL_OFFER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getOffer.fulfilled, (state, action) => {

    }),
},
  selectors: {
  }
})
