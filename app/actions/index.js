import * as types from './ActionTypes'
// import TttGame from '../TttGame/TttGame.js'

export const selectPlayer = selection => ({
  type: types.SELECT_PLAYER,
  humanPlayer: selection
})

export const selectSquare = (id, player) => {

  // use this pattern: http://redux.js.org/docs/basics/ExampleTodoList.html

  // update square for this player
  tttGame[id].content = player

  return {
    type: types.SELECT_SQUARE,
    tttGame: [

    ]
  }
}

// export const createGame = humanPlayer => {
//   let tttGame = new TttGame(humanPlayer)
//   // console.log('tttGame: ', tttGame)
//   return {
//     type: types.CREATE_GAME,
//     tttGame
//   }
// }

// function TttGame(humanPlayer) {
//   this.humanPlayer = humanPlayer
//   this.botPlayer = humanPlayer === 'x' ? 'o' : 'x'
//   var totalSquares = 9
//
//   var GameSquare = function (id) {
//     var square = {}
//     square.content = ''
//     square.id = id
//     return square
//   }
//   var gameSquareSetup = function () {
//     var squares = new Array(totalSquares)
//     var squareId = 0
//
//     for (var i = 0; i < squares.length; i++) {
//       squares[i] = new GameSquare(squareId) //{ state: ''}
//       squareId++
//     }
//     return squares
//   }
//
//   this.gameSquares = gameSquareSetup()
// }
