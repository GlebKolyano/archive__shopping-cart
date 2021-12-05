import { useSelector } from "react-redux";

import { ADD_TO_CART, DELETE_FROM_CART, UP_COUNT } from "../action-creators-types/actionTypes";

export const defaultState = {
  cartItems: []
}



export const cartIemReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cartItems: [...state.cartItems, action.payload]}
    case DELETE_FROM_CART: 
      return {...state, cartItems: [...state.cartItems].filter(el => el._id != action.payload._id)}    
    case UP_COUNT:
      return {...state, cartItems: [...state.cartItems]}
    default:
      return state;
  }
}