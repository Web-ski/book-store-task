import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {resetBookAction} from '../api/actions';

import ListElem from './ListElems';

const BasketList = ({ elems, ...props }) => {

  const addPrice = (collection) => {
    let sum = 0;
    collection.map(item => {
      sum = sum + item.price;
    });

    let stringifyPrice = (sum.toString()).split("");
    stringifyPrice.length = stringifyPrice.length - 2;  
    return stringifyPrice;
  }

  const addCents = (collection) => {
    let sum = 0;
    collection.map(item => {
      sum = sum + item.price;
    });

    let stringifyPrice = (sum.toString()).split("");
    let cents = stringifyPrice.slice(-2);    
    return cents;
  }

  return (
    <table className="basket__table">
      <thead>
        <tr>
          <th>Nr</th>
          <th>Tytuł</th>
          <th>Autorzy</th>
          <th>Cena</th>
          <th>Usuń</th>
        </tr>
      </thead>
      <tbody>
        {elems.map((item, index) => <ListElem key={"basket" + index} elem={item} number={index}/>)}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="table__price"><p>Łącznie: </p>{addPrice(props.basketElems)},<span>{addCents(props.basketElems)}</span> PLN</td>
          <td className="table__btn"><button onClick={() => props.removeAllBooks()}>Usuń wszystko</button></td>
        </tr>
      </tfoot>
    </table>
  )
}

const mapStateToProps = state => ({
  basketElems: state.books
})

const mapDispatchToProps = dispatch => {
  return {
    removeAllBooks: () => dispatch(resetBookAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
