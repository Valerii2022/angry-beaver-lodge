import { addOrder, getOrder, removeOrder, updateOrder } from 'redux/operations';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    order: {
      id: '',
      deliveryAddress: 'none',
      orderType: '',
      items: [],
      limitPerGuest: 'none',
      total: '0',
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.order = payload;
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.order = payload;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.order = payload;
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        state.order = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
        };
      })
      .addCase(removeOrder.fulfilled, (state, { payload }) => {
        state.order = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
        };
      });
  },
});

const persistConfig = {
  key: 'orders',
  storage,
};

export const orderReducer = persistReducer(persistConfig, orderSlice.reducer);
