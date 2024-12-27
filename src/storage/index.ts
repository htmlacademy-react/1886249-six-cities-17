import { configureStore } from '@reduxjs/toolkit';
import offersSlice from './slices/offers';

const store = configureStore({
  reducer: {
    [offersSlice.name] : offersSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
