import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch } from 'react-router'
// import { ConnectedRouter } from 'connected-react-router/immutable'
import routes from './routes'

const App = ({ history }) => {
  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}

// App.propTypes = {
//   history: PropTypes.object,
// }

export default App
