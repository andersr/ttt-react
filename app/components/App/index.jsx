import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerContainer from '../../containers/SelectPlayerContainer'
import GameBoard from '../GameBoard'

const App = ({ humanPlayer }) => {
  // console.log('humanPlayer: ', humanPlayer)
  return  (
    humanPlayer === null ? <div><ModalDialog heading={'Select Player'} content={<SelectPlayerContainer />} /></div> : <GameBoard />
  )
}
export default App
