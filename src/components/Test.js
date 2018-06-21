import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

export class Test extends Component{
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    return (
      <div>
        <div onClick={this.props.onGetAllAddress} >获取地址列表</div>
        
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   list: state.list
// })

// const mapDispatchToProps = {
//   getAddressList: () => {type: 'ADDRESS_GET_ALL'}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Test)