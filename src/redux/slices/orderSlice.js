import { addOrder, getOrder, removeOrder, updateOrder } from 'redux/operations';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  orderDetails: {
    id: '',
    deliveryAddress: 'none',
    orderType: '',
    items: [],
    limitPerGuest: 'none',
    total: '0',
    status: 'pending',
    guests: [],
  },
  currentGuestId: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload.orderDetails;
        state.currentGuestId = payload.guestId;
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload.orderDetails;
        state.currentGuestId = payload.guestId;
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        state.orderDetails = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
          status: 'pending',
          guests: [],
        };
        state.currentGuestId = '';
      })
      .addCase(updateOrder.rejected, (state, { payload }) => {
        state.orderDetails = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
          status: 'pending',
          guests: [],
        };
        state.currentGuestId = '';
      })
      .addCase(removeOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
          status: 'pending',
          guests: [],
        };
        state.currentGuestId = '';
      })
      .addCase(removeOrder.rejected, (state, { payload }) => {
        state.orderDetails = {
          id: '',
          deliveryAddress: 'none',
          orderType: '',
          items: [],
          limitPerGuest: 'none',
          total: '0',
          status: 'pending',
          guests: [],
        };
        state.currentGuestId = '';
      });
  },
});

const persistConfig = {
  key: 'orders',
  storage,
};

export const orderReducer = persistReducer(persistConfig, orderSlice.reducer);
