import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice';
import { imagesReducer } from './slices/imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    products: productsReducer,
  },
});
