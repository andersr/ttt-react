import { connect } from 'react-redux'
import { selectPlayer } from '../../actions'
import SelectPlayerMenu from '../../components/SelectPlayerMenu'

// const getSelectedPlayer = (player, action) => {
//   switch (action) {
//     case 'SELECT_PLAYER':
//       return player
//     default:
//       return null
//   }
// }
// const options = ['x', 'o']

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.humanPlayer
  }
}
const mapDispatchToProps = ({
  selectPlayer: null
})

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
