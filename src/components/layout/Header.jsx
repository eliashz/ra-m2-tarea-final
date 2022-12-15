import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Title } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding: 0.4rem 2rem;
  border-bottom: 2px solid ${colors.tertiary};
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
      <Title as="h1" fontSize=".6em">
        MIPISO.com
      </Title>
      <UlStyled direction="row">
        <LiStyled>
          <Link to="/">Buscador</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/datos">Datos</Link>
        </LiStyled>
        <LiStyled>
          <Link to="/perfil">Mi Perfil</Link>
        </LiStyled>
      </UlStyled>
    </HeaderStyled>
  )
}

export default Header
