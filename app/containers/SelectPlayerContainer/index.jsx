import { connect } from 'react-redux'
import { setPlayers, runGame } from '../../actions'
import SelectPlayerMenu from '../../components/SelectPlayerMenu'

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.players.humanPlayer
  }
}

const mapDispatchToProps = dispatch => ({
  handleSelectPlayer: selectedPlayer => {
    dispatch(setPlayers(selectedPlayer))
    dispatch(runGame())
  }
})

const SelectPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayerMenu)


export default SelectPlayerContainer
