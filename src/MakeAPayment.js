import React, { Component } from 'react';
import Invoices from './components/Invoices';
import logo from './logo.svg';
import './MakeAPayment.css';

class MakeAPayment extends Component {
  constructor() {
    super();
    this.state = {
        openInvoices: [
            {
                id: 1,
                amount: 53.00
            },
            {
                id: 2,
                amount: 28.79
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
        <Invoices openInvoices={this.state.openInvoices}/>
      </div>
    );
  }
}

export default MakeAPayment;
