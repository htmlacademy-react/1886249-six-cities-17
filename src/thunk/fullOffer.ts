import { APIRouts } from '@/libs/const';
import { OfferCardPrew, OfferFull, Review, ReviewToSend } from '@/libs/types/types';
import { api } from '@/storage';
import { FULL_OFFER_SLICE_NAME } from '@/storage/slices/sliceNames';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getOffer = createAsyncThunk<OfferFull, string>(`${FULL_OFFER_SLICE_NAME}/getFullOffer`, async (id, thunkApi) => {
  try {
    const result = await api.get(`${APIRouts.Offers}/${id}`);
    return result.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getNearPlaces = createAsyncThunk<OfferCardPrew[], string>(`${FULL_OFFER_SLICE_NAME}/getNearPlaces`, async (id, thunkApi) => {
  try {
    const result = await api.get(`${APIRouts.Offers}/${id}/nearby`);
    return result.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getReviews = createAsyncThunk<Review[], string>(`${FULL_OFFER_SLICE_NAME}/getReviews`, async (id, thunkApi) => {
  try {
    const result = await api.get(`${APIRouts.Reviews}/${id}`);
    return result.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const sendReview = createAsyncThunk<Review | Error, {id: string; review: ReviewToSend}>(`${FULL_OFFER_SLICE_NAME}/sendReview`, async ({id, review}, thunkApi) => {
  try {
    const result = await api.post(`${APIRouts.Reviews}/${id}`, review);
    return result.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
