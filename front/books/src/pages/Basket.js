import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addOrderAction } from '../api/actions';
import BasketList from '../components/BasketList';
import '../App.css';
import './Basket.css';

const Basket = (props) => {

  const prepareOrder = (data) => {
    let orderArr = [];
    let i;
    class Order {
      constructor(id, quantity, price) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
      }
    }


    //zwiększenie quantity dla tożsamych id

    console.log(orderArr)
    return orderArr;
  }

  const titleZero = <h2 className="page__title">Nie wybrałeś jeszcze żadnej książki.</h2>
  const titleArr = <h2 className="page__title">Wybrane pozycje:</h2>
  const btnNextStep = <Link to="/transakcja" onClick={() => props.addOrder(prepareOrder(props.basketElems))} className="basket__button">Dalej</Link>

  return <section className="basket">
    <div className="page__header">
      <Link to="/" className="basket__button">Do strony głównej</Link>
    </div>
    <h1 className="page__title">Twój Koszyk</h1>
    <article>
      <h2 className="page__title">Pozycji w koszyku: {props.elemsNumber}</h2>
      {(props.basketElems).length === 0 ? titleZero : titleArr}
      {(props.basketElems).length !== 0 && <BasketList elems={props.basketElems} />}
    </article>
    <article className="btn__article">
      {(props.basketElems).length !== 0 && btnNextStep}
    </article>
  </section>
}

const mapStateToProps = state => ({
  basketStatus: console.log(state.books),
  elemsNumber: state.number,
  basketElems: state.books
})

const mapDispatchToProps = dispatch => {
  return {
    addOrder: (data) => dispatch(addOrderAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

// #### 2. Strona prezentująca koszyk
// ###### Lista funkcjonalności składająca się z:
// * wyświetlanie listy wybranych przez użytkownika książek,
// * przycisk `DALEJ`, który będzie kierował do etapu podsumowania zamówienia.