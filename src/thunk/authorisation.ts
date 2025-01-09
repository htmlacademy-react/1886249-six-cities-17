
import { APIRouts } from '@/libs/const';
import { api } from '@/storage';
import { AUTH_SLICE_NAME } from '@/storage/slices/sliceNames';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkAuthorisation = createAsyncThunk(`${AUTH_SLICE_NAME}/checkAuthorisation`, async (_, thunkApi) => {
  try{
    const {status} = await api.get(APIRouts.Authorisation);
    return status;
  } catch (error) {
    return thunkApi.rejectWithValue;
  }
});
