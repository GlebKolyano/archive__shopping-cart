import axios from 'axios';
import React, { useEffect } from 'react';
import "./styles/app.css"


function App() {
  useEffect(() => {
    fetchBooks()
  }, [])
  async function fetchBooks() {
    const responce = await axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0771595158')
    console.log(responce.data)
  }
  return (
    <div className="app-wrapper">
      <header className="header"><a href="/">Shopping cart project</a></header>
      <main className="main">main block</main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
