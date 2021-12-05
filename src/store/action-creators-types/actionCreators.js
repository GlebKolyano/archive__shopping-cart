import { ADD_TO_CART, GET_BOOKS } from "./actionTypes";

export const actionGetBooks = (books) => ({type: GET_BOOKS, payload: books})
export const actionDeleteBooks = () => ({type: GET_BOOKS}) 

// cart items
export const actionAddItemToCart = (item) => ({type: ADD_TO_CART, payload: item})
export const actionDeleteItemFromCart = (item) => ({type: ADD_TO_CART, payload: item})