import { createAppAsyncThunk } from '@/hooks';
import { APIRouts } from '@/libs/const';
import { OfferCardPrew } from '@/libs/types/types';
import { api } from '@/storage';
import { offersActions, offersSelectors } from '@/storage/slices/offers';
import { FAVOURITES_SLICE_NAME } from '@/storage/slices/sliceNames';

export const fetchFavourits = createAppAsyncThunk(`${FAVOURITES_SLICE_NAME}/fetch`, async (_, thunkApi) => {
  try {
    const result = await api.get<OfferCardPrew[]>(APIRouts.Favourite);
    return result;
  } catch (error){
    return thunkApi.rejectWithValue(error);
  }
});

export const changeFavouriteStatus = createAppAsyncThunk<OfferCardPrew | number, {id: string; favouriteStatus: number}>(`${FAVOURITES_SLICE_NAME}/changeFavouriteStatus`, async ({id,favouriteStatus}, {getState, dispatch}) => {

  try {
    const result = await api.post<OfferCardPrew>(`${APIRouts.Favourite}/${id}/${favouriteStatus}`);

    const offers = offersSelectors.selectOffers(getState());

    const updatedOffers = offers.map((offer) => offer.id === result.data.id
      ? {...offer, isFavorite: result.data.isFavorite}
      : offer);

    dispatch(offersActions.updateOffers(updatedOffers));
    dispatch(fetchFavourits());

    return result.status;

  } catch (error) {
    return error;
  }
});


