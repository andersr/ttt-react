import { connect } from 'react-redux'
import App from '../../components/App/'

const mapStateToProps = state => {
  return {
    humanPlayer: state.humanPlayer,
    tttGame: state.tttGame
  }
}
const mapDispatchToProps = () => {
  return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
