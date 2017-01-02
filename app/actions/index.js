import * as types from './ActionTypes'

// *** ACTION CREATORS ***
// functions that create actions
// actions are the *only* source of information for the store

export const selectPlayer = selectedPlayer => ({
  type: types.SET_PLAYERS,
  humanPlayer: selectedPlayer,
  botPlayer: selectedPlayer === 'x' ? 'o' : 'x'
})

export const startGame = () => {
  return {
    type: types.START_GAME,
    gameStarted: true
  }
}

export const selectSquare = (id, player) => {
  return {
    type: types.SELECT_SQUARE,
    id,
    player
  }
}
