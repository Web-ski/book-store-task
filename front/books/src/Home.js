import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BookBox from './BookBox';

const Home = ({ books, ...props }) => {


  return <>
    <div className="page__header">
      <p className="basket__storage">Pozycji w koszyku: {props.basketNumber}</p>
      <Link to="/koszyk" className="basket__button">Koszyk</Link>
    </div>
    <h1 className="page__title">Books Storage</h1>
    {(books.data !== undefined && ((books.data).map(item => (<BookBox key={item.id} book={item} />))))}
  </>
}

const mapStateToProps = state => ({
  basketNumber: console.log(state),
  basketNumber: state.number
})

export default connect(mapStateToProps)(Home);
