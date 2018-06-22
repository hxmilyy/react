import React from 'react'
import Loadable from 'react-loadable';
import { Router, Route, Switch } from 'react-router'
import Home from '../components/Home'
import Loading from '../components/Loading';
import NavBar from '../components/NavBar'

// import Hello from '../components/Address'
// import Counter from '../components/Counter'
// import NoMatch from '../components/NoMatch'
// import Address from '../components/Address'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Loadable({
        loader: () => import('../components/Hello'),
        loading: Loading,
      })} />
      <Route path="/counter" component={Loadable({
        loader: () => import('../components/Counter'),
        loading: Loading,
      })} />
      <Route path="/address" component={Loadable({
        loader: () => import('../components/Address'),
        loading: Loading,
      })} />
      <Route component={Loadable({
        loader: () => import('../components/NoMatch'),
        loading: Loading,
      })} />
    </Switch>
  </div>
)

export default routes
