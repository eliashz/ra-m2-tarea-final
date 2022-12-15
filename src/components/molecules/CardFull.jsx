import styled from 'styled-components'
import React from 'react'
import { FlexBox } from '../../styles'
import { Card } from '../atoms'

const Img = styled.img`
  border-radius: 5px;
  height: 215px;
  width: 200px;
  object-fit: cover;
`
function CardFull() {
  return (
    <Card>
      <Img src="../project/casa.jpeg" alt="Casa" />
    </Card>
  )
}

export default CardFull
