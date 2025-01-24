import { OfferCardPrew } from '@/libs/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { FAVOURITES_SLICE_NAME } from './sliceNames';
import { changeFavouriteStatus, fetchFavourits } from '@/thunk/favourites';
import { toast } from 'react-toastify';
import { RequestStatus } from '@/libs/const';

type FavouriteInitialState = {
  favouritesCards: OfferCardPrew[];
  favouritesNumber: number;
  fetchFavouritsStatus: RequestStatus;
}

const initialState: FavouriteInitialState = {
  favouritesCards: [],
  favouritesNumber: 0,
  fetchFavouritsStatus: RequestStatus.Idle,
};

const favouriteSlice = createSlice({
  name: FAVOURITES_SLICE_NAME,
  initialState,
  reducers: {
    setFavouritesNumber: ()=>{}
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavourits.pending, (state) => {
        state.fetchFavouritsStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavourits.fulfilled, (state, action) => {
        state.favouritesCards = action.payload.data;
        state.favouritesNumber = action.payload.data.length;
      })
      .addCase(fetchFavourits.rejected, (state) => {
        state.fetchFavouritsStatus = RequestStatus.Failed;
        toast.warn('Error while loading Favourites, try again');
      })
      .addCase(changeFavouriteStatus.fulfilled, (state) => {
        state.fetchFavouritsStatus = RequestStatus.Success;
      })
      .addCase(changeFavouriteStatus.rejected, (_, action) => {
        if (action.payload.status !== 201) {
          toast.warn('Error while adding to Favourites, try again');
        }
      }
      );
  },
  selectors: {
    selectFavourites: (state) => state.favouritesCards,
    selectFavouritesNumber: (state) => state.favouritesNumber,
  },
});

export const favouritesActions = favouriteSlice.actions;
export const favouritesSelectors = favouriteSlice.selectors;

export default favouriteSlice;
