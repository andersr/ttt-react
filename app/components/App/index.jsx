import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerContainer from '../../containers/SelectPlayerContainer'
import GameBoardContainer from '../../containers/GameBoardContainer'
import { Grid } from '../Grid/Grid.js'

const App = ({ humanPlayer, tttGame }) => {
  return  (
    humanPlayer === null ? <div><ModalDialog heading={'Select Player'} content={<SelectPlayerContainer />} allowHide={false} /></div> : <Grid content={tttGame} columns={3} />
  )
}
export default App
