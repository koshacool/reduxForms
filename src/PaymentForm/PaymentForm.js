import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.scss';
import InputComponent from '../InputComponent/';
import SubmitButton from '../SubmitButton/';
import ExpireDateInput from '../ExpireDateInput/';

const patterns = {
  expireDate: /^(1[0-2]|0[1-9])\/(1[5-9]|2\d)$/,
}

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValidated: false,
      cardNumber: '',
      expireDate: '',
      name: '',
      email: '',
    };
  }

  onSubmit = event => {
    event.preventDefault();
  };

  onInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const {
      cardNumber,
      expireDate,
      name,
      email,
    } = this.state;

    return (
      <form className="payment-form" onSubmit={this.onSubmit}>
        <h2>Payment Form</h2>

        <InputComponent
          type="number"
          name="cardNumber"
          value={cardNumber}
          onChange={this.onInputChange}
        />

        <ExpireDateInput
          type="text"
          name="expireDate"
          value={expireDate}
          onChange={this.onInputChange}
          placeholder="MM/YY"
          pattern={patterns.expireDate}
        />

        <InputComponent
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
        />

        <InputComponent
          type="email"
          name="email"
          value={email}
          onChange={this.onInputChange}
        />

        <SubmitButton title="Confirm"/>
      </form>
    );
  }
}

PaymentForm.propTypes = {};

export default PaymentForm;
