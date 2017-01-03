import { connect } from 'react-redux'
import { playerMove } from '../../actions/'
import Grid from '../../components/Grid/'

const mapStateToProps = state => {
  return {
    content: state.tttGame,
    humanPlayer: state.players.humanPlayer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSquare: (id, player) => dispatch(playerMove(id, player))
  }
}

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GameBoardContainer
