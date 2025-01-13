
import { APIRouts } from '@/libs/const';
import { saveToken } from '@/services/token';
import { api } from '@/storage';
import { AUTH_SLICE_NAME } from '@/storage/slices/sliceNames';
import { createAsyncThunk } from '@reduxjs/toolkit';

const path = `${AUTH_SLICE_NAME}${APIRouts.Authorisation}`;


export const checkAuthorisation = createAsyncThunk(path, async (_, thunkApi) => {
  try {
    const {status} = await api.get(APIRouts.Authorisation);
    return status;
  } catch (error) {
    return thunkApi.rejectWithValue;
  }
});

export const login = createAsyncThunk(path, async (loginData: {email: string; password: string}, thunkApi) => {
  try {
    const {data} = await api.post(APIRouts.Authorisation, loginData, { headers: {
      'Content-Type': 'application/json',}});
    saveToken(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
