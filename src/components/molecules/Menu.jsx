import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, menu, FlexBox } from '../../styles'

const UlStyled = styled(FlexBox)`
  font-size: 0.7em;
  gap: 1em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.main};
`

const LiStyled = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`

function Menu() {
  return (
    <UlStyled direction="row">
      <LiStyled>
        <StyledLink to={menu.buscador}>Buscador</StyledLink>
      </LiStyled>
      <LiStyled>
        <StyledLink to={menu.datos}>Datos</StyledLink>
      </LiStyled>
      <LiStyled>
        <StyledLink to={menu.perfil}>Mi Perfil</StyledLink>
      </LiStyled>
    </UlStyled>
  )
}

export default Menu
