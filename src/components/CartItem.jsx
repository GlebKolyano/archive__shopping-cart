import { useDispatch, useSelector } from "react-redux"
import { actionDeleteItemFromCart, actionReloadCount } from "../store/action-creators-types/actionCreators"
import { store } from "../store/store"



const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartRed.cartItems)

  const deleteFromCart = (product) => {
    if (product.count > 1) {
      product.count--
      dispatch(actionReloadCount())
    } else { 
      let filterArray = cartItems.filter((el) => el._id !== product._id)
      dispatch(actionDeleteItemFromCart(filterArray)) 
    }
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cartRed.cartItems))
  }

  return (
    <div className="cart__item">
      <div className="cart__visual">
        <img className="cart__cover" src={item.image} alt="cover-book.jpg"/>
      </div>
      <div className="cart__info">
        <div className="cart__title">{item.title}</div>
        <div className="cart__price">{item.price} р.   <span style={{color: "black", fontWeight: "bold"}}>x {item.count}</span></div>
        <button onClick={() => deleteFromCart(item)}                  
                  className="cart__button-delete">
                     <i className="fa fa-trash" aria-hidden="true"></i>
          </button>    
      </div>  
    </div>
  )
}
export default CartItem