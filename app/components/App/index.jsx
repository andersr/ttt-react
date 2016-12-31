import React from 'react'
import ModalDialog from '../ModalDialog'
import SelectPlayerMenu from '../SelectPlayerMenu'

const App = ({ humanPlayer }) => {
  console.log('humanPlayer: ', humanPlayer)
  return  <div><ModalDialog heading={'Select Player'} content={<SelectPlayerMenu />} /></div>
}
export default App
