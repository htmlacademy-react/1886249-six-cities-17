import { AuthorisationStatus } from '@/libs/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './sliceNames';
import { checkAuthorisation } from '@/thunk/authorisation';

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
    selectAuthorisationStatus: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthorisation.fulfilled, (state, action) => {
        if (action.payload === 200) {
          state.status = AuthorisationStatus.Auth;
        }
        if (action.payload === 401) {
          state.status = AuthorisationStatus.NoAuth;
        }
      });
  },
});

export const authorisationAction = authorisationSlice.actions;
export const authorisationSelectors = authorisationSlice.selectors;

export default authorisationSlice;
