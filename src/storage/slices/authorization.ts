import { AuthorisationStatus } from '@/libs/const';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './sliceNames';
import { checkAuthorisation, login, logout } from '@/thunk/authorisation';
import { dropToken } from '@/services/token';

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
        console.log('checkAuthorisation checked');
      })
      .addCase(checkAuthorisation.pending, (_, action) => {

        console.log('checkAuthorisation pending', action);
      })
      .addCase(checkAuthorisation.rejected, (state,action) => {
        if (action.payload === 401) {
          state.status = AuthorisationStatus.NoAuth;
        }
        console.log('checkAuthorisation rejected', action.payload);
      })
      .addCase(login.fulfilled, (state) => {
        state.status = AuthorisationStatus.Auth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = AuthorisationStatus.NoAuth;
        dropToken();
      });
  },
});

export const authorisationAction = authorisationSlice.actions;
export const authorisationSelectors = authorisationSlice.selectors;

export default authorisationSlice;
