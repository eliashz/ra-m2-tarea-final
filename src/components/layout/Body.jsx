import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, FlexBox } from '../../styles'

const StyledDiv = styled.div`
  background-color: ${colors.secondary};
  border: 1px solid ${colors.tertiary};
  width: 50%;
  text-align: center;
  margin: 2em;
`

function Body({ children }) {
  return (
    <FlexBox direction="row" justify="center">
      <div
        style={{
          backgroundColor: 'lightgrey',
          border: '1px solid grey',
          width: '50%',
        }}
      >
        Buscador
      </div>
      <StyledDiv>Mapa</StyledDiv>
    </FlexBox>
  )
}

Body.propTypes = {
  children: PropTypes.node,
}

export default Body
