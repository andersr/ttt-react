import { connect } from 'react-redux'
import { selectPlayer, createGame } from '../../actions'
import SelectPlayerMenu from '../../components/SelectPlayerMenu'

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.humanPlayer
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSelectPlayer: selection => {
    dispatch(selectPlayer(selection))
    dispatch(createGame(selection)) // this works but feels like the wrong place to be doing this 
  }
})

const SelectPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayerMenu)


export default SelectPlayerContainer
