import axios from 'axios';
import React, { useEffect } from 'react';
import BookList from './components/BooksList';
import "./styles/app.css"


function App() {
  

  return (
    <div className="app-wrapper">
      <header className="header"><a href="/">Книги для каждого</a></header>
      <main className="main">
        <div className="main__wrapper">
          <div className="main__content">
            <BookList />
          </div>
          <div className="main__cart">В корзине 0 товаров</div>
        </div>
      </main>
      <footer className="footer">Все права защищены.</footer>
    </div>
  );
}

export default App;
