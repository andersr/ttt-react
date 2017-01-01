import * as types from './ActionTypes'
// import TttGame from '../TttGame/TttGame.js'

function TttGame(humanPlayer) {
  this.humanPlayer = humanPlayer
  this.botPlayer = humanPlayer === 'x' ? 'o' : 'x'
  var totalSquares = 9

  var GameSquare = function (id) {
    var square = {}
    square.content = ''
    square.id = id
    return square
  }
  var gameSquareSetup = function () {
    var squares = new Array(totalSquares)
    var squareId = 0

    for (var i = 0; i < squares.length; i++) {
      squares[i] = new GameSquare(squareId) //{ state: ''}
      squareId++
    }
    return squares
  }

  this.gameSquares = gameSquareSetup()
}

export const selectPlayer = selection => ({
  type: types.SELECT_PLAYER,
  humanPlayer: selection
})

export const createGame = humanPlayer => {
  let tttGame = new TttGame(humanPlayer)
  // console.log('tttGame: ', tttGame)
  return {
    type: types.CREATE_GAME,
    tttGame
  }
}
