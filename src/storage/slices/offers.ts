import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OFFERS_SLICE_NAME } from './sliceName';
import { Cities, SortItem } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { offers } from '@/libs/mocks/offers';

export type OffersState = {
     activeCity: Cities;
    offers: OfferCardPrew[];
    currentSort: SortItem;
}

const initialState: OffersState = {
  activeCity: Cities.PARIS,
  offers: offers,
  currentSort: SortItem.Popular,
};

const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<OfferCardPrew[]>) => {
      state.offers = action.payload;
    },
    changeActiveCity: (state, action: PayloadAction<Cities>) => {
      state.activeCity = action.payload;
    },
    changeCurrentSort: (state, action: PayloadAction<SortItem>) => {
      state.currentSort = action.payload;
    }
  },
  selectors: {
    selectActiveCity: (state) => state.activeCity,
    selectCurrentSort: (state) => state.currentSort,
    selectOffers: (state) => state.offers,
  }
});


export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;

export default offersSlice;
