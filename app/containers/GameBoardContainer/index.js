import { connect } from 'react-redux'
import GameBoard from '../../components/GameBoard/'

const mapStateToProps = state => {
  return {
    tttGame: state.tttGame
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default GameBoardContainer
