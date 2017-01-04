import * as types from './ActionTypes'

import { runTttGame } from '../lib/runTttGame.js'

// *** ACTION CREATORS ***
// functions that create actions
// actions are the *only* source of information for the store



// if selected player is 'o' bot should make first move

export const setPlayers = selectedPlayer => ({
  type: types.SET_PLAYERS,
  humanPlayer: selectedPlayer,
  botPlayer: selectedPlayer === 'x' ? 'o' : 'x'
})

export const startGame = () => (dispatch, getState) => {
  console.log('startGame');
  const { players } = getState()
  const currentPlayer = players.humanPlayer === 'x' ? players.humanPlayer : players.botPlayer

  dispatch({
    type: types.START_GAME,
    activeGame: true,
    currentPlayer
  })
  if (currentPlayer === players.botPlayer) {
    console.log('currentPlayer === players.botPlayer');
    dispatch(playerMove(4, players.botPlayer))
    // dispatch({
    //   type: types.PLAYER_MOVE,
    //   id: 4,
    //   player: currentPlayer
    // })
  }
}

export const playerMove = (id, player) => {
  // check if winner, tied game, etc
  // else update board

  return {
    type: types.PLAYER_MOVE,
    id,
    player
  }
}

export const selectSquare = (id, player) => {
  return {
    type: types.SELECT_SQUARE,
    id,
    player
  }
}
