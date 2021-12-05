import { GET_BOOKS } from "./actionTypes";

export const actionGetBooks = (books) => ({type: GET_BOOKS, payload: books})
export const actionDeleteBooks = () => ({type: GET_BOOKS}) 