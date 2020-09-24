import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Order extends Component {

  state = {
    name: '',
    address: '',
    city: '',
    zip: '',
    type: ''
  }

  orderGet = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then((response) => {
      console.log('GET response:', response);

      this.props.dispatch({
        type: "ADD_TO_CART",
        payload: response.data
      });
    }).catch(err => {
      console.log('GET err', err);
    }); // end axios
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    }); // end setState
    console.log('Order state:', this.state);
  } // end handleChangeFor

  handleRadio = (which) => {
    this.setState({
      ...this.state,
      type: which
    }); // end setState
    console.log('Order state:', this.state);
  } // end handleRatio

  render() {
    return (
      <div>
        <form onSubmit={this.orderGet}>
          <button>Next</button><br></br>
          <input placeholder="Name" onChange={(event) => this.handleChangeFor('name', event)}/>
          <input placeholder="Street Address" onChange={(event) => this.handleChangeFor('address', event)}/>
          <input placeholder="City" onChange={(event) => this.handleChangeFor('city', event)}/>
          <input placeholder="Zip" type="number" onChange={(event) => this.handleChangeFor('zip', event)}/>

          <input type="radio" id="male" name="gender" value="male" 
            onChange={() => this.handleRadio('pickup')}/>
          <label htmlFor="male">Pickup</label>
          <input type="radio" id="female" name="gender" value="female" 
            onChange={() => this.handleRadio('delivery')}/>
          <label htmlFor="female">Delivery</label>

        </form>

        
      </div>
    );
  }
} 

// const mapStateToProps = (reduxState) => {
//   return {
//     reduxState
//   };
// }

export default connect()(Order);