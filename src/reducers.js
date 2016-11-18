import _ from 'underscore'

const initialState = {
  status: 'unfetched',
  puzzle: null,
  guessesInProgress: []
}

export default function hangmanApp(state = initialState, action){
  console.log({action, state})
  switch (action.type) {
    case 'fetching_game':
      return {
        ...state,
        status: 'fetching',
      }
    case 'new_game_started':
      return {
        ...state,
        puzzle: action.json.new_state,
        status: 'unsolved'
      }
    case 'guess_in_progress':
      return {
        ...state,
        guessesInProgress: [ ...state.guessesInProgress, action.letter]
      }
    case 'guess_made':
      return {
        ...state,
        puzzle: action.resp.new_state,
        guessesInProgress: _.without(state.guessesInProgress, action.letter)
      }
    case 'puzzle_solved':
      return {
        ...state,
        status: 'solved'
      }
    default:
      return state
  }
}
