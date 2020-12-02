import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Form.css';

const Form = (props) => {

  return (
    <form className="Form">
      <legend>Twoje dane:</legend>
      <label>
        Imię
        <input type="text" name="name" />
      </label>
      <label>
        Nazwisko
        <input type="text" name="name" />
      </label>
      <label>
        Miejscowość
        <input type="text" name="name" />
      </label>
      <label>
        Kod pocztowy
        <input type="text" name="name" />
      </label>
      <input className="form__button" type="submit" value="Zamawiam i płacę" />
    </form>
  )
}

const mapStateToProps = state => ({
  basketElems: state.order
})

export default connect(mapStateToProps)(Form);