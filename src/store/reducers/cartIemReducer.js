import { useSelector } from "react-redux";

import { ADD_TO_CART, DELETE_FROM_CART, RELOAD_COUNT, UP_COUNT } from "../action-creators-types/actionTypes";

export const defaultState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
}



export const cartIemReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cartItems: [...state.cartItems, action.payload]}
    case DELETE_FROM_CART: 
      return {...state, cartItems: action.payload}    
    case RELOAD_COUNT:
      return {...state, cartItems: [...state.cartItems]}
    default:
      return state;
  }
}