import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {resetBookAction} from '../api/actions';
import Form from '../components/Form';

const Transaction = (props) => {

  return <section className="transaction">
    <div className="page__header">
      <Link to="/" onClick={() => props.removeAllBooks()} className="basket__button">Do strony głównej</Link>
    </div>
    <h1 className="page__title">Twoje zamówienie</h1>
    <article>
      <div className="order">
        <p>Wybranych pozycji: </p>
        <p>Kwota: </p>
      </div>
      <Form />
    </article>
  </section>
}

const mapStateToProps = state => ({
  basketElems: state.order
})

const mapDispatchToProps = dispatch => {
  return {
    removeAllBooks: () => dispatch(resetBookAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);


// ##### 3. Strona zawierająca formularz potrzebny do złożenia zamówienia
// ###### Lista funkcjonalności składająca z:
// * przygotowanie formularza z polami:
//     * imię,
//     * nazwisko,
//     * miejscowość,
//     * kod pocztowy.
// * przycisk `ZAMAWIAM I PŁACĘ` po naciśnięciu którego zostaną wysłane dane pod
//  endpoint **POST** _/order_.
// ###### Funkcjonalności dodatkowe:
// * walidacja formularza.

// {
//   "order": [
//     {
//       "id": 0,
//       "quantity": 0
//     }
//   ],
//   "first_name": "string",
//   "last_name": "string",
//   "city": "string",
//   "zip_code": "string"
// }