import styled from 'styled-components'
import React from 'react'
import { Body, SubHeader } from '../components/layout'
import { FlexBox } from '../styles'
import { Button } from '../components/atoms'

function Home() {
  const StyledFlexBox = styled(FlexBox)`
    width: 50%;
  `

  const StyledButton = styled(Button)`
    border-radius: 7px;
    font-size: 0.7em;
    height: 25px;
    width: 120px;
  `

  return (
    <>
      <SubHeader />
      <Body />
      <StyledFlexBox justify="center" direction="row">
        <StyledButton color="#fff" background="#4281e3" hoverColor="#4281e3CC">
          Cargar más
        </StyledButton>
      </StyledFlexBox>
    </>
  )
}

export default Home
