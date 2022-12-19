import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Title } from '../atoms'
import { Menu } from '../molecules'

const HeaderStyled = styled(FlexBox)`
  padding: 0.4rem 2rem;
  border-bottom: 2px solid ${colors.tertiary};
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" align="center">
      <Title as="h1" fontSize=".6em">
        MIPISO.com
      </Title>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
