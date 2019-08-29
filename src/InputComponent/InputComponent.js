import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const InputComponent = ({
  name,
  type,
  value,
  id = name,
  placeholder,
  onChange,
  required,
  error = '',
}) => (
  <fieldset>
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <div>
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange(name)}
          placeholder={placeholder}
          required={required}
        />
        <span className={`error ${error ? 'show' : ''}`}>
          {error}
        </span>
      </div>
    </div>
  </fieldset>
);

InputComponent.defaultProps = {
  placeholder: '',
  required: false,
};

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputComponent;
