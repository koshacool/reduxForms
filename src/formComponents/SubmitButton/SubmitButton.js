import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const SubmitButton = ({
  className,
  disabled,
  type,
  title,
}) => (
  <fieldset className="submit-button">
    <div className="form-group">
      <button
        className={className}
        disabled={disabled}
        type={type}
      >
        {title}
      </button>
    </div>
  </fieldset>
);

SubmitButton.defaultProps = {
  className: '',
  disabled: false,
  type: 'submit',
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
