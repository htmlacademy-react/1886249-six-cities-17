import { createAppAsyncThunk } from '@/hooks';
import { APIRouts } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { api } from '@/storage';
import { offerFullActions } from '@/storage/slices/fullOffer';
import { offersActions } from '@/storage/slices/offers';
import { FAVOURITES_SLICE_NAME } from '@/storage/slices/sliceNames';

export const fetchFavourits = createAppAsyncThunk(`${FAVOURITES_SLICE_NAME}/fetch`, async (_, thunkApi) => {
  try {
    const result = await api.get<OfferCardPrew[]>(APIRouts.Favourite);
    return result.data;
  } catch (error){
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
});

export const changeFavouriteStatus = createAppAsyncThunk<OfferCardPrew, {id: string; favouriteStatus: number}>(`${FAVOURITES_SLICE_NAME}/changeFavouriteStatus`, async ({id,favouriteStatus}, {dispatch, rejectWithValue}) => {

  try {
    const result = await api.post<OfferCardPrew>(`${APIRouts.Favourite}/${id}/${favouriteStatus}`);

    dispatch(offerFullActions.updateFavouriteOffer(result.data.isFavorite));
    dispatch(offersActions.updateOffer(result.data));

    return result.data ;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error occurred');
  }
});


