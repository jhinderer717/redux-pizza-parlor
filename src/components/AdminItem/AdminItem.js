import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminItem extends Component {
  render() {
    return (
 

          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.time}</td>
            <td>{this.props.type}</td>
            <td>{this.props.total}</td>
            </tr>
     
    );
  }
} 


export default AdminItem;