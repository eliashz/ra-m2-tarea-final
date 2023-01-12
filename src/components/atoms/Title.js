import styled from 'styled-components'
import { colors, dimensions, fonts } from '../../styles'

// Este Title debería aceptar h2, h3, ... y comprobarse en propTypes
const Title = styled.h1`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.h1};
  font-family: ${({ fontFamily }) => fontFamily || fonts.title};
`

export default Title
