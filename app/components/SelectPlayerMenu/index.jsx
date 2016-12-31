import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const SelectPlayerMenu = ({ handleSelectPlayer }) => {
  // console.log('handleSelectPlayer: ', props)
  const options = ['x', 'o']
  return (
     <ButtonGroup>
       <Button onClick={() => handleSelectPlayer(options[0])}>{options[0].toUpperCase()}</Button>
       <Button onClick={() => handleSelectPlayer(options[1])}>{options[1].toUpperCase()}</Button>
   </ButtonGroup>
  )
}
export default SelectPlayerMenu
