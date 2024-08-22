import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://angry-beaver-oakes-be.vercel.app/api';

export const getProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/products');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getGallery = createAsyncThunk(
  'images/allImages',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/gallery');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/setContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const addSubscribe = createAsyncThunk(
  'subscribe/addSubscribe',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/subscribe', userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getGuestsOrder = createAsyncThunk(
  'orders/getGuestOrder',
  async ({ orderId, name }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/orders/guests/${orderId}`, name);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getOrder = createAsyncThunk(
  'orders/getOrder',
  async ({ orderId }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/orders/${orderId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order, thunkAPI) => {
    const newOrder = {
      ...order,
      items: [],
      guests: [],
      status: 'pending',
      limitPerGuest: 'none',
      total: '0',
    };
    try {
      const { data } = await axios.post('/orders', newOrder);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ orderId, order }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/orders/${orderId}`, order);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const addItem = createAsyncThunk(
  'orders/addItem',
  async ({ orderId, order }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/orders/items/${orderId}`, order);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const removeItem = createAsyncThunk(
  'orders/removeItem',
  async ({ orderId, order }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/orders/remove/${orderId}`, order);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const removeOrder = createAsyncThunk(
  'orders/removeOrder',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/orders/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
