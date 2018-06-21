import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/hello">Hello</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/address">Address</Link></li>
    </ul>
)

export default NavBar
