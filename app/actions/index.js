import * as types from './ActionTypes'

import { runTttGame } from '../lib/runTttGame.js'

// *** ACTION CREATORS ***
// functions that create actions
// actions are the *only* source of information for the store

export const setPlayers = selectedPlayer => ({
  type: types.SET_PLAYERS,
  humanPlayer: selectedPlayer,
  botPlayer: selectedPlayer === 'x' ? 'o' : 'x'
})

export const startGame = () => (dispatch, getState) => {
  const { players } = getState()
  const currentPlayer = players.humanPlayer === 'x' ? players.humanPlayer : players.botPlayer

  runTttGame(players, currentPlayer)

  return dispatch({
    type: types.RUN_GAME,
    activeGame: true,
    currentPlayer
  })

}

export const selectSquare = (id, player) => {
  return {
    type: types.SELECT_SQUARE,
    id,
    player
  }
}
