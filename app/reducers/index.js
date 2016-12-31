import { combineReducers } from 'redux'
// import initialState from './initialState.js'
import {
  SELECT_PLAYER
} from '../actions'

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// (previousState, action) => newState

const initialState = {
  humanPlayer: null
}

function tttApp (state = initialState, action) {
  switch (action.type) {
    case SELECT_PLAYER:
      return {
        ...state,
        humanPlayer: action.selection
      }
     default:
       return state
  }
}

// combine reducers - same as...
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

export default tttApp

//
// switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     default:
//       return state;
//   }
