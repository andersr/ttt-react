import { connect } from 'react-redux'
import App from '../../components/App/'

// should subscribe to selectedPlayer and display the menu or the game accordingly

// import store from '../../store'

// console.log('getState: ', store.getState())

const mapStateToProps = (state) => {
  return {
    humanPlayer: state.humanPlayer 
  }
}
const mapDispatchToProps = () => {
  return {
  }
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

// console.log('AppContainer: ', AppContainer)

// const getSelectedPlayer = (player, action) => {
//   switch (action) {
//     case 'SELECT_PLAYER':
//       return player
//     default:
//       return null
//   }
// }
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
