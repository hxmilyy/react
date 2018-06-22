import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
// import {Test} from './Test'
import {getAll} from '../actions/address'
import '../less/address.less'

class Address extends Component{
  constructor(props) {
    super(props);
    
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // this.getAddressList = this.getAddressList.bind(this);
  }

  render() {

    return (
      <div>
        <div className="address">address</div>
      </div>
    );
  }

  // getAddressList(){
  //   console.log('getAddressList');
  // }
}

Address.propTypes = {
  list: PropTypes.array,
}

const mapStateToProps = state => ({
  list: state.address
})

// const mapDispatchToProps = dispatch => ({
//   getAddressList: () => {dispatch({type: 'ADDRESS_GET_ALL'});}
// })

const mapDispatchToProps = {
  getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)