import React, { useState } from "react";
import { Link } from "react-router-dom";

import BookBox from './BookBox';

const Home = ({ books }) => {
  const [basket, setBasket] = useState(0);

  return <>
    <div className="page__header">
      <p className="basket__storage">Pozycji w koszyku: {basket}</p>
      <Link to="/koszyk" className="basket__button">Koszyk</Link>
    </div>
    <h1 className="page__title">Books Storage</h1>
    {(books.data !== undefined && ((books.data).map(item => (<BookBox key={item.id} book={item} />))))}
  </>
}

export default Home;
