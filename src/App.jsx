import axios from 'axios';
import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import BookList from './components/BooksList';
import Filter from './components/Filter';
import "./styles/app.css"
import data from "./data.json"

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {setBooks(data.products)}, [])
  const [filter, setFilter] = useState({sort: {price: '', cover: ''}, query: ''})
  
  const sortedBooksPrice = useMemo(() => {
    if (filter.sort.price === "lowPrice") {    
      return [...books].sort((a, b) => a.price-b.price)
     
    } else if (filter.sort.price === "highPrice") {
      return [...books].sort((a, b) => b.price-a.price)
    } 
      return books
    
  }, [filter.sort.price, books])

  const sortedBooksCover = useMemo(() => {
     if (filter.sort.cover === "hardcover") {    
      return sortedBooksPrice.filter(book => book.cover === "hardcover")
     
    } else if (filter.sort.cover === "papercover") {
      return sortedBooksPrice.filter(book => book.cover === "papercover")
    } 
      return sortedBooksPrice
    
  }, [filter.sort.cover, sortedBooksPrice])

  const sortedAndFilterBooks = useMemo(() => {
  return sortedBooksCover.filter(book => book.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedBooksCover])



  return (
    <div className="app-wrapper">
      <header className="header"><a href="/">Книги для каждого</a></header>
      <main className="main">
        <div className="main__wrapper">
          
          <div className="main__content">
            <Filter books={sortedAndFilterBooks} filter={filter} setFilter={setFilter} />
            <BookList books={sortedAndFilterBooks}/>
          </div>
          <div className="main__cart">В корзине 0 товаров</div>
        </div>
      </main>
      <footer className="footer">Все права защищены.</footer>
    </div>
  );
}

export default App;
