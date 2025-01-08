import { configureStore } from '@reduxjs/toolkit';
import offersSlice from './slices/offers';
import { createAPI } from '@/services/api';

export const api = createAPI();

const store = configureStore({
  reducer: {
    [offersSlice.name] : offersSlice.reducer
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
