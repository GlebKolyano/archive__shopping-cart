import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { cartIemReducer } from "./cartIemReducer";



export const rootReducer = combineReducers({
  booksRed: booksReducer, 
  cartRed: cartIemReducer
})