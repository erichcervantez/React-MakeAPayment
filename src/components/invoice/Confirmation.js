import React, { Component } from 'react';
import logo from '../app/images/logo.svg';
import './css/button.css';

class Confirmation extends Component {
  render() {
    return (
        <div className="MakeAPayment">
            <div className="MakeAPayment-header">
                <img src={logo} className="MakeAPayment-logo" alt="logo" />
                <h2>React - Make A Payment</h2>
            </div>
            <div>
                <h1>Thank you!</h1><br/>
                <h1>Your payment has been confirmed.</h1>
            </div>
        </div>
    );
  }
}

export default Confirmation;