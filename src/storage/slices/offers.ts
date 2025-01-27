import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { OFFERS_SLICE_NAME } from './sliceNames';
import { Cities, RequestStatus, SortItem } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { fetchOffers } from '@/thunk/offers';
import { toast } from 'react-toastify';


export type OffersState = {
  activeCity: Cities;
  offers: OfferCardPrew[];
  currentSort: SortItem;
  requestStatus : RequestStatus;
  loadingError: Error | null ;
}

const initialState: OffersState = {
  activeCity: Cities.PARIS,
  offers: [],
  currentSort: SortItem.Popular,
  requestStatus: RequestStatus.Idle,
  loadingError: null,
};

const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<Cities>) => {
      state.activeCity = action.payload;
    },
    setCurrentSort: (state, action: PayloadAction<SortItem>) => {
      state.currentSort = action.payload;
    },
    updateOffers: (state, action: PayloadAction<OfferCardPrew[]>) => {
      state.offers = action.payload;
    },
    updateOffer: (state, action: PayloadAction<OfferCardPrew>) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        if (action.payload) {
          state.offers = action.payload;
        }
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
        toast.warn('Error while loading offers');
      });
  },
  selectors: {
    selectActiveCity: (state) => state.activeCity,
    selectCurrentSort: (state) => state.currentSort,
    selectOffers: (state) => state.offers,
    selectOffersRequestStatus: (state) => state.requestStatus
  }
});


export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;

export default offersSlice;
