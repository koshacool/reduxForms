import React, { useState } from 'react';
// import logo from './logo.svg';
import PaymentForm from '../PaymentForm/';
import PaymentInfo from '../PaymentInfo/';
import './paymentPage.scss';

const PaymentPage = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  return (
    <div className="payment-page">
      <PaymentInfo isPaymentSuccess={isPaymentSuccess}/>
      <PaymentForm onSuccess={setIsPaymentSuccess} />
    </div>
  );
}

export default PaymentPage;
