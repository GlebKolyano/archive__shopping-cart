import axios from 'axios';
import React, { useEffect } from 'react';
import "./styles/app.css"


function App() {
  
  
  return (
    <div className="app-wrapper">
      <header className="header"><a href="/">Books for everyone</a></header>
      <main className="main">
        <div className="main__wrapper">
          <div className="main__content">content</div>
          <div className="main__cart">cart</div>
        </div>

      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
