import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, FlexBox } from '../../styles'
import { paths } from '../../constants'

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
        <StyledLink to={paths.home}>Buscador</StyledLink>
      </LiStyled>
      <LiStyled>
        <StyledLink to={paths.data}>Datos</StyledLink>
      </LiStyled>
      <LiStyled>
        <StyledLink to={paths.profile}>Mi Perfil</StyledLink>
      </LiStyled>
    </UlStyled>
  )
}

export default Menu
