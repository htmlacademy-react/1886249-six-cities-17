import { OfferCardPrew } from '@/libs/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { FAVOURITES_SLICE_NAME } from './sliceNames';
import { fetchFavourits } from '@/thunk/favourites';

type FavouriteInitialState = {
  favouritesCards: OfferCardPrew[];
  favouritesNumber: number;
}

const initialState: FavouriteInitialState = {
  favouritesCards: [],
  favouritesNumber: 0
};

const favouriteSlice = createSlice({
  name: FAVOURITES_SLICE_NAME,
  initialState,
  reducers: {
    setFavouritesNumber: ()=>{}
  },
  extraReducers(builder) {
    builder.addCase(fetchFavourits.fulfilled, (state, action) => {
      state.favouritesCards = action.payload.data;
      state.favouritesNumber = action.payload.data.length;
    });
  },
  selectors: {
    selectFavourites: (state) => state.favouritesCards,
    selectFavouritesNumber: (state) => state.favouritesNumber,
  },
});

export const favouritesActions = favouriteSlice.actions;
export const favouritesSelectors = favouriteSlice.selectors;

export default favouriteSlice;
