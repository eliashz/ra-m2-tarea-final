import styled from 'styled-components'
import React from 'react'
import { Card, Text } from '../atoms'

const StyledImg = styled.img`
  object-fit: cover;
`

const StyledCard = styled(Card)`
  position: relative;
  display: inline-block;
  text-align: end;
`
const StyledText = styled(Text)`
  position: absolute;
  top: 152px;
  right: 10px;
`

function CardFull() {
  return (
    <StyledCard>
      <StyledText color="#000" fontSize=".9em">
        Piso en Barcelona, Grac... 939.000€
      </StyledText>
      <StyledImg src="../project/casa.jpeg" alt="Casa" />
    </StyledCard>
  )
}

export default CardFull
