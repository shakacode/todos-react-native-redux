import React, { Component } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import todoApp from '../reducers'
import Main from '../components/Main'

const logger = createLogger()

let createStoreWithMiddleware

if (__DEV__) {
  createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
}

const store = createStoreWithMiddleware(todoApp)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
