import React, {Component} from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {
  render() {
    return (
      <section>
        <h3>Checkout</h3>
        <p>Test Address</p>
        <h3>Test Delivery Method</h3>
        <ul>
          {/* ordered pizzas */}
          Pizzas
        </ul>
        <button>Checkout</button>
      </section>
    );
  }
} 

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}

export default connect(mapStateToProps)(Checkout);