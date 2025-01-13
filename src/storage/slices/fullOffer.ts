import { createSlice } from '@reduxjs/toolkit';
import { FULL_OFFER_SLICE_NAME } from './sliceNames';
import { offersFull } from '@/libs/mocks/offers-full';


const initialState = {
  offer: offersFull,
};


const offer = createSlice({
  name: FULL_OFFER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(),
  },
  selectors: {}
})
