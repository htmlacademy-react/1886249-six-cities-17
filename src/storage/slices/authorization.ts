import { AuthorisationStatus } from '@/libs/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './sliceNames';

export type AuthorisationStatusState = {
  status: AuthorisationStatus;
}

const initialState: AuthorisationStatusState = {
  status: AuthorisationStatus.Unknown,
};

const authorisationSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setAuthorisationStatus: (state, action: PayloadAction<AuthorisationStatus>) => {
      state.status = action.payload;
    }
  },
  selectors: {
    getAuthorisationStatus: (state) => state.status,
  }
});

export const authorisationAction = authorisationSlice.actions;
export const authorisationSelectors = authorisationSlice.selectors;
