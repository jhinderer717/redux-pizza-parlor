import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        </main>
      </div>
    );
  }
}

export default App;
