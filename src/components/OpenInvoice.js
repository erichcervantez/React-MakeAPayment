import React, { Component } from 'react';

class OpenInvoice extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="OpenInvoice">
        Open Invoice Item
        <p/>
        ID:  {this.props.invoice.id}<br/>
        AMOUNT:  {this.props.invoice.amount}<br/>
      </li>
    );
  }
}

export default OpenInvoice;
