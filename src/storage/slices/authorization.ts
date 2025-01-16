import { AuthorisationStatus, RequestStatus } from '@/libs/const';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './sliceNames';
import { checkAuthorisation, login, logout } from '@/thunk/authorisation';

export type AuthorisationStatusState = {
  status: AuthorisationStatus;
  requestStatus: RequestStatus;
}

const initialState: AuthorisationStatusState = {
  status: AuthorisationStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

const authorisationSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setAuthorisationStatus: (state, action: PayloadAction<AuthorisationStatus>) => {
      state.status = action.payload;
    },
  },
  selectors: {
    selectAuthorisationStatus: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthorisation.fulfilled, (state) => {
        state.status = AuthorisationStatus.Auth;
      })
      .addCase(checkAuthorisation.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(checkAuthorisation.rejected, (state,action) => {
        if (action.payload === 401) {
          state.status = AuthorisationStatus.NoAuth;
        }
      })
      .addCase(login.fulfilled, (state) => {
        state.status = AuthorisationStatus.Auth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = AuthorisationStatus.NoAuth;
      });
  },
});

export const authorisationAction = authorisationSlice.actions;
export const authorisationSelectors = authorisationSlice.selectors;

export default authorisationSlice;
