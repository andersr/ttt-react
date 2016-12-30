import React from 'react'
import ModalDialog from './ModalDialog.jsx'

const App = ({ humanPlayer }) => humanPlayer === null ?  <ModalDialog /> :  <div>Run Game</div>

export default App
