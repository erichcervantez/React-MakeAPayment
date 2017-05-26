import React, { Component } from 'react';
import './css/invoice.css';
import OpenInvoice from './OpenInvoice';
import PaidInvoice from './PaidInvoice';

class Invoices extends Component {
  render() {
    let openInvoicesMap;

    if (this.props.invoices) {
      openInvoicesMap = this.props.invoices.map(invoice => {
        console.log(invoice);

        if (invoice.type === 'open') {
          return (
            <OpenInvoice key={invoice.id} invoice={invoice}/>
          )
        }
        else if (invoice.type === 'paid') {
          return (
            <PaidInvoice key={invoice.id} invoice={invoice}/>
          )
        }

      });
    }
    console.log(openInvoicesMap)

    return (
      <div className="Invoices">
        Invoices:
        <p/>
        { openInvoicesMap }
      </div>
    );
  }
}

export default Invoices;
