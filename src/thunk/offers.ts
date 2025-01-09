import { APIRouts } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { api } from '@/storage';
import { OFFERS_SLICE_NAME } from '@/storage/slices/sliceName';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchOffers = createAsyncThunk(`${OFFERS_SLICE_NAME}/fetchOffers`, async (_,
  thunkAPI
) => {
  try {
    const {data} = await api.get<OfferCardPrew[]>(APIRouts.Offers);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
