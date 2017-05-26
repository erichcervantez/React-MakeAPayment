import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MakeAPayment from './components/app/MakeAPayment';
import Confirmation from './components/invoice/Confirmation';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';

const Home = () => (
  <div>
    <h2>You are now Home.</h2>
  </div>
)

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MakeAPayment}/>
      <Route path="/home" component={Home}/>
      <Route path="/confirmation" component={Confirmation}/>
    </div>
  </Router>,
  document.getElementById('root')
);
