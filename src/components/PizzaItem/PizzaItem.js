import React, { Component } from 'react';
import {connect} from 'react-redux';


class PizzaItem extends Component {

    addProductToCart = (event) => {
        console.log(this.props.pizza);
        // Dispatch
        this.props.dispatch({
            type: "ADD_TO_CART",
            payload: this.props.pizza
        });
    }

    render() {
        return (
            <li>
                Name: {this.props.pizza.name}
                Description: {this.props.pizza.description}
                Price: {this.props.pizza.price}
                <button onClick={this.addProductToCart}>Add</button>
            </li>
        )
    }
}

const mapStateToProps = (reduxState) => {

    return {
      reduxState
    };
  
    // Whatever we return gets assigned to "this.props"
  }

export default connect(mapStateToProps)(PizzaItem);