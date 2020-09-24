import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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

  render() {
    return (
      
      <div className="App">
         <Router> <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br/>
          <img src="images/pizza_photo.png"/>
          <p>Pizza is great.</p>
          
            <nav>
            <main>
            <Link to="/api/order">
              <button>
              Next
              </button>
              </Link>
            </main>
          </nav>

          <main>
            <Route path='/api/order'>
              <Order />
             </Route> 
            <Route path='/' exact>
              <PizzaList />
              </Route>
          </main>
          </Router>
      </div>
    
    );
  }
}

export default App;
