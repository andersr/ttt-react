// import { combineReducers } from 'redux'
import initialState from './initialState.js'
import * as types from '../actions/ActionTypes'


// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState
function tttApp (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_PLAYER:
      return {
        ...state,
        humanPlayer: action.selection
      }
      case types.CREATE_GAME:
      return {
        ...state,
        tttGame: state.humanPlayer
      }
     default:
       return state
  }
}

export default tttApp
