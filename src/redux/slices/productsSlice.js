import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from 'redux/operations';

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  extraReducers: builder => {
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export const productsReducer = productSlice.reducer;
