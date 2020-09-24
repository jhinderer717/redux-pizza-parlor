import React, { Component } from 'react';
import {connect} from 'react-redux';


class PizzaItem extends Component {

    addPizzaToCart = () => {
        this.props.dispatch({
            type: "ADD_PIZZA",
            payload: this.props.pizza
          });
      } // end addPizzaToCart

    render() {
        return (
            <tr>
                <td>
                    <img className="pizzaPhotos" src={this.props.pizza.image_path} />
                </td>
                <td>
                    {this.props.pizza.name}
                </td>
                <td>
                    {this.props.pizza.description}
                </td>
                <td>
                    ${this.props.pizza.price}
                </td>
                <td>
                    <button onClick={this.addPizzaToCart}>Add</button>
                </td>
            </tr>
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