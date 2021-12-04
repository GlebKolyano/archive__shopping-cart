import data from "../data.json"

const BookList = () => {
  const products = data.products
  return (
      <ul className="books__wrapper">{products.map(book => 
        <li key={book._id} className="book__item"><a href={"#"+ book._id}>
            <div>{book.title}</div>
            <div>
                <img className="book__cover" src={book.image} alt={book.title}></img>
            </div>
            <div className="book__price">
              <div>{book.price}</div>
              <button>Add To Cart</button>
            </div>
        </a></li>  )}
      </ul>
  )
}

export default BookList