export const createTttGame = () => {
  const totalSquares = 9
  const squares = []
  const GameSquare = function(id){
    this.content = ''
    this.id = id
  }
  for (var i = 0; i < totalSquares; i++) {
    squares.push(new GameSquare(i))
  }
  return squares
}
