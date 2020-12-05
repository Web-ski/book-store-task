import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { resetBookAction } from '../api/actions';
import './Form.css';
const axios = require('axios');

const Form = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:3001/api/order';

    const order = {
      "order": props.order,
      "first_name": name,
      "last_name": surname,
      "city": city,
      "zip_code": postcode
    };

    axios.post(url, order)
      .then(res => {
        console.log(res); 
        window.location.reload(false)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="Form" >
      <legend>Twoje dane:</legend>
      <label>
        Imię
        <input type="text" name="name" onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Nazwisko
        <input type="text" name="surname" onChange={e => setSurname(e.target.value)} required />
      </label>
      <label>
        Miejscowość
        <input type="text" name="city" onChange={e => setCity(e.target.value)} required />
      </label>
      <label>
        Kod pocztowy
        <input type="text" name="postcode" onChange={e => setPostcode(e.target.value)} required />
      </label>
      <button className="form__button" type="submit">Zamawiam i płacę</button>
    </form>
  )
}

const mapStateToProps = state => ({
  order: state.order
})

const mapDispatchToProps = dispatch => {
  return {
    removeAllBooks: () => dispatch(resetBookAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);