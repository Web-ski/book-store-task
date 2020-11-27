import React, { useState, useEffect } from "react";
import './App.css';
import BookBox from './BookBox';
const axios = require('axios');

function App() {
  const [data, setData] = useState(0);
  const url = 'http://localhost:3001/api/Book';

  useEffect(() => {
    axios.get(url)
      .then(response => response.data)
      .then(data => setData(data))
      .catch(error =>
        console.log(error)
      )

  }, [])


  return (
    <div className="App">
      <div className="page__header">
        <h1 className="page__title">Books Storage</h1>
        <button className="basket__button">Koszyk</button>
      </div>
      {(data.data !== undefined && ((data.data).map(item => (<BookBox key={item.id} book={item} />))))}
    </div>
  );
}

export default App;
