import React, { Component } from 'react';
import {connect} from 'react-redux';

class CheckoutItem extends Component{
    render(){
        return(
            <div>
                <p>CheckoutItem</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CheckoutItem);