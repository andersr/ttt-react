import { connect } from 'react-redux'
import { selectPlayer, createGame } from '../../actions'
import SelectPlayerMenu from '../../components/SelectPlayerMenu'

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.players.humanPlayer
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSelectPlayer: selection => {
    dispatch(selectPlayer(selection))
  }
})

const SelectPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayerMenu)


export default SelectPlayerContainer
