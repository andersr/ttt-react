import * as types from './ActionTypes'

export const selectPlayer = selection => ({
  type: types.SELECT_PLAYER,
  humanPlayer: selection
})
