export const setPlayers = humanPlayer => {
  this.humanPlayer = humanPlayer
  this.botPlayer = humanPlayer === 'x' ? 'o' : 'x'
  // var totalSquares = 9
  //
  // var GameSquare = function (id) {
  //   var square = {}
  //   square.content = ''
  //   square.id = id
  //   return square
  // }
  // var gameSquareSetup = function () {
  //   var squares = new Array(totalSquares)
  //   var squareId = 0
  //
  //   for (var i = 0; i < squares.length; i++) {
  //     squares[i] = new GameSquare(squareId) //{ state: ''}
  //     squareId++
  //   }
  //   return squares
  // }
  //
  // this.gameSquares = gameSquareSetup()
}

export const createTttGame = () => {
  const totalSquares = 9
  const squares = new Array(totalSquares)
  const GameSquare = function(id){
    this.content = ''
    this.id = id
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i] = new GameSquare(i)
  }
  return squares
}


// export default TttGameSetup
