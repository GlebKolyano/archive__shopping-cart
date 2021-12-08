import axios from 'axios';
import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import BookList from './components/BooksList';
import Filter from './components/Filter';
import "./styles/app.css"
import data from "./data.json"
import FilterClass from './components/utils/SortedAndFilter';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetBooks } from './store/action-creators-types/actionCreators';
import CartList from './components/CartList';

function App() {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState({sort: {price: '', cover: ''}, query: ''})
  useEffect(() => {dispatch(actionGetBooks(data.products))}, [])
  const books = useSelector(state => state.booksRed.books)

  // useMemo. Filter books
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
      <header className="header">
        <a href="/"><img src="/images/books for everyone_free-file (1).png" alt="" /></a>
        <button onClick={() => localStorage.clear()}>очисить</button>
      </header>
      <main className="main">
        <div className="main__wrapper">
          <div className="main__content">
            <Filter books={sortedAndFilterBooks} filter={filter} setFilter={setFilter} />
            <BookList books={sortedAndFilterBooks}/>
          </div>
          <CartList />
        </div>
      </main>
      <footer className="footer">Все права защищены.</footer>
    </div>
  );
}

export default App;
