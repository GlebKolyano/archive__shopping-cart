import { useEffect, useState } from "react"
import data from "../data.json"
import BookItem from "./BookItem"

const BookList = ({books}) => {

  
  return (
      <ul className="books__wrapper">
        {books.map(book => <BookItem key={book._id} book={book}/>
         )}
      </ul>
  )
}

export default BookList