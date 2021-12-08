import BookItem from "./BookItem"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import Modal from "react-modal"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actionAddItemToCart, actionReloadCount } from "../store/action-creators-types/actionCreators"
import { store } from "../store/store"

const BookList = ({books}) => {
  // add to cart
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
  
  // modal 
  const [modal, setModal] = useState(null)
  const openModal = (product) => {
    setModal(product)
    console.log(modal)
  }
  const closeModal = () => {
    setModal(null)
  }

  return (
    <div>
      <Fade left cascade >
        <ul className="books__wrapper">
          {books.map(book =>  
            <li className="book__item"> <BookItem addToCart={addBookInCartItems} book={book} openModal={openModal}/> </li> )} 
        </ul>
      </Fade>
      {modal && 
      <Modal className="modal-container" isOpen={true} onRequestClose={closeModal}>
        <Zoom> 
        <div>
          <button className="close-modal button" onClick={() => closeModal()}>Назад</button>
          <div className="modal-book">
            <div><img className="modal__image" src={modal.image} alt="" /></div>
            <div className="modal-info">
              <h1 className="modal__title">{modal.title}</h1>
              <h1>Описание</h1>
              <p className="modal__description">{modal.description}</p>
              <button className="modal__button button" onClick={() => {
                closeModal() 
                addBookInCartItems(modal)}}>В корзину</button>
            </div>
          </div>  
          
        </div>
        </Zoom>
      </Modal>
      
      }
    </div>
  )
}

export default BookList