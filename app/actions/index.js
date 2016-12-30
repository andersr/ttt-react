import * as types from './ActionTypes'

export const selectPlayer = selection => {
  return {
    type: type.SELECT_PLAYER,
    selection
  }
}
