import React from "react";

const ListElem = ({ elem, number, ...props }) => {

  const newPrice = (price) => {
    let betterPrice = price.split(" ");
    //
    return betterPrice
  }

  return (
    <tr className="basket__elem">
      <td>{number + 1}</td>
      <td>{elem.title}</td>
      <td>{elem.author}</td>
      <td>{newPrice(elem.price)} {elem.currency}</td>
      <td><button>Usuń</button></td>      
    </tr>
  )

}

export default ListElem;