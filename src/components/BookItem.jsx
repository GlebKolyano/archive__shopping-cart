

const BookItem = ({book}) => {
  return (
        <li className="book__item">
          <a onClick={() => console.log('item')} href={"#"+ book._id}>
            <div>
                <img className="book__cover" src={book.image} alt={book.title}/>
            </div>
            <div className="book__info">
              <h2 className="book__title">{book.title}</h2>
              <div div className="book__price-wrapper">
                <div className="book__price" >{book.price} р.</div>
                <button onClick={(e) => {e.stopPropagation()
                console.log("button")}} className="book__button button">В корзину</button>
              </div>
            </div>
          </a>
        </li> 
  )
}

export default BookItem