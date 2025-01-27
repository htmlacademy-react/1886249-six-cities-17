import { createAppAsyncThunk } from '@/hooks';
import { APIRouts } from '@/libs/const';
import { OfferCardPrew, OfferFull, Review, ReviewToSend } from '@/libs/types/types';
import { api } from '@/storage';
import { FULL_OFFER_SLICE_NAME } from '@/storage/slices/sliceNames';


export const getOffer = createAppAsyncThunk(`${FULL_OFFER_SLICE_NAME}/getFullOffer`, async (id: string, thunkApi) => {
  try {
    const result = await api.get<OfferFull>(`${APIRouts.Offers}/${id}`);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const getNearPlaces = createAppAsyncThunk(`${FULL_OFFER_SLICE_NAME}/getNearPlaces`, async (id: string, thunkApi) => {
  try {
    const result = await api.get<OfferCardPrew[]>(`${APIRouts.Offers}/${id}/nearby`);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const getReviews = createAppAsyncThunk(`${FULL_OFFER_SLICE_NAME}/getReviews`, async (id: string, thunkApi) => {
  try {
    const result = await api.get<Review[]>(`${APIRouts.Reviews}/${id}`);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const sendReview = createAppAsyncThunk<Review, {id: string; review: ReviewToSend}>(`${FULL_OFFER_SLICE_NAME}/sendReview`, async ({id, review}, thunkApi) => {
  try {
    const result = await api.post<Review>(`${APIRouts.Reviews}/${id}`, review);
    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    } return thunkApi.rejectWithValue('Unknown error occurred');
  }
});
