import { useEffect, useState } from "react"
import data from "../data.json"
import BookItem from "./BookItem"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const BookList = ({books}) => {

  
  return (
      <ul className="books__wrapper">
        <TransitionGroup component={null}>
        {books.map(book => 
          <CSSTransition
              key={book._id}
              timeout={500}
              classNames="book"
            >
            <BookItem  book={book}/>
          </CSSTransition>
         )}
        </TransitionGroup>
      </ul>
  )
}

export default BookList