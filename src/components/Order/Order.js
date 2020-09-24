import React, {Component} from 'react';
import {connect} from 'react-redux';

class Order extends Component {
  render() {
    return (
      <div>
        <input placeholder="Name"></input>
        <input placeholder="Street Address"></input>
        <input placeholder="City"></input>
        <input placeholder="Zip"></input>
        
        <form>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
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