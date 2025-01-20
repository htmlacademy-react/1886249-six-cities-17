import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_SLICE_NAME } from './sliceNames';
import { User } from '@/libs/types/types';

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
  selectors: {
    selectUser: (state) => state.userData,
  },
});

export const userAction = userSlice.actions;
export const userSelector = userSlice.selectors;

export default userSlice;
