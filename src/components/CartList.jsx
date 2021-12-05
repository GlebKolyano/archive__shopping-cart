import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const CartList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartRed.cartItems)

  return (
    <div className="main__cart">
      <div>В корзине {cartItems.length} товаров</div>
      <div className="cart__wrapper">
        <TransitionGroup component={null}>
          {cartItems.map(item =>
            <CSSTransition
              key={item._id + 1}
              timeout={500}
              classNames="cartItem"
            >
               <CartItem item={item} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div> 
    </div>
  )
}

export default CartList