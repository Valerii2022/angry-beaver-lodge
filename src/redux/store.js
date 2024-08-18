import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice';
import { imagesReducer } from './slices/imagesSlice';
import { orderReducer } from './slices/orderSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    products: productsReducer,
    orders: orderReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
