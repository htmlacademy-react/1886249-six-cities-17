import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { OFFERS_SLICE_NAME } from './sliceName';
import { AuthorisationStatus, Cities, SortItem } from '@/libs/const';
import { OfferCardPrew, RequestStatus } from '@/libs/types/types';
import { fetchOffers } from '@/thunk/offers';


export type OffersState = {
     activeCity: Cities;
    offers: OfferCardPrew[];
    currentSort: SortItem;
    authorisationStatus: AuthorisationStatus;
    requestStatus : RequestStatus;
    loadingStatus: boolean;
    loadingError: unknown | Error | null ;
}

const initialState: OffersState = {
  activeCity: Cities.PARIS,
  offers: [],
  currentSort: SortItem.Popular,
  authorisationStatus: AuthorisationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
  loadingStatus: false,
  loadingError: null,
};

const offersSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<OfferCardPrew[]>) => {
      state.offers = action.payload;
    },
    setActiveCity: (state, action: PayloadAction<Cities>) => {
      state.activeCity = action.payload;
    },
    setCurrentSort: (state, action: PayloadAction<SortItem>) => {
      state.currentSort = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.loadingStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
        state.loadingStatus = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.requestStatus = RequestStatus.Success;
        state.loadingStatus = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.requestStatus = RequestStatus.Failed;
        state.loadingError = action.payload;
      });
  },
  selectors: {
    selectActiveCity: (state) => state.activeCity,
    selectCurrentSort: (state) => state.currentSort,
    selectOffers: (state) => state.offers,
    selectAuthorisationStatus: (state) => state.authorisationStatus,
    selectLoadingStatus: (state) => state.loadingStatus
  }
});


export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;

export default offersSlice;
