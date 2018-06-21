import React from 'react'
import HelloChild from './HelloChild'
import {connect} from 'react-redux'

const Hello = () => (
  <div>
    <div>Hello</div>
    <HelloChild />
  </div>
)

export default connect()(Hello)
