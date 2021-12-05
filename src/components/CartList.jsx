import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { countProducts } from "./utils/countProducts";


const CartList = () => {
  const cartItems = useSelector(state => state.cartRed.cartItems)
  let count = countProducts(cartItems)
  return (
    <div className="main__cart">
      <div>В корзине {count} товаров</div>
      <div className="cart__wrapper">
        <TransitionGroup component={null}>
          {cartItems.map(item =>
             <CSSTransition
              key={item._id}
              timeout={500}
              classNames="cartItemTransition"
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