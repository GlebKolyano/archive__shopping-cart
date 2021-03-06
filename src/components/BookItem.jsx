


const BookItem = ({book, openModal, addToCart}) => {

  
  

  
  return (
        <a onClick={() => openModal(book)} href={"#"+ book._id}>
            <div>
                <img className="book__cover" src={book.image} alt={book.title}/>
            </div>
            <div className="book__info">
              <h2 className="book__title">{book.title}</h2>
              <div className="book__price-wrapper">
                <div className="book__price" >{book.price} р.</div>
                <button 
                  onClick={(e) => {
                    addToCart(book)
                    e.stopPropagation()}}      
                  className="book__button button">В корзину
                </button>
              </div>
            </div>
          </a>
  )
}

export default BookItem