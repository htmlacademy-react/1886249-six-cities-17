import { Cities } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import {createReducer} from '@reduxjs/toolkit';
import { changeActiveCity, loadOffers } from './action';

const initialState = {
  activeCity: Cities.PARIS,
  offers: [] as OfferCardPrew[],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    });
});
