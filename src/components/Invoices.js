import React, { Component } from 'react';
import './Invoices.css';
import OpenInvoice from './OpenInvoice';

class Invoices extends Component {
  render() {
    let openInvoiceMap;

    if (this.props.openInvoices) {
      openInvoiceMap = this.props.openInvoices.map(invoice => {
        //console.log(invoice);
        return (
          <OpenInvoice invoice={invoice}/>
        )
      });
    }
    //console.log(openInvoiceMap)

    return (
      <div className="Invoices">
        Invoices
        <p/>
        { openInvoiceMap }
      </div>
    );
  }
}

export default Invoices;
