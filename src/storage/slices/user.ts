import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_SLICE_NAME } from './sliceNames';
import { User } from '@/libs/types/types';
import { login, logout } from '@/thunk/authorisation';

type UserInitialState = {
  userData: User | null;
}

const initialState: UserInitialState = {
  userData: null,
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    }},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.userData = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userData = null;
      });
  },
  selectors: {
    selectUser: (state) => state.userData,
  },
});

export const userAction = userSlice.actions;
export const userSelector = userSlice.selectors;

export default userSlice;
