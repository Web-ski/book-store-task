import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Basket from './pages/Basket';
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home books={data} />
          </Route>
          <Route path="/koszyk">
            <Basket />
          </Route>
          <Route path="/formularz">
            
          </Route>
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
