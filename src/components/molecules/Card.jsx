import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 215px;
  width: 200px;
  border-radius: 2px;
  background-color: yellow;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
function Card() {
  return <StyledDiv>Card</StyledDiv>
}

export default Card
