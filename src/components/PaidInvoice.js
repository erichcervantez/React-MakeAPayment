import React, { Component } from 'react';

class PaidInvoice extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="PaidInvoice">
        Paid Invoice:<br/>
        <li>ID:  {this.props.invoice.id}</li>
        <li>AMOUNT:  {this.props.invoice.amount}</li>
        <br/>
      </div>
    );
  }
}

export default PaidInvoice;
