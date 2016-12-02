import React, { Component } from 'react';
import GuessBox from './GuessBox';
import _ from 'underscore';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const letterState = (letter, state) => {
    return _.contains(state.guessesInProgress, letter) ? 'loading':
    _.contains(state.puzzle.guesses, letter) ? 'guessed incorrect-guessed':
    _.contains(state.puzzle.word_so_far, letter) ? 'guessed correct-guessed':
    ''
}
class Guesses extends Component {
    render() {
        var letterStates = _.object(
          letters,
          _.map(letters, (l) => letterState(l, this.props))),
          onGuess = this.props.onGuess;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Previous Guesses</div>
                <div className="panel-body">
                    {
                        letters.map(
                            (letter, index) =>
                              <GuessBox
                                letter={letter} key={letter}
                                onClick={onGuess}
                                status={letterStates[letter]}
                              />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Guesses;
