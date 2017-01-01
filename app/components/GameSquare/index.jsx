import React from 'react'

const GameSquare = ({ id, content }) => {
  const key = "s" + id
  return  (
    <div key={key}>{content}</div>
  )
}

GameSquare.propTypes = {
  content: React.PropTypes.oneOf(['', 'x', 'o']).isRequired,
  id: React.PropTypes.number.isRequired
}

GameSquare.defaultProps = {
  content: ''
}

export default GameSquare
