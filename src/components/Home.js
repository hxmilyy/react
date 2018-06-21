import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as addressActions from '../actions/address'

class Home extends Component {
  constructor(props) {
    super(props);
    // this.props.getAddressList(); //自动获取地址列表
  }

  render() {
    const AddressList = (props) => {
      if (props.address && props.address.length) {
        return <ul>{props.address.map(function (item) {
          return <li key={item.addressId}>
            <div>{item.userName}</div>
            <div>{item.addressExt}</div>
          </li>
        })}</ul>

      }
      return <div>没有地址</div>
    }

    return (
      <div>
        <h1>home</h1>
        <div><a onClick={this.props.getAddressList}>获取地址列表</a></div>
        <div>
          <AddressList address={this.props.list}></AddressList>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  list: state.address
})

const mapDispatchToProps = {
  getAddressList: () => {
    return addressActions.getAll();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
