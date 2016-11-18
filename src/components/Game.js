import React, { Component } from 'react';
import Guy from './Guy'
import Word from './Word'
import Guesses from './Guesses'
import NewGuess from './NewGuess'

class Game extends Component {
    render() {
        return (
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
        )
    }
}

export default Game;
