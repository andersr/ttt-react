import React from 'react'
import GameSquareContainer from '../../containers/GameSquareContainer'

const Grid = ({ content, columns, handleClickSquare, humanPlayer }) => {

  const createRows = (arr) => {
    let rowBlock = columns
    let rows = []

    for (let i = 0; i < arr.length; i += columns) {
      rows.push(arr.slice(i, rowBlock))
      rowBlock += rowBlock
    }
    return rows
  }

  const addRowsToGrid = (arr) => {
    let gridRows = createRows(arr)

    return (gridRows.map((row, index) => {
        return <li key={index}><GridRow row={row} handleClickSquare={handleClickSquare} humanPlayer={humanPlayer} /></li>
      })
    )
  }

  return (
    <ul className="grid">{
      addRowsToGrid(content)
    }</ul>
  )
}


const GridRow = ({ row, handleClickSquare, humanPlayer }) => {
  return (
    <ul className="grid-row">{
      row.map((square, index) => {
        return <li key={index} className="grid-square" onClick={() => handleClickSquare(square.id, humanPlayer)}><GameSquareContainer id={square.id} /></li>
      })
    }</ul>
  )
}


Grid.propTypes = {
  columns: React.PropTypes.number
}

Grid.defaultProps = {
  columns: 3
}

export default Grid
