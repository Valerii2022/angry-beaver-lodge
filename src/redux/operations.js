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

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order, thunkAPI) => {
    try {
      const { data } = await axios.post('/orders', order);
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
