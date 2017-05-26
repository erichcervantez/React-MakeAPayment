import React, { Component } from 'react';
import Invoices from '../invoice/Invoices';
import logo from './images/logo.svg';
import './css/MakeAPayment.css';

class MakeAPayment extends Component {
  constructor() {
    super();
    this.state = {
        invoices: [
            {
                id: 1,
                amount: 53.00,
                type: 'open'
            },
            {
                id: 2,
                amount: 28.79,
                type: 'open'
            },
            {
                id: 3,
                amount: 19.99,
                type: 'paid'
            }
        ]
    }
  }

  render() {
    return (
      <div className="MakeAPayment">
        <div className="MakeAPayment-header">
          <img src={logo} className="MakeAPayment-logo" alt="logo" />
          <h2>React - Make A Payment</h2>
        </div>
        <Invoices invoices={this.state.invoices}/>
      </div>
    );
  }
}

export default MakeAPayment;
