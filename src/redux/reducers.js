const { images } = require('data/images');
const { products } = require('data/products');

export const imagesReducer = (state = images, action) => {
  switch (action.type) {
    case 'images/get':
      console.log(state, 'type:', action.type);
      return state;

    default:
      return state;
  }
};

export const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'products/get':
      console.log(state, 'type:', action.type);
      return state;
    default:
      return state;
  }
};

export const cartReduser = (state = [], action) => {
  switch (action.type) {
    case 'cart/add':
      state = [action.payload];
      return state;
    case 'cart/remove':
      return state;
    default:
      return state;
  }
};
