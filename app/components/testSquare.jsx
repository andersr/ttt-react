import React from 'react'
import { connect } from 'react-redux'
import { updateTestSquare } from '../actions/'

const TestSquare = ({ handleClickSquare, content }) => {
  return (<div className="test" onClick={() => handleClickSquare('foo')}>|{content}|</div>)
}


const mapStateToProps = state => {
  return {
    content: state.testSquare
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSquare: content => dispatch(updateTestSquare(content))
  }
}

const TestSquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestSquare)

export default TestSquareContainer
