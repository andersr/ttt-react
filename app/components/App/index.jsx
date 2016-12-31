import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerContainer from '../../containers/SelectPlayerContainer'
import GameBoard from '../GameBoard'

const App = ({ humanPlayer }) => {
  return  (
    humanPlayer === null ? <div><ModalDialog heading={'Select Player'} content={<SelectPlayerContainer />} allowHide={false} /></div> : <GameBoard />
  )
}
export default App
