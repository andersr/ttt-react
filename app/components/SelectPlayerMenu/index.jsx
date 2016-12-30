import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

const SelectPlayerMenu = ({ handleClick }) => {
  return (
     <ButtonGroup>
       <Button onClick={() => handleClick('x')}>X</Button>
       <Button onClick={() => handleClick('o')}>O</Button>
   </ButtonGroup>
  )
}
export default SelectPlayerMenu
