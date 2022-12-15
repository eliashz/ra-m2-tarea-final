import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, FlexBox, Grid } from '../../styles'
import { Card } from '../molecules'

const StyledDiv = styled.div`
  background-color: ${colors.secondary};
  border: 1px solid ${colors.tertiary};
  width: 100%;
  margin-right: 2em;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

function Body({ children }) {
  return (
    <Grid>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <StyledDiv>Mapa</StyledDiv>
    </Grid>
  )
}

Body.propTypes = {
  children: PropTypes.node,
}

export default Body
