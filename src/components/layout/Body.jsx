import styled from 'styled-components'
import { colors, Grid } from '../../styles'
import { Card } from '../atoms'
import { CardHouse } from '../molecules'

const StyledDiv = styled.div`
  background-color: ${colors.secondary};
  border: 1px solid ${colors.tertiary};
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

function Body() {
  return (
    <Grid margin="2em" gap="1em">
      <Grid columns="repeat(auto-fit, minmax(10rem, 1fr))" gap="1em">
        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />

        <CardHouse />
      </Grid>
      <StyledDiv>Mapa</StyledDiv>
    </Grid>
  )
}

export default Body
