import { connect } from 'react-redux'
import App from '../components/App'

const getSelectedPlayer = (player, action) => {
  switch (action) {
    case 'SELECT_PLAYER':
      return player
    default:
      return null
  }
}

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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// class AppContainer extends React.Component {
//   constructor() {
//     super();
//     // this.state = { comments: [] }
//   }
//   // componentDidMount() {
//   //   $.ajax({
//   //     url: "/my-comments.json",
//   //     dataType: 'json',
//   //     success: function(comments) {
//   //       this.setState({comments: comments});
//   //     }.bind(this)
//   //   });
//   // }
//   render() {
//     return <ModalDialog />
//   }
// }

export default AppContainer
