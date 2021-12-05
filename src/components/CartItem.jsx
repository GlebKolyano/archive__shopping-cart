


const CartItem = ({item}) => {
  return (
    <div className="cart__item">
      <div >
        <img className="cart__cover" src={item.image} alt="cover-book.jpg"/>
      </div>
      <div className="cart__info">
        <div className="cart__title">{item.title}</div>
        <div className="cart__price">{item.price} р.</div>
        <div className="cart__btns">
          <button className="cart__button button">Заказать</button>
          <button className="cart__button-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
        
      </div>
      
    </div>
  )
}
export default CartItem