// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

const pizzaReducer = ( state = [], action ) => {
  if(action.type === "SET_PIZZAS"){
    let newPizzaList = action.payload;
    return newPizzaList;
  }
  return state;
}

const initialOrder = {
  customer_name: "",
  street_address: "",
  city: "",
  zip: "",
  total: "",
  type: "",
  pizzas: [{
    id: "",
    quantity: ""
  }]
}

const orderReducer = ( state = initialOrder, action ) => {
  if(action.type === "ADD_TO_CART"){
    let newCart = action.payload;
    return newCart;
  }
  return state;
}

const initialCart = {
  totalPrice: 0,
  cartItems: []

}

const cartReducer = ( state = initialCart, action ) => {
  if(action.type === "ADD_PIZZA"){
    let totalPrice = state.totalPrice;
    let newCart = {
      totalPrice: Number(totalPrice) + Number(action.payload.price),
      cartItems: [
        ...state.cartItems,
        action.payload.name
      ]
    }
    return newCart;
  }
  return state;
}


const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    orderReducer,
    cartReducer
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

