import React, { Component } from 'react';
import './Invoices.css';

class OpenInvoice extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="OpenInvoice">
        Open Invoice:<br/>
        <li>ID:  {this.props.invoice.id}</li>
        <li>AMOUNT:  {this.props.invoice.amount}</li>
        <br/>
      </div>
    );
  }
}

export default OpenInvoice;
