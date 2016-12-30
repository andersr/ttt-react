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

const mapStateToProps = (state) => {
  return {
    humanPlayer: null //  getSelectedPlayer(state.humanPlayer, action)
  }
}
const mapDispatchToProps = {
  onSelectPlayer: null
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSelectPlayer: (selection) => {
//       dispatch(runGame(selection))
//     }
//   }
// }

const SelectPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayerMenu)


export default SelectPlayerContainer
