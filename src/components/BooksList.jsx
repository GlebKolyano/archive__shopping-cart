import { useEffect, useState } from "react"
import data from "../data.json"

const BookList = ({books}) => {

  
  return (
      <ul className="books__wrapper">{books.map(book => 
        <li key={book._id} className="book__item"><a href={"#"+ book._id}>
            <div>
                <img className="book__cover" src={book.image} alt={book.title}/>
            </div>
            <div className="book__info">
              <h2 className="book__title">{book.title}</h2>
              <div div className="book__price-wrapper">
              <div className="book__price" >{book.price} р.</div>
              <button className="book__button button">В корзину</button>
            </div>
            </div>

        </a></li>  )}
      </ul>
  )
}

export default BookList