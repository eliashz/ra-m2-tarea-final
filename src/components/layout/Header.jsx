import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Title } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding: 0.4rem 2rem;
`
const UlStyled = styled(FlexBox)`
  font-size: 0.7em;
  color: ${colors.main};
  gap: 1em;
`

const LiStyled = styled.li`
  cursor: pointer;
  list-style: none; 
  &:hover {
      font-weight: bold;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" align="center">
      <Title as="h1" fontSize=".8em" fontFamily="'Comfortaa', cursive;">
        MIPISO.com
      </Title>
      <UlStyled direction="row">
        <LiStyled>Buscador</LiStyled>
        <LiStyled>Datos</LiStyled>
        <LiStyled>Mi Perfil</LiStyled>
      </UlStyled>
    </HeaderStyled>
  )
}

export default Header
