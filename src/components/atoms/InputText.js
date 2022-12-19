import PropTypes from 'prop-types'

/* const InputText = styled.input`
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid grey;
  font-size: 0.8em;
  padding: 9px 0 9px 15px;
  width: 35%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

` */

import React from 'react'

export default function InputText({borderRadius, textDecoration, border, fontSize, padding, width, boxShadow}) {
  return (
    <text type='text' styles={{ outline: 'none', borderRadius, textDecoration, border, fontSize, padding, width, boxShadow}}>
      
    </text>
  )
}


export default InputText