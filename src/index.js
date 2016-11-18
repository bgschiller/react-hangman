import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

var initialState = {
    guessed_letters: ['A', 'E', '2', 'W', 'R', 'G', 'F'],
    puzzle: '  EA E ',
}
ReactDOM.render(
  <App {...initialState} />,
  document.getElementById('root')
);
