import React from 'react'
import ModalDialog from './ModalDialog.jsx'

const App = ({ humanPlayer }) => {

  // humanPlayer === null ?  <ModalDialog /> :  <div>Run Game</div>

  return  <div className="modal-container"><ModalDialog headerText={'Select Player'} /></div>
}
export default App
