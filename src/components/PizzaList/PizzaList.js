import React, {Component} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import {connect} from 'react-redux';

class PizzaList extends Component {
  render() {
    return (
      <section>
        <h3>Pizza List</h3>
        <ul>
          {this.props.reduxState.pizzaRouter.map((pizza, i) => 
            <PizzaItem 
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              image={pizza.image_path}
              description={pizza.description}
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