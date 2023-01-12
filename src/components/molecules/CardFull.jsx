import styled from 'styled-components'
import React from 'react'
import { Card, Text } from '../atoms'

const StyledImg = styled.img`
  border-radius: 5px;
  height: 11em; // No tendría que tener estilos fijos
  width: 10em; // No tendría que tener estilos fijos
  object-fit: cover;
`

const StyledCard = styled(Card)`
  position: relative;
  display: inline-block;
  text-align: end;
`
const StyledTitle = styled(Text)`
  position: absolute; // No tendría que tener estilos fijos o estar posicionado como absolut
  top: 152px; // No tendría que tener estilos fijos o estar posicionado como absolut
  right: 10px; // No tendría que tener estilos fijos o estar posicionado como absolut
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
