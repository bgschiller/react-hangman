import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Guy from './components/Guy'
import Word from './components/Word'
import Guesses from './components/Guesses'
import NewGuess from './components/NewGuess'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React-Hangman!</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <Guy {...this.props}/>
                    <Word puzzle={this.props.puzzle}/>
                    <NewGuess />
                </div>
                <div className="col-sm-3">
                    <Guesses guesses={this.props.guessed_letters}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
