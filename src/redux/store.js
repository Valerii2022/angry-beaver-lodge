import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

const images = [
  {
    id: 'item1',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639918375396+456665.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item2',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639920836483+456666.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item3',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639923236690+456667.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item4',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639924986824+456668.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item5',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639927737059+456669.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item6',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639929948554+456670.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item7',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639931698718+456671.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item8',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639933448829+456672.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item9',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639935566439+456673.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item10',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639935566439+456673.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item11',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568639938166438+456674.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item12',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568640204386751+456676.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item13',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568640206336736+456677.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item14',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568640208336833+456678.png?auto=compress,format&fit=max&w=1024&h=800',
  },
  {
    id: 'item15',
    backgroundImage:
      'https://menufyproduction.imgix.net/637568640210798370+456679.png?auto=compress,format&fit=max&w=1024&h=800',
  },
];
const products = [
  { id: 1, price: 8, title: 'bear' },
  { id: 2, price: 60, title: 'stake' },
  { id: 3, price: 50, title: 'pasta' },
  { id: 4, price: 30, title: 'tacos' },
  { id: 5, price: 25, title: 'burger' },
  { id: 6, price: 5, title: 'sandwich' },
  { id: 7, price: 25, title: 'cheeseburger' },
  { id: 8, price: 30, title: 'hamburger' },
  { id: 9, price: 150, title: 'fish' },
  { id: 10, price: 10, title: 'popcorn' },
];

const imagesReducer = (state = images, action) => {
  switch (action.type) {
    case 'images/get':
      console.log(state, 'type:', action.type);
      return state;

    default:
      return state;
  }
};

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'products/get':
      console.log(state, 'type:', action.type);
      return state;
    default:
      return state;
  }
};

const cartReduser = (state = [], action) => {
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

const reducer = combineReducers({
  images: imagesReducer,
  products: productsReducer,
  cart: cartReduser,
});

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
