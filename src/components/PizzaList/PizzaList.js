import React, {Component} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';

class PizzaList extends Component {
  render() {
    return (
      <section>
        <h3>Pizza List</h3>
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