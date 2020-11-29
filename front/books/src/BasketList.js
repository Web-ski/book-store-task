import React from "react";
import ListElem from './ListElems';

const BasketList = ({ elems, ...props }) => {

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
    </table>
  )

}

export default BasketList;
