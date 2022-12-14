import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Title = styled.h1`
    color: ${({ color }) => color || colors.font.base};
    font-size: ${({ fontSize }) => fontSize || dimensions.font.h1};
`

export default Title