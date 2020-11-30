import React from "react";

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
      <td className="table__btn"><button>Usuń</button></td>      
    </tr>
  )

}

export default ListElem;