import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"


const CartList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartRed.cartItems)

  return (
    <div className="main__cart">
      <div>В корзине {cartItems.length} товаров</div>
      <div className="cart__wrapper">
         {cartItems.map(item =>
        <CartItem item={item} />
        )}
      </div> 
    </div>
  )
}

export default CartList