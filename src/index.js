// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

const initialPizzas = [];
const pizzaReducer = ( state = initialPizzas, action ) => {
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
  // pizzas: [{
  //   id: "",
  //   quantity: ""
  // }]
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
        {id: action.payload.id,
        quantity: 1 }
      ]
    }
    return newCart;
  }
  else if(action.type === "REMOVE_PIZZA"){
    let totalPrice = state.totalPrice;
    let updatedCart = {
      totalPrice: Number(totalPrice) - Number(action.payload.price),
      cartItems: [
        ...state.cartItems.filter(id => id !== action.payload.id)
      ]};
    return updatedCart;
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

