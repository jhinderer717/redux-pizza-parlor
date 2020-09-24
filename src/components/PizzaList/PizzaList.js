import React, {Component} from 'react';
import PizzaItem from '../compenent/PizzaItem';
import {connect} from 'react-redux';

class PizzaList extends Component {
  render() {
    return (
      <section>
        <h3>Pizza List</h3>
        <ul>
          {this.props.pizzaTest.map((pizza, i) => 
            <PizzaItem 
              id={pizza.id}
              name={pizza.name}
              description={pizza.description}
              image={pizza._path}
              price={pizza.price}
              />
          )}
        </ul>
      </section>
    );
  }
} 

const mapStateToProps = (reduxState) => {
  return {
    PizzaList: reduxState.PizzaList
  };
}

export default connect(mapStateToProps)(PizzaList);