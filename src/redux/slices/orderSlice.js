import {
  addItem,
  addOrder,
  getOrder,
  getGuestsOrder,
  removeItem,
  removeOrder,
  updateOrder,
} from 'redux/operations';
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
    total: 0,
    status: 'pending',
    guests: [],
  },
  currentGuestId: '',
  currentGuestName: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    leaveOrder(state, { payload }) {
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
      state.currentGuestName = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload.orderDetails;
        state.currentGuestId = payload.guestId;
        state.currentGuestName = '';
      })
      .addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload;
      })
      .addCase(addItem.fulfilled, (state, { payload }) => {
        state.orderDetails = payload;
      })
      .addCase(removeItem.fulfilled, (state, { payload }) => {
        state.orderDetails = payload;
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload;
      })
      .addCase(getGuestsOrder.fulfilled, (state, { payload }) => {
        state.orderDetails = payload.result;
        state.currentGuestId = payload.guestId;
        state.currentGuestName = payload.guestName;
      })
      .addCase(getGuestsOrder.rejected, (state, { payload }) => {
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
        state.currentGuestName = '';
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        if (payload === 404) {
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
          state.currentGuestName = '';
        }
      })
      .addCase(updateOrder.rejected, (state, { payload }) => {
        if (payload === 404) {
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
          state.currentGuestName = '';
        }
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
        state.currentGuestName = '';
      })
      .addCase(removeOrder.rejected, (state, { payload }) => {
        if (payload === 404) {
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
          state.currentGuestName = '';
        }
      });
  },
});

const persistConfig = {
  key: 'orders',
  storage,
};

export const { leaveOrder } = orderSlice.actions;

export const orderReducer = persistReducer(persistConfig, orderSlice.reducer);
