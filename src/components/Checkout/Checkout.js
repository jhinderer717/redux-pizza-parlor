import React, {Component} from 'react';
import {connect} from 'react-redux';
import Order from '../Order/Order'

class Checkout extends Component {
  
  state = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    total: this.props.reduxState.cartReducer.totalPrice,
    type: "",
    pizzas: this.props.reduxState.cartReducer.cartItems
  }
  
  render() {
    console.log('reduxState', this.reduxState);
    return (
      <section>
        <h3>Checkout</h3>
        <p>Test Address</p>
        <h3>Test Delivery Method</h3>
        <ul>
          {/* ordered pizzas */}
          {/* ${this.props.reduxState.cartReducer.cartItems} */}
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