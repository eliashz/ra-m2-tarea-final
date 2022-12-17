import styled from 'styled-components'
import React from 'react'
import { Card, Text } from '../atoms'

const StyledImg = styled.img`
  border-radius: 5px;
  height: 215px;
  width: 200px;
  object-fit: cover;
`

const StyledCard = styled(Card)`
  position: relative;
  display: inline-block;
  text-align: end;
`
const StyledTitle = styled(Text)`
  position: absolute;
  top: 152px;
  right: 10px;
`

function CardFull() {
  return (
    <StyledCard>
      <StyledTitle color="#000" fontSize=".9em">
        Piso en Barcelona, Grac... 939.000€
      </StyledTitle>
      <StyledImg src="../project/casa.jpeg" alt="Casa" />
    </StyledCard>
  )
}

export default CardFull
