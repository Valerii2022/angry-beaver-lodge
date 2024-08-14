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
  'contacts',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
