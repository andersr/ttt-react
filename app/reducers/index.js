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

// function tttPlayers (state = initialState.players, action) {
//   switch (action.type) {
//     case types.SELECT_PLAYER:
//       return {
//         ...state
//       }
//       case types.SELECT_SQUARE:
//       //  find square matching action.payload.id
//       // set content attribute = action.payload.currentPlayer
//       return {
//         ...state,
//         tttGame: [
//           ...state,
//           updatedSquare
//         ]
//       }
//      default:
//        return state
//   }
// }
// combineReducers(
//
// )

// case types.SELECT_SQUARE:
// //  find square matching action.payload.id
// // set content attribute = action.payload.currentPlayer
// return {
//   ...state,
//   tttGame: [
//     ...state,
//     updatedSquare
//   ]
// }

// const square = (state, action) => {
//   switch (action.type) {
//     case SELECT_SQUARE:
//     return {
//
//     }
//
//       break;
//     default:
//
//   }
// }
