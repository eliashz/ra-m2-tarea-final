import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Icon, Select, Cities, Properties, Label } from '../atoms'

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
      <Label id="type" />
      <Select
        id="type"
        name="tipo"
        values={Properties}
        width="35%"
        defaultText="Piso, casa o garaje..."
      />
      <Label id="city" />
      <Select
        id="city"
        name="ciudad"
        values={Cities}
        width="35%"
        defaultText="Madrid, Barcelona o Zaragoza..."
      />
      <IconStyled>
        <Icon>search</Icon>
      </IconStyled>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
