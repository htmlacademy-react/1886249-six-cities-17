import { APIRouts } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { api } from '@/storage';
import { FAVOURITES_SLICE_NAME } from '@/storage/slices/sliceNames';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavourits = createAsyncThunk<OfferCardPrew[], undefined>(`${FAVOURITES_SLICE_NAME}/fetch`, async (_, thunkApi) => {
  try {
    const result = await api.get<OfferCardPrew[]>(APIRouts.Favourite);
    return result;
  } catch (error){
    return thunkApi.rejectWithValue(error);
  }
});

export const changeFavouriteStatus = createAsyncThunk<OfferCardPrew, {id: string; favouriteStatus: number}>(`${FAVOURITES_SLICE_NAME}/changeFavouriteStatus`, async ({id,favouriteStatus}, thunkApi) => {
  try {
    const result = await api.post(`${APIRouts.Favourite}/${id}/${favouriteStatus}`);
    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
