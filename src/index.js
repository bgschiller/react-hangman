import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

var initialState = {
    guessed_letters: ['A', 'E', 'W', 'R', 'S', 'T'],
    puzzle: '  EA E ',
}
ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('root')
);
