import { createAppAsyncThunk } from '@/hooks';
import { APIRouts } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { api } from '@/storage';
import { OFFERS_SLICE_NAME } from '@/storage/slices/sliceNames';


export const fetchOffers = createAppAsyncThunk(`${OFFERS_SLICE_NAME}/fetchOffers`, async (_,thunkApi) => {
  try {
    const {data} = await api.get<OfferCardPrew[]>(APIRouts.Offers);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});
