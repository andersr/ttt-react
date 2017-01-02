import * as types from './ActionTypes'

// *** ACTION CREATORS ***
// functions that create actions
// actions are the *only* source of information for the store

export const selectPlayer = selection => ({
  type: types.SELECT_PLAYER,
  selection
})

export const selectSquare = (id, player) => {
  return {
    type: types.SELECT_SQUARE,
    id,
    player
  }
}
