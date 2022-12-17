import styled from 'styled-components'
import { colors } from '../../styles'

const Button = styled.button`
  background-color: ${( {background}) => background || colors.secondary};
  color: ${( {color}) => color || colors.main};
`

export default Button;