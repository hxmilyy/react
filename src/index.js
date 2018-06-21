import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createHashHistory } from 'history'
// import { routerMiddleware, connectRouter } from 'connected-react-router/immutable'
// import Immutable from 'immutable'
import saga from './sagas'
import App from './App'
import rootReducer from './reducers'

const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const initialState = {}
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      /* routerMiddleware(history), */sagaMiddleware
    ),
  ),
)
sagaMiddleware.run(saga)
//Provider的唯一功能就是传入store对象
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render()
// Hot reloading
// console.log('test1');
// console.log('hot..............................', module.hot);
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
