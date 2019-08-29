import React, { Component } from 'react';
import InputComponent from '../InputComponent/';
import SubmitButton from '../SubmitButton/';
import ExpireDateInput from '../ExpireDateInput/';

const patterns = {
  expireDate: /^(1[0-2]|0[1-9])\/(1[5-9]|2\d)$/,
  email: /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
  userName: /^[a-zA-Z0-9_$@*!]+$/,
  numbers: /^\d$/,
};

const methods = {
  nonZeroLength: value => value && value.length > 0,
  validLength: value => value && /^.{5,15}$/.test(value),
};

const fieldsTypes = {
  cardNumber: 'cardNumber',
  expireDate: 'expireDate',
  name: 'name',
  email: 'email',
};

const instruction = {
  [fieldsTypes.name]: [
    {
      validationMethod: methods.nonZeroLength,
      errorMsg: 'Field is required',
    },
    {
      validationMethod: methods.validLength,
      errorMsg: 'Min symbol lengt is 5 and max 15 symbols',
    },
    {
      validationMethod: value => value.match(patterns.userName),
      errorMsg: 'Use correct symbols',
    },
  ],
};

const validator = (fieldType, value) => {
  const validateMethods = instruction[fieldType];

  if (validateMethods) {
    const error = validateMethods.find(({ validationMethod }) => !validationMethod(value));

    return error
      ? error.errorMsg
      : '';

  }

  return '';
};

const isFieldsValid = errors => !Object.values(errors).some(errorMsg => !!errorMsg);

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValidated: false,
      cardNumber: '',
      expireDate: '',
      name: '',
      email: '',
      errors: {},
    };
  }

  onSubmit = event => {
    event.preventDefault();

    const errors = {};
    errors.name = validator(fieldsTypes.name, this.state.name);
    errors.cardNumber = validator(fieldsTypes.cardNumber, this.state.cardNumber);
    errors.expireDate = validator(fieldsTypes.cardNumber, this.state.expireDate);
    errors.email = validator(fieldsTypes.cardNumber, this.state.email);

    this.setState({ errors });

    console.log(isFieldsValid(errors));

    if (isFieldsValid(errors)) {
      // Submit process
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
      errors,
    } = this.state;

    return (
      <form className="payment-form" onSubmit={this.onSubmit}>
        <h2>Payment Form</h2>

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

PaymentForm.propTypes = {};

export default PaymentForm;
