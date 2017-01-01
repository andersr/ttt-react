import { connect } from 'react-redux'
import GameBoard from '../../components/GameBoard/'

// // create a
// const createTttGame = () => {
//   const totalSquares = 9
//   const squares = new Array(totalSquares)
//   const GameSquare = function(id){
//     this.content = ''
//     this.id = id
//   }
//   for (var i = 0; i < squares.length; i++) {
//     squares[i] = new GameSquare(i)
//   }
//   return squares
// }

const mapStateToProps = state => {
  return {
    tttGame: state.tttGame
  }
}
const mapDispatchToProps = () => {
  return {}
}

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default GameBoardContainer
