import { connect } from 'react-redux'
import { makeGuess, newGame } from '../actions'
import PresentationGame from './PresentationGame'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGuess: (letter) => {
      dispatch(makeGuess(letter))
    },
    requestPuzzle: () => {
      dispatch(newGame())
    }
  }
}

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationGame)

export default Game
