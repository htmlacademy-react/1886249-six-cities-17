import { configureStore } from '@reduxjs/toolkit';
import offersSlice from './slices/offers';
import { createAPI } from '@/services/api';
import authorisationSlice from './slices/authorization';
import userSlice from './slices/user';
import offerFullSlice from './slices/fullOffer';

export const api = createAPI();

const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [authorisationSlice.name]: authorisationSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [offerFullSlice.name]: offerFullSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
