import { FULL_OFFER_SLICE_NAME } from '@/storage/slices/sliceNames';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getOffer = createAsyncThunk(`${FULL_OFFER_SLICE_NAME}/getFullOffer`, async ())
