import { combineReducers } from 'redux'
import {
  SELECT_PLAYER
} from '../actions/ActionTypes'
import initialState from './initialState.js'

const tttApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PLAYER':
      return {
        ...state,
        humanPlayer: action.selection
      }
    default:
      return state
  }
}

// const tttApp = (state = initialState, action) => {
//   return state
// }

//
// export default combineReducers({
//   selectedPlayer
// })
export default tttApp
