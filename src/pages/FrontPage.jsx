import styled from 'styled-components'
import React from 'react'
import { Body, SubHeader } from '../components/layout'
import { FlexBox } from '../styles'
import { Button } from '../components/atoms'

function FrontPage() {
  const StyledFlexBox = styled(FlexBox)`
    width: 50%;
    text-align: center;
  `
  return (
    <>
      <SubHeader />
      <Body />
      <StyledFlexBox justify="center" direction="row">
        <Button
          color="#fff"
          backgroundColor="#4281e3"
          borderRadius="7px"
          fontSize=".7em"
          height="25px"
          width="120px"
          border="none"
          cursor="pointer"
        >
          Cargar más
        </Button>
      </StyledFlexBox>
    </>
  )
}

export default FrontPage
