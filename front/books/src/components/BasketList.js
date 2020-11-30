import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {resetBookAction} from '../api/actions';

import ListElem from './ListElems';

const BasketList = ({ elems, ...props }) => {
  const [sum, setSum] = useState(0);
  const [price, setPrice] = useState(0);
  const [cents, setCents] = useState(0);

  useEffect(() => {
    let sum = 0;
    elems.map(item => {
      sum = sum + item.price;
      console.log(sum)
    });
    setSum(sum);

    console.log(sum)
    let stringifyPrice = (sum.toString()).split("");
    stringifyPrice.length = stringifyPrice.length - 2;  
    setPrice(stringifyPrice);

    let stringifyPrice2 = (sum.toString()).split("");
    let cents = stringifyPrice2.slice(-2);    
    setCents(cents);
  }, [])

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
          <td className="table__price"><p>Łącznie: </p>{price},<span>{cents}</span> PLN</td>
          <td className="table__btn"><button onClick={() => props.removeAllBooks()}>Usuń wszystko</button></td>
        </tr>
      </tfoot>
    </table>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeAllBooks: () => dispatch(resetBookAction())
  }
}

export default connect(null, mapDispatchToProps)(BasketList);
