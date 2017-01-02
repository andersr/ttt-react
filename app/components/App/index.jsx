import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerContainer from '../../containers/SelectPlayerContainer'
import GameBoardContainer from '../../containers/GameBoardContainer'

const App = ({ humanPlayer, tttGame }) => {
  return  (
    humanPlayer === null ? <div><ModalDialog heading={'Select Player'} content={<SelectPlayerContainer />} allowHide={false} /></div> : <GameBoardContainer />
  )
}
export default App
