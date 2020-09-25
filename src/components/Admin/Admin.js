import React, {Component} from 'react';
import {connect} from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
import axios from 'axios';

class Admin extends Component {
 state = {
   orders: []
 }

componentDidMount () {
this.adminGet();
}

 adminGet = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    }).then((response) => {
      console.log('adminOrder get', response);
    this.setState (
      {orders: response.data}
      )
       }).catch(function(error){
         console.log('adminOrder Error', error)
       });
    }

  render() {
    console.log('adminData this.state', this.state);
    return (
      <div>
        <h3>Admin Page</h3>
        <table>
          <thead>
              <tr>
                <th>Name</th>
                <th>Time Order Placed</th>
                <th>Type</th>
                <th>Cost</th>
              </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) =>  
              <AdminItem 
                key={order.id}
                name={order.customer_name}
                time={order.time} 
                type={order.type}
                total={order.total}
              />
            )} 
          </tbody>
        </table>

      </div>
    );
  }
} 

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  };
}

export default connect(mapStateToProps)(Admin);