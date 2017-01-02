// import { combineReducers } from 'redux'
import initialState from './initialState.js'
import * as types from '../actions/ActionTypes'

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState

function tttApp (state = initialState, action) {
  switch (action.type) {
    case types.SELECT_PLAYER:
    // TODO: define botPlayer in the action instead
      return {
        ...state,
        players: {
          humanPlayer: action.selection,
          botPlayer: action.selection === 'x' ? 'o' : 'x'
        }
      }
    case types.SELECT_SQUARE:
      let newState = Object.assign({}, state);
      console.log('newState.tttGame[action.id]: ', newState.tttGame[action.id]);
      newState.tttGame[action.id].content = action.player
      console.log('newState: ', newState);
      return newState
    default:
      return state
  }
}

export default tttApp
