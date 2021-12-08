import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionAddItemToCart, actionReload, actionReloadCount, actionUpCount } from "../store/action-creators-types/actionCreators"
import { store } from "../store/store"
import CartList from "./CartList"



const BookItem = ({book}) => {
  const cartItems = useSelector(state => state.cartRed.cartItems)
  const dispatch = useDispatch()
  

  const addBookInCartItems = (product) => {
    
    let alreadyInCart = false
    for (let item of cartItems) {
      if (item.title === product.title) {
        item.count++
        dispatch(actionReloadCount())
        alreadyInCart = true
      } }
      if (!alreadyInCart) {
        dispatch(actionAddItemToCart(product))
      }
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cartRed.cartItems))
  }

  return (
        <a onClick={() => console.log('item')} href={"#"+ book._id}>
            <div>
                <img className="book__cover" src={book.image} alt={book.title}/>
            </div>
            <div className="book__info">
              <h2 className="book__title">{book.title}</h2>
              <div div className="book__price-wrapper">
                <div className="book__price" >{book.price} р.</div>
                <button 
                        onClick={(e) => {addBookInCartItems(book)
                        e.stopPropagation()}}      
                        className="book__button button">В корзину</button>
              </div>
            </div>
          </a>
  )
}

export default BookItem