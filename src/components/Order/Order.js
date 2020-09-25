import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout.js';

class Order extends Component {

  state = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    total: this.props.reduxState.cartReducer.totalPrice,
    type: "",
    pizzas: this.props.reduxState.cartReducer.cartItems
  }

  orderGet = () => {
    console.log('orderGet triggered');
    axios({
      method: 'POST',
      url: '/api/order',
      data: this.state
    }).then((response) => {
      console.log('GET response:', response);

    }).catch(err => {
      console.log('GET err', err);
    }); // end axios
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    }); // end setState
    console.log('Order state:', this.state);
  } // end handleChangeFor

  handleRadio = (which) => {
    this.setState({
      ...this.state,
      type: which
    }); // end setState
    console.log('Order state:', this.state);
  } // end handleRatio

  render() {
    return (
      <div>
        <form onSubmit={this.orderGet}>
          <Router>
            <Link to="/api/checkout">Next</Link>
            <Route exact path="/api/checkout">
              <Checkout />
            </Route>
          </Router>
          <button>Submit</button><br></br>
          <input placeholder="Name" onChange={(event) => this.handleChangeFor('customer_name', event)}/>
          <input placeholder="Street Address" onChange={(event) => this.handleChangeFor('street_address', event)}/>
          <input placeholder="City" onChange={(event) => this.handleChangeFor('city', event)}/>
          <input placeholder="Zip" type="number" onChange={(event) => this.handleChangeFor('zip', event)}/>

          <input type="radio" id="male" name="gender" value="male" 
            onChange={() => this.handleRadio('pickup')}/>
          <label htmlFor="male">Pickup</label>
          <input type="radio" id="female" name="gender" value="female" 
            onChange={() => this.handleRadio('delivery')}/>
          <label htmlFor="female">Delivery</label>

        </form>

        
      </div>
    );
  }
} 

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}

export default connect(mapStateToProps)(Order);