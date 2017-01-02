import { createTttGame } from '../TttGame/index.js'

const initialState = {
  tttGame: createTttGame(),
  players: {
    humanPlayer: null,
    botPlayer: null
  },
  gameStarted: false,
  currentPlayer: null
}

// console.log('initialState: ', initialState.tttGame)

export default initialState
