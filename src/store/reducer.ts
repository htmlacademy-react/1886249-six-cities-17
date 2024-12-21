import { Cities, SortItem } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import {createReducer} from '@reduxjs/toolkit';
import { changeActiveCity, changeCurrentSort, loadOffers } from './action';

const initialState = {
  activeCity: Cities.PARIS,
  offers: [] as OfferCardPrew[],
  currentSort: SortItem.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
