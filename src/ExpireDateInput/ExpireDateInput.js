import React from 'react';
import PropTypes from 'prop-types';

import InputComponent from '../InputComponent/';
import './styles.scss';


const checkValue = (prevValue, newValue) => {
  if (prevValue.length < 2 && newValue.length === 2) {
    return `${newValue}/`;
  }
  return newValue.substring(0, 5);
};

const ExpireDateInput = ({ onChange, value, ...restProps }) => {
  const onValueChange = name => event => {
    const { value: newValue } = event.target;
    onChange(name)({ target: { value: checkValue(value, newValue) } });
  };


  return <InputComponent onChange={onValueChange} value={value} {...restProps} />;
};

ExpireDateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ExpireDateInput;
