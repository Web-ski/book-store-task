import React from "react";
import './Book.css';

const BookBox = ({ book }) => {

  console.log(book)

  return (
    <article className="book__box">
      <img className="book__cover" src={book.cover_url} alt=""></img>
      <div className="book__info">
        <h3 className="book__title">{book.title}</h3>
        <h4 className="book__author">{book.author}</h4>
        <p className="book__pages">Stron: {book.pages}</p>
        <button className="book__button">Dodaj do koszyka</button>
      </div>
    </article>
  )
}

export default BookBox;
