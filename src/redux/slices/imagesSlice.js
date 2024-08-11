import { createSlice } from '@reduxjs/toolkit';
import { getGallery } from 'redux/operations';

const imagesSlice = createSlice({
  name: 'images',
  initialState: { images: [] },
  extraReducers: builder => {
    builder
      .addCase(getGallery.fulfilled, (state, { payload }) => {
        state.images = payload;
      })
      .addCase(getGallery.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export const imagesReducer = imagesSlice.reducer;
