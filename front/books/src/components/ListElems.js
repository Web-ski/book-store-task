import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { removeBookAction } from '../api/actions';

const ListElem = ({ elem, number, ...props }) => {

  const cleanPrice = (price) => {
    let stringifyPrice = (price.toString()).split("");
    stringifyPrice.length = stringifyPrice.length - 2;  
    return stringifyPrice;
  }

  const addCents = (price) => {
    let stringifyPrice = (price.toString()).split("");
    let cents = stringifyPrice.slice(-2);    
    return cents;
  }

  return (
    <tr className="basket__elem">
      <td>{number + 1}</td>
      <td>{elem.title}</td>
      <td>{elem.author}</td>
      <td className="table__price">{cleanPrice(elem.price)},<span>{addCents(elem.price)}</span> {elem.currency}</td>
      <td className="table__btn"><button onClick={() => props.removeBookFromBasket(number)}>Usuń</button></td>      
    </tr>
  )
}

const mapStateToProps = state => ({
  getList: state.books
})

const mapDispatchToProps = dispatch => {
  return {
    removeBookFromBasket: (number) => dispatch(removeBookAction(number))
    //removeBookFromBasket2: (number) => console.log(number)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElem);