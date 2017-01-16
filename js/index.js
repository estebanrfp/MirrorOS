import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, hashHistory } from 'react-router'
import reducers from './reducers'
import routes from './routes'
import promise from 'redux-promise'

import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/draggable'

const store = createStore(reducers, {}, compose(
  applyMiddleware(promise),
  window.defToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('#app')
)