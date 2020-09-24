import React, {Component} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';

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