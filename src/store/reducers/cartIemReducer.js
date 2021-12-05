import { ADD_TO_CART, DELETE_FROM_CART } from "../action-creators-types/actionTypes";

const defaultState = {
  cartItems: []
}

export const cartIemReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, cardItems: [...state.cartItems, action.payload]}
    case DELETE_FROM_CART: 
      return {...state, cardItems: [...state.cartItems].filter(el => el._id != action.payload._id)}    
    default:
      return state;
  }
}