import React, {Component} from 'react';
import {connect} from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        <h3>Admin Page</h3>
        <thead>
            <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
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