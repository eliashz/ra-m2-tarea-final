import styled from 'styled-components'
import React from 'react'
import { Card, Text } from '../atoms'
import { dimensions } from '../../styles'

const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: ${dimensions.border};
`

const StyledCard = styled(Card)`
  position: relative;
  display: inline-block;
  text-align: end;
`
const StyledText = styled(Text)`
  position: absolute;
  right: 5%;
  bottom: 0.5%;
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
