import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerContainer from '../../containers/SelectPlayerContainer'
import GameBoardContainer from '../../containers/GameBoardContainer'
import Heading from '../Heading'
import TestSquareContainer from '../testSquare.jsx'

const App = ({ humanPlayer, botPlayer, tttGame }) => {
  const playerInfo = (human, bot) => `You: ${human.toUpperCase()} / Computer: ${bot.toUpperCase()}`
  return  (
    humanPlayer === null ? <div><ModalDialog heading={'Select Player'} content={<SelectPlayerContainer />} allowHide={false} /></div> : <div><Heading text={playerInfo(humanPlayer, botPlayer)} /><GameBoardContainer /><TestSquareContainer /></div>
  )
}
export default App
