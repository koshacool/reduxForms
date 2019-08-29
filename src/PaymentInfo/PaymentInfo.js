import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const PaymentInfo = ({
  isPaymentSuccess,
}) => (
  <div className="payment-info">
    <p>some info</p>

    {isPaymentSuccess && (
      <p>Your payment is successful</p>
    )}
  </div>
);


PaymentInfo.propTypes = {
  isPaymentSuccess: PropTypes.bool.isRequired,
};

export default PaymentInfo;
