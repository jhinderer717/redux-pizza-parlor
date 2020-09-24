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
          <th>
            <td>
              Image
            </td>
          </th>
          <th>
            <td>
              Name
            </td>
          </th>
          <th>
            <td>
              Description
            </td>
          </th>
          <th>
            <td>
              Price
            </td>
          </th>

          {this.props.reduxState.pizzaReducer.map((pizza, i) => 
            <PizzaItem
              key={i}
              pizza={pizza}
            />
          )}
        </table>
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