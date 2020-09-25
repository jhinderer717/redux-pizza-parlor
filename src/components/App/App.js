import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import Order from '../Order/Order';
import Admin from '../Admin/Admin';
import Checkout from '../Checkout/Checkout'
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.refreshPizzas();
  }

  refreshPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log('GET response', response);

      this.props.dispatch({
        type: "SET_PIZZAS",
        payload: response.data
      });
    }).catch(err => {
      console.log('GET err', err);
    }); // end axios
  } // end refreshPizzas

  // refreshCheckout = () => {
  //   axios({
  //     method: 'GET',
  //     url: '/api/checkout'
  //   }).then((response) => {
  //     console.log('GET response', response);

  //     this.props.dispatch({
  //       type: "SET_CHECKOUT",
  //       payload: response.data
  //     });
  //   }).catch(err => {
  //     console.log('GET err', err);
  //   }); // end axios
  // } // end refreshCheckout

  render() {
    return (
      
      <div className="App">
        <Router> 
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br/>
          <img src="images/pizza_photo.png"/>
          <p>
            Pizza is great.
          </p>

          <main>
            <Route path='/api/order' exact>
              <Order />
            </Route> 
            <Route path='/' exact>
              <PizzaList />
            </Route>

            <Route path='/api/checkout' exact>
              <Checkout />
             </Route>   
         
            <Route path='/admin'>
              <Admin />
            </Route>
          

          </main>
        </Router>
      </div>
    
    );
  }
}

export default connect()(App);
