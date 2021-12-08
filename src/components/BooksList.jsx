import BookItem from "./BookItem"
import Fade from "react-reveal/Fade"

const BookList = ({books}) => {
  
  return (
    <div>
      <Fade left cascade >
        <ul className="books__wrapper">
          {books.map(book =>  
            <li className="book__item"> <BookItem  book={book}/> </li> )} 
        </ul>
      </Fade>
    </div>
  )
}

export default BookList