import React, { useState } from 'react';
// import logo from './logo.svg';
import PaymentForm from '../PaymentForm/';
import PaymentInfo from '../PaymentInfo/';
import ReduxForm from '../ReduxForm/';
import './paymentPage.scss';

const PaymentPage = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const handleSubmit = data => console.log(data)
  return (
    <div className="payment-page">
      <ReduxForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default PaymentPage;
