import React, { Component } from 'react';
import './css/invoice.css';
import './css/button.css';

class OpenInvoice extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="OpenInvoice">
        Open Invoice (# {this.props.invoice.id})<br/>
        <li>AMOUNT:  ${this.props.invoice.amount}</li>
        <div className="divButton"><a href="/confirmation" className="myButton">Pay Tomorrow</a></div>
        <br/>
      </div>
    );
  }
}

export default OpenInvoice;