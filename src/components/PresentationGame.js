import React, {Component, PropTypes} from 'react'
import Guy from './Guy'
import Word from './Word'
import Guesses from './Guesses'
import NewGuess from './NewGuess'

class PresentationGame extends Component {
  render(){
    console.log('presentation game render')
    var {puzzle, status, onGuess} = this.props
    if (status !== 'unsolved' && status !== 'solved') {
      return (
        <div className="row">fetching...</div>
      )
    }
    return (
      <div className="row">
          <div className="col-sm-9">
              <Guy {...puzzle} />
              <Word {...puzzle} />
              <NewGuess
                onGuess={onGuess}
              />
          </div>
          <div className="col-sm-3">
              <Guesses guesses={puzzle.guesses}/>
          </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.requestPuzzle();
  }
  PropTypes: {
    requestPuzzle: PropTypes.func.isRequired
  }

}


export default PresentationGame;
