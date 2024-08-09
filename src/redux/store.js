import { configureStore } from '@reduxjs/toolkit';
import { cartReduser, imagesReducer, productsReducer } from './reducers';

export const allImages = value => {
  return { type: 'images/get', payload: value };
};

export const allProducts = value => {
  return { type: 'products/get', payload: value };
};

export const addToCart = value => {
  return { type: 'cart/add', payload: value };
};

export const removeFromCart = value => {
  return { type: 'cart/remove', payload: value };
};

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    products: productsReducer,
    cart: cartReduser,
  },
});
