import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653a0e10e3b530c8d9e91220.mockapi.io';

export const fetchImages = createAsyncThunk('images/fetchAll', async data => {
  const response = await axios.get('/images');
  return response.data;
});
