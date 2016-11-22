import {HANGMAN_API} from './constants'

export function makeGuess(letter) {
  return (dispatch) => {
    dispatch(guessInProgress(letter))
    var jsonPromise = fetch(HANGMAN_API + '/guess/' + letter, {
      credentials: 'include'
    })
      .then(response => response.json())

    jsonPromise
      .then(json => dispatch(guessMade(letter, json)))
    jsonPromise
      .then(json => {
        if (json.guess_result === 'not_found') {
          dispatch(guessNotFound(letter))
        } else if (json.guess_result === 'solved') {
          dispatch(puzzleSolved())
        } else if (json.guess_result === 'found') {
          dispatch(guessFound(letter))
        }
      })
  }
}

function puzzleSolved(){
  return {type: 'puzzle_solved'}
}

function guessFound(letter){
  return {
    type: 'guess_found',
    letter,
  }
}

function guessNotFound(letter){
  return {
    type: 'guess_not_found',
    letter,
  }
}

function guessMade(letter, json){
  return {
    type: 'guess_made',
    letter,
    resp: json,
  }
}

function guessInProgress(letter){
  return {
    type: 'guess_in_progress',
    letter,
  }
}

function fetchingGame(){
  return {type: 'fetching_game'}
}

export function newGame() {
  return (dispatch) => {
    dispatch(fetchingGame())
    fetch(HANGMAN_API + '/new_game', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(json => dispatch(newGameStarted(json)))
  }
}

function newGameStarted(json){
  return {type: 'new_game_started', json}
}
