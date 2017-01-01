import { createTttGame } from '../TttGame/index.js'

const initialState = {
  tttGame: createTttGame(),
  humanPlayer: null,
  botPlayer: null,
  activeGame: false,
  gameWinner: null
}

// console.log('initialState: ', initialState.tttGame)

export default initialState
