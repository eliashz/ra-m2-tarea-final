import styled from 'styled-components'
import { colors, Grid } from '../../styles'
import { Houses } from '../organisms'

const StyledDiv = styled.div`
  background-color: ${colors.secondary};
  border: 1px solid ${colors.tertiary};
  text-align: center;
  max-height: 800px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

function Body() {
  return (
    <Grid margin="2em" gap="1em">
      <Houses />
      <StyledDiv>Mapa</StyledDiv>
    </Grid>
  )
}

export default Body
