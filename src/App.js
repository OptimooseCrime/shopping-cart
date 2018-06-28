import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader title = 'Shopping Cart'/>
        <CartItems header = 'Items'/>
        <CartFooter copyright = '2016'/>
      </div>
    );
  }
}

export default App;
