import React from 'react'
import { connect } from 'react-redux'
// import { selectSquare } from '../../actions/'
// import Grid from '../../components/Grid/'

const GridSquare = ({ content }) => {
  return ( <span>{content}</span> )
}


const mapStateToProps = (state, ownProps) => {
  return {
    content: state.tttGame[ownProps.id].content
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const GameSquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridSquare)

export default GameSquareContainer
