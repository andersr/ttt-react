import React from 'react'
import { connect } from 'react-redux'

const GridSquare = ({ content }) => {
  return ( <span>{content}</span> )
}

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.tttGame[ownProps.id].content
  }
}

const GameSquareContainer = connect(
  mapStateToProps
)(GridSquare)

export default GameSquareContainer
