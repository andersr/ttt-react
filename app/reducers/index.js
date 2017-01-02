// import { combineReducers } from 'redux'
import initialState from './initialState.js'
import * as types from '../actions/ActionTypes'

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState

function tttApp (state = initialState, action) {
  switch (action.type) {
    case types.SET_PLAYERS:
      return {
        ...state,
        players: {
          humanPlayer: action.humanPlayer,
          botPlayer: action.botPlayer
        }
      }
    case types.START_GAME:
      return {
        ...state,
        gameStarted: action.gameStarted
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
