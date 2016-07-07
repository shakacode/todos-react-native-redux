import React from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from '../reducers';
import Main from '../components/Main';

const logger = createLogger();

let createStoreWithMiddleware;

if (__DEV__) {
  createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
}

const store = createStoreWithMiddleware(todoApp);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
