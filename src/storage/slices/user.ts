import { createSlice } from '@reduxjs/toolkit';
import { USER_SLICE_NAME } from './sliceNames';
import { AuthorisationStatus } from '@/libs/const';


const initialState = {
  status: AuthorisationStatus.Unknown,
  userData: {} //in process...
};

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  selectors: {},
});

export default userSlice;
