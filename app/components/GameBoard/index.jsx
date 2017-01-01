import React from 'react'
import GameSquare from '../GameSquare'

const GameBoard = ({ tttGame }) => {

  console.log('tttGame: ', tttGame)
  // let squareId = 0
  // const boardColumns = 3
  // const boardRows = 3
  //
  // const addRow = (rowIndex) => {
  //   let row = []
  //   let key = "r" + rowIndex
  //   for (let j = 0; j < columns.length; j++) {
  //     row.push(<GameSquare id={squareId} />)
  //     squareId++
  //   }
  //   return <div key={key} className="ttt-row">{row}</div>
  // }
  //
  // const addRows = () => {
  //   let rows = []
  //   for (let i = 0; i < rows.length; i++) {
  //     board.push(addRow(rows[i]))
  //   }
  //   return <div key={key} className="ttt-row">{row}</div>{board}
  // }
  return (
    <div className="ttt-board">{'Game Board'}</div>
  )
}

export default GameBoard

// const addBoardRow = (columns, squareId) => {
//   return (
//     <div className="ttt-row">
//       {tttGame.map(function(tttSquare){
//         while (columns > 0) {
//           const square  = <GameSquare key={tttSquare.id} content={tttSquare.content} />
//           columns--
//           return square
//         }
//       })}
//     </div>
//   )
// }
