import React from 'react'

const Grid = ({ content, columns, handleClickSquare }) => {

  // const handleClickSquare = id => {
  //   console.log('square: ', id);
  // }

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
        return <li key={index}><GridRow row={row} handleClickSquare={handleClickSquare} /></li>
      })
    )
  }

  return (
    <ul className="grid">{
      addRowsToGrid(content)
    }</ul>
  )
}

const GridRow = ({ row, handleClickSquare }) => {
  return (
    <ul className="grid-row">{
      row.map((square, index) => {
        return <li key={index} className="grid-square" onClick={() => handleClickSquare(square.id, 'x')}>{square.content} (id: {square.id})</li>
      })
    }</ul>
  )
}

// const GridSquare = ({ square }) => {
//   return (
//     <div className="grid-square">{square.content} (id: {square.id})</div>
//   )
// }

Grid.propTypes = {
  columns: React.PropTypes.number
}

Grid.defaultProps = {
  columns: 3
}

export default  Grid

//  onClick={() => handleClickSquare(square.id)}
// var src = [0,1,2,3,4,5,6,7,8]
//
// var targetStructure = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8]
// ]
