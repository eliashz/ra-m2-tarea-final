import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Icon, Select } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding: 0.7em 2rem;
  border-bottom: 2px solid ${colors.tertiary};
  background-color: ${colors.secondary};
  gap: 1em;
`
const IconStyled = styled.span`
  font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 40;
  background-image: ${colors.button};
  color: white;
  border-radius: 8px;
  padding: 8px;
  height: 2em;
  cursor: pointer;
`

function SubHeader() {
  return (
    <SubHeaderStyled direction="row" align="center">
      <Select
        id="1"
        name="select1"
        borderRadius="5px"
        textDecoration="none"
        border="1px solid grey"
        fontSize=".8em"
        padding="9px 0 9px 15px"
        width="35%"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      >
        Piso, chalet o garaje...
      </Select>
      <Select
        id="2"
        name="select"
        borderRadius="5px"
        textDecoration="none"
        border="1px solid grey"
        fontSize=".8em"
        padding="9px 0 9px 15px"
        width="35%"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      >
        Madrid, Barcelona o Zaragoza...
      </Select>
      <IconStyled>
        <Icon>search</Icon>
      </IconStyled>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
