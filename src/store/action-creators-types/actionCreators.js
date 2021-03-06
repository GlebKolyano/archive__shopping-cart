import { ADD_TO_CART, DELETE_FROM_CART, GET_BOOKS, RELOAD_COUNT, UP_COUNT } from "./actionTypes";

export const actionGetBooks = (books) => ({type: GET_BOOKS, payload: books})
export const actionDeleteBooks = () => ({type: GET_BOOKS}) 

// cart items
export const actionAddItemToCart = (item) => ({type: ADD_TO_CART, payload: item})
export const actionDeleteItemFromCart = (item) => ({type: DELETE_FROM_CART, payload: item})
export const actionReloadCount = () => ({type: RELOAD_COUNT})