import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputComponent from '../formComponents/InputComponent/';
import SubmitButton from '../formComponents/SubmitButton/';
import ExpireDateInput from '../formComponents/ExpireDateInput/';
import SelectInput from '../formComponents/SelectInput/';
import { validator, isFieldsValid, fieldTypes } from '../utils/validation/';
import './styles.scss';

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
      expireDate: '',
      name: '',
      email: '',
      cardType: '',
      errors: {},
      isPaymentSucceed: false,
    };
  }

  onSubmit = event => {
    event.preventDefault();


    const errors = {};
    errors.name = validator(fieldTypes.name, this.state.name);
    errors.cardNumber = validator(fieldTypes.cardNumber, this.state.cardNumber);
    errors.expireDate = validator(fieldTypes.expireDate, this.state.expireDate);
    errors.email = validator(fieldTypes.email, this.state.email);

    this.setState({ errors, isFormSubmited: true });

    console.log(isFieldsValid(errors));

    if (isFieldsValid(errors)) {
      // Submit process
      this.setState({ isPaymentSucceed: true });
      this.props.onSuccess(true);

    }
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
      cardType,
      errors,
    } = this.state;

    return (
      <form className="payment-form" onSubmit={this.onSubmit}>
        <h2>Payment Form</h2>

        <SelectInput
          error={errors.cardType}
          options={['car', 'shop', 'axios']}
          onChange={this.onInputChange}
          name={'cardType'}
          value={cardType}
        />

        <InputComponent
          type="number"
          name="cardNumber"
          value={cardNumber}
          onChange={this.onInputChange}
          error={errors.cardNumber}
        />

        <ExpireDateInput
          type="text"
          name="expireDate"
          value={expireDate}
          onChange={this.onInputChange}
          error={errors.expireDate}
          placeholder="MM/YY"
        />

        <InputComponent
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
          error={errors.name}
        />

        <InputComponent
          type="email"
          name="email"
          value={email}
          error={errors.email}
          onChange={this.onInputChange}
        />

        <SubmitButton title="Confirm"/>
      </form>
    );
  }
}

PaymentForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default PaymentForm;
