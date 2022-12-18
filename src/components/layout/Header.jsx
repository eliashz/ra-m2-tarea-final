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
  gap: 1em;
`

const LiStyled = styled.li`
  cursor: pointer;
  list-style: none;
  &:hover {
    font-weight: bold;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.main};
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" align="center">
      <Title as="h1" fontSize=".6em">
        MIPISO.com
      </Title>
      {/* Crea una molecula de menu */}
      {/* Define el menú en constants */}
      <UlStyled direction="row">
        <LiStyled>
          <StyledLink to="/">Buscador</StyledLink>
        </LiStyled>
        <LiStyled>
          <StyledLink to="/datos">Datos</StyledLink>
        </LiStyled>
        <LiStyled>
          <StyledLink to="/perfil">Mi Perfil</StyledLink>
        </LiStyled>
      </UlStyled>
    </HeaderStyled>
  )
}

export default Header
