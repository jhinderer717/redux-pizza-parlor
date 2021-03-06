import React, {Component} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class PizzaList extends Component {
  render() {
    return (
      <section>
        <h3>Pizza List</h3>

        <table>
        <thead>
            <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
            </tr>
        </thead>

          {this.props.reduxState.pizzaReducer.map((pizza, i) => 
            <PizzaItem
              key={i}
              pizza={pizza}
            />
          )}
        </table>

            <h3>
              Cart Total: ${this.props.reduxState.cartReducer.totalPrice}
            </h3>

        <Route>
          <nav>
              <main>
                <Link to="/api/order">
                <button>
                  Next
                </button>
                </Link>
              </main>
            </nav>
        </Route>
      </section>
    );
  }
} 

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}

export default connect(mapStateToProps)(PizzaList);