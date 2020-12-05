import React, { useState } from "react";
import { connect } from 'react-redux';
import { addBookAction } from '../api/actions';
import './Book.css';

const BookBox = ({ book, ...props }) => {

  return (
    <article className="book__box">
      <img className="book__cover" src={book.cover_url} alt=""></img>
      <div className="book__info">
        <h3 className="book__title">{book.title}</h3>
        <h4 className="book__author">{book.author}</h4>
        <p className="book__pages">Stron: {book.pages}</p>
        <div className="book__btn-box">
          <button onClick={() => props.addBookToBasket(book)} className="book__button">+ Dodaj do koszyka</button>
        </div>
      </div>
    </article>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addBookToBasket: (book) => dispatch(addBookAction(book))
  }
}

export default connect(null, mapDispatchToProps)(BookBox);
