import { connect } from 'react-redux'
import { selectPlayer } from '../../actions'
import SelectPlayerMenu from '../../components/SelectPlayerMenu'

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.humanPlayer
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
