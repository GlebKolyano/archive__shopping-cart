import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { countProducts, countTotal } from "./utils/countSomething";
import { useState } from "react";
import { store } from "../store/store";
import { actionReloadCount } from "../store/action-creators-types/actionCreators";


const CartList = () => {
  const [formOrder, setFormOrder] = useState(false)
  const [formObj, setFormObj] = useState({})
  const cartItems = useSelector(state => state.cartRed.cartItems)
  let count = countProducts(cartItems)
  // handlers
  const sendOrder = (e) => {
    e.preventDefault()
    setFormOrder(false)
    localStorage.clear()
  }
  const handleInput = (e) => {setFormObj({...formObj, [e.target.name]: e.target.value})}
  

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
    {cartItems.length > 0 &&
      <div className="cart__order">
        <div>Итого: {countTotal(cartItems)} р.</div>
        <div>
          <button onClick={() => setFormOrder(true)} className="button__order button">Заказать</button>
        </div>
      </div> 
    }
    {formOrder &&
      <div className="form-order-container">
        <form  className="form-order" onSubmit={sendOrder} >
          <input onChange={handleInput} type="text" name="name" placeholder="Имя" required/>
          <input onChange={handleInput} type="tel" name="phone" placeholder="Телефон" required/>
          <input onChange={handleInput} type="email" name="email" placeholder="Email" required/>
          <input onChange={handleInput} type="text" name="address" placeholder="Адрес" required/>
          <button className="button"  type="submit" >Отправить</button>
        </form>
      </div>
   }
    </div>
    
  )
}

export default CartList