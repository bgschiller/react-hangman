import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import hangmanApp from './reducers'
import thunk from 'redux-thunk'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(hangmanApp, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
