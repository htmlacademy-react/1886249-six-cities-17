import { OfferCardPrew } from '@/libs/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FAVOURITES_SLICE_NAME } from './sliceNames';
import { changeFavouriteStatus, fetchFavourits } from '@/thunk/favourites';
import { toast } from 'react-toastify';
import { RequestStatus } from '@/libs/const';

type FavouriteInitialState = {
  favouritesCards: OfferCardPrew[];
  fetchFavouritsStatus: RequestStatus;
}

const initialState: FavouriteInitialState = {
  favouritesCards: [],
  fetchFavouritsStatus: RequestStatus.Idle,
};

const favouriteSlice = createSlice({
  name: FAVOURITES_SLICE_NAME,
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<OfferCardPrew[]>) => {
      state.favouritesCards = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavourits.pending, (state) => {
        state.fetchFavouritsStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavourits.fulfilled, (state, action) => {
        state.favouritesCards = action.payload.data;
      })
      .addCase(fetchFavourits.rejected, (state) => {
        state.fetchFavouritsStatus = RequestStatus.Failed;
        toast.warn('Error while loading Favourites, try again');
      })
      .addCase(changeFavouriteStatus.fulfilled, (state, {payload}) => {
        if (payload.isFavorite) {
          state.favouritesCards.push(payload);
        } else {
          state.favouritesCards = state.favouritesCards.filter((offer) => offer.id !== payload.id);
        }
      });
  },
  selectors: {
    selectFavourites: (state) => state.favouritesCards,
    selectFavouritesNumber: (state) => state.favouritesCards.length,
  },
});

export const favouritesActions = favouriteSlice.actions;
export const favouritesSelectors = favouriteSlice.selectors;

export default favouriteSlice;
