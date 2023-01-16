import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox, fonts } from '../../styles'
import { Text } from '../atoms'
import { Menu } from '../molecules'

const HeaderStyled = styled(FlexBox)`
  padding: 0.4rem 2rem;
  border-bottom: 2px solid ${colors.tertiary};
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" align="center">
      <Text as="h1" fontSize=".6em" fontFamily={fonts.title}>
        MIPISO.com
      </Text>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
