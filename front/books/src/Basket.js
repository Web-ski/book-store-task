import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Basket = () => {
  return <>
    <div className="page__header">
      <Link to="/" className="basket__button">Do strony głównej</Link>
    </div>
      <h1 className="page__title">Twój Koszyk</h1>
    <article>

    </article>
  </>
}

export default Basket;