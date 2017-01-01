import { connect } from 'react-redux'
import GameBoard from '../../components/GameBoard/'

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
