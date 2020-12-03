import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Form.css';

const Form = (props) => {

  return (
    <form className="Form" target="_self">
      <legend>Twoje dane:</legend>
      <label>
        Imię
        <input type="text" name="name" required/>
      </label>
      <label>
        Nazwisko
        <input type="text" name="surname" required/>
      </label>
      <label>
        Miejscowość
        <input type="text" name="city" required/>
      </label>
      <label>
        Kod pocztowy
        <input type="text" name="postcode" required/>
      </label>
      <input className="form__button" type="submit" value="Zamawiam i płacę" />       
    </form>
  )
}

const mapStateToProps = state => ({
  order: state.order
})

export default connect(mapStateToProps)(Form);