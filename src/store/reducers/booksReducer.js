import { DELETE_BOOKS, GET_BOOKS } from "../action-creators-types/actionTypes"

const defaultState = {
  books: []
}
export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {...state, books: action.payload}
    case DELETE_BOOKS:
      return {...state, books: []}
    default:
      return state
  }
}