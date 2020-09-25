import React, { Component } from 'react';
import {connect} from 'react-redux';


class PizzaItem extends Component {

    state = {
        pizzaAdded: false,
        newPizza: {
            name: this.props.pizza.name,
            price: this.props.pizza.price,
            id: this.props.pizza.id,
            quantity: 1,
        }
    }

    addPizzaToCart = () => {
        this.setState({
            pizzaAdded: !this.state.pizzaAdded,
            newPizza: {
                name: this.props.pizza.name,
                price: this.props.pizza.price,
                id: this.props.pizza.id,
                quantity: 1,
            }
        });
        this.props.dispatch({
            type: "ADD_PIZZA",
            payload: this.state.newPizza
          });
      } // end addPizzaToCart

    removePizzaFromCart = () => {
    this.setState({
        pizzaAdded: !this.state.pizzaAdded,
    });
    this.props.dispatch({
        type: "REMOVE_PIZZA",
        payload: this.state.newPizza
        });
    } // end addPizzaToCart

    render() {
        return (

            <tr>
                <td>
                    <img className="pizzaPhotos" src={this.props.pizza.image_path} alt="" />
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
                {
                    !this.state.pizzaAdded ||
                    <td>
                        <button onClick={this.removePizzaFromCart}>Remove</button>
                    </td>
                }     

                {
                    this.state.pizzaAdded ||
                    <td>
                        <button onClick={this.addPizzaToCart}>Add</button>
                    </td>
                }                                 
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