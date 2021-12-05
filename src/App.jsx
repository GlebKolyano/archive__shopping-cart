import axios from 'axios';
import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import BookList from './components/BooksList';
import Filter from './components/Filter';
import "./styles/app.css"
import data from "./data.json"
import FilterClass from './components/utils/SortedAndFilter';

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {setBooks(data.products)}, [])
  const [filter, setFilter] = useState({sort: {price: '', cover: ''}, query: ''})
  
  const sortedBooksPrice = useMemo(() => {
    return FilterClass.getSortedPrice(books, filter.sort.price)
  }, [filter.sort.price, books])

  const sortedBooksCover = useMemo(() => {
    return FilterClass.getSortedCover(sortedBooksPrice, filter.sort.cover)
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
