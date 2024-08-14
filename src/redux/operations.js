import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://angry-beaver-oakes-be.vercel.app';

export const getProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/products');
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
      const { data } = await axios.get('/api/gallery');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
