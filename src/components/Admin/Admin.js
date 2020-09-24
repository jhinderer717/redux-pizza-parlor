import React, {Component} from 'react';
import {connect} from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        <h3>Admin Page</h3>
        
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