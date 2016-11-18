import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React-Hangman!</h2>
        </div>
        <div className="container">
            <Game {...this.props} />
        </div>
      </div>
    );
  }
}

export default App;
