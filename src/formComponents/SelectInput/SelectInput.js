import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const SelectInput = ({
  name,
  value,
  onChange,
  error = '',
  options,
}) => (
  <fieldset>
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <div>
        <select id={name} name={name} onChange={onChange(name)}>
          {options.map((option, index) => (
            <option key={index} value={option} selected={option === value}>{option}</option>
          ))}
        </select>
        <span className={`error ${error ? 'show' : ''}`}>
          {error}
        </span>
      </div>
    </div>
  </fieldset>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

export default SelectInput;
