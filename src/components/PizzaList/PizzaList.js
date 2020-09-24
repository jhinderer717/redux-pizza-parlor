import React, {Component} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class PizzaList extends Component {
  render() {
    return (
      <section>
        <h3>Pizza List</h3>
        
        <Route>
          <nav>
              <main>
                <Link to="/api/order">
                <button>
                  Next
                </button>
                </Link>
                <Link to="/checkout"></Link>
              </main>
            </nav>
        </Route>

        <ul>
          {this.props.reduxState.pizzaReducer.map((pizza, i) => 
            <PizzaItem
              key={i}
              pizza={pizza}
            />
          )}
        </ul>
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