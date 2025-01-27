import { State } from '@/libs/types/state';
import type { AppDispatch, RootState } from '@/storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
  dispatch: AppDispatch;
  state: RootState;
}>();
