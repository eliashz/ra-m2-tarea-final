import styled from 'styled-components'
import { colors } from '../../styles'

const Button = styled.button`
  background-color: ${( {backgroundColor}) => backgroundColor || colors.secondary};
  color: ${( {color}) => color || colors.main};
`

export default Button;