import { connect } from 'react-redux'
import { selectSquare } from '../../actions/'
import Grid from '../../components/Grid/'

const mapStateToProps = state => {
  return {
    content: state.tttGame,
    humanPlayer: state.players.humanPlayer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSquare: (id, player) => dispatch(selectSquare(id, player))
  }
}

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GameBoardContainer
